import {useQuery, UseQueryOptions} from 'react-query';
import qs from 'qs';

import Mangadex, {
  MangadexCountryCode,
  MangadexCoverArtRelationship,
  MangadexMangaRelationship,
  MangadexRestError,
  SearchChapterOptions,
} from '@vetr/mangadex';

export type UseChaptersResult = {
  title?: string;
  mangaTitle?: string;
  coverArtUrl: string;
  language: MangadexCountryCode;
  id: string;
  number: string | null;
  mangaId: string;
}[];
export type UseChaptersArgs = SearchChapterOptions;
export type UseChaptersError = MangadexRestError;

const DEFAULT_ARGS = {
  includes: ['manga', 'scanlation_group'],
  contentRating: ['safe', 'suggestive'],
  order: {
    readableAt: 'desc',
  },
  limit: 12,
} as SearchChapterOptions;

export const useChapters = (args?: UseChaptersArgs, options?: UseQueryOptions<UseChaptersResult, UseChaptersError>) =>
  useQuery<UseChaptersResult, UseChaptersError>(
    `chapters-${qs.stringify(args)}`,
    async () => {
      const chapters = await Mangadex.Rest.searchChapter({...DEFAULT_ARGS, ...args} || DEFAULT_ARGS);

      const coversMap: Record<string, string> = {};

      const mangaIds = chapters.data.map(chapter => {
        const manga = chapter.relationships.find(r => r.type === 'manga');
        if (manga) {
          coversMap[chapter.id] = manga.id;
        }

        // TODO:
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return manga!.id;
      });

      const mangas = await Mangadex.Rest.searchManga({
        ids: mangaIds,
        includes: ['cover_art'],
        limit: args?.limit || DEFAULT_ARGS.limit,
      });

      const _map: Record<string, string> = {};

      mangas.data.forEach(manga => {
        const coverArt = manga.relationships.find(r => r.type === 'cover_art') as MangadexCoverArtRelationship;

        if (coverArt) {
          _map[manga.id] = Mangadex.Utils.buildCoverArtUrl(manga.id, coverArt.attributes?.fileName || '', 'low');
        }
      });

      return chapters.data.map(chapter => {
        const manga = chapter.relationships.find(r => r.type === 'manga') as MangadexMangaRelationship;

        return {
          isExternal: Boolean(chapter.attributes.externalUrl),
          externalUrl: chapter.attributes.externalUrl,
          language: chapter.attributes.translatedLanguage,
          id: chapter.id,
          mangaId: manga.id,
          title: chapter.attributes.title,
          mangaTitle: manga.attributes?.title.en,
          coverArtUrl: _map[coversMap[chapter.id]],
          number: chapter.attributes.chapter,
        };
      });
    },
    options,
  );
