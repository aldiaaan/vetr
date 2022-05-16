import {useQuery, UseQueryOptions} from 'react-query';
import Mangadex, {MangadexEntityType, MangadexLocalizedValue, MangadexRestError} from '@vetr/mangadex';

export type UseChapterResult = {
  title: string;
  key: string | null;
  manga: {
    id: string;
    title?: MangadexLocalizedValue;
  };
  externalUrl: string | null;
};
export type UseChapterArgs = any;
export type UseChapterError = MangadexRestError;

export const useChapter = (id?: string, queryOptions?: UseQueryOptions<UseChapterResult, UseChapterError>) =>
  useQuery<UseChapterResult, UseChapterError>(
    `chapter-${id}`,
    async () => {
      if (!id) {
        throw new MangadexRestError({
          code: 'ERR_BAD_ID',
          message: 'bad chapter id',
        });
      }

      const chapter = await Mangadex.Rest.getChapter(id, {
        includes: [MangadexEntityType.MANGA],
      });

      return {
        externalUrl: chapter.data.attributes.externalUrl,
        title: chapter.data.attributes.title,
        key: chapter.data.attributes.chapter,
        manga: {
          id: chapter.data.relationships.find(r => r.type === 'manga')!.id,
          title: chapter.data.relationships.find(r => r.type === 'manga')!.attributes?.title,
        },
      };
    },
    queryOptions,
  );
