import {useQuery, UseQueryOptions} from 'react-query';
import qs from 'qs';
import Mangadex, {
  MangadexAuthorRelationship,
  MangadexCoverArtRelationship,
  MangadexLocalizedValue,
  SearchMangaOptions,
  MangadexRestError,
} from '@vetr/mangadex';

export type UserMangaSearchResult = {
  total: number;
  data: {
    title?: MangadexLocalizedValue;
    coverArtUrl: string;
    id: string;
    author: string;
  }[];
};

export type UserMangaSearchArgs = SearchMangaOptions;
export type UserMangaSearchError = MangadexRestError;

export const useMangaSearch = (
  args?: UserMangaSearchArgs,
  options?: UseQueryOptions<UserMangaSearchResult, UserMangaSearchError>,
) =>
  useQuery<UserMangaSearchResult, UserMangaSearchError>(
    `manga-search-${qs.stringify(args)}`,
    async () => {
      const result = await Mangadex.Rest.searchManga({
        ...args,
        includes: ['cover_art', 'author'],
      });

      return {
        total: result.total,
        data: result.data.map(d => {
          const cover = d.relationships.find(r => r.type === 'cover_art') as MangadexCoverArtRelationship;
          const author = d.relationships.find(r => r.type === 'author') as MangadexAuthorRelationship;

          return {
            id: d.id,
            title: d.attributes.title,
            author: author.attributes.name,
            coverArtUrl: Mangadex.Utils.buildCoverArtUrl(d.id, cover.attributes?.fileName || '', 'low'),
          };
        }),
      };
    },
    options,
  );
