import {useInfiniteQuery, UseInfiniteQueryOptions} from 'react-query';
import qs from 'qs';
import Mangadex, {
  GetMangaFeedOptions,
  MangadexCountryCode,
  MangadexEntityType,
  MangadexRestError,
} from '@vetr/mangadex';

export type UseMangaFeedsResult = {
  formatted: string;
  data: {
    language: MangadexCountryCode;
    title: string;
    id: string;
  }[];
}[];

export type UseMangaFeedArgs = {
  id: string;
};

export type UseMangaFeedError = MangadexRestError;

const LIMIT = 20;

export const useMangaFeed = (
  id: string,
  options?: GetMangaFeedOptions,
  queryOptions?: UseInfiniteQueryOptions<UseMangaFeedsResult, UseMangaFeedError>,
) => {
  return useInfiniteQuery<UseMangaFeedsResult, UseMangaFeedError>(
    `manga-${id}-feed-${qs.stringify(options)}`,
    async ({pageParam = 0}) => {
      const feed = await Mangadex.Rest.getMangaFeed(id, {
        includes: [MangadexEntityType.SCANLATION_GROUP, MangadexEntityType.USER],
        translatedLanguage: ['en'],
        order: {
          volume: 'desc',
          chapter: 'desc',
        },
        limit: LIMIT,
        offset: (options?.limit || LIMIT) * pageParam,
        ...options,
      });

      let temp = null;
      const ret = [];

      for (let i = 0; i < feed.data.length; i++) {
        const currentChapter = feed.data[i];
        const nextChapter = feed.data[i + 1];

        const data = {
          language: currentChapter.attributes.translatedLanguage,
          id: currentChapter.id,
          title: currentChapter.attributes.title || 'No title',
        };

        if (!temp) {
          temp = {
            key: currentChapter.attributes.chapter,
            formatted: `Chapter ${currentChapter.attributes.chapter}`,
            data: [data],
          };
        } else {
          temp.data.push(data);
        }

        if (nextChapter) {
          if (nextChapter.attributes.chapter !== temp.key) {
            ret.push(temp);
            temp = null;
          }
        }
      }

      if (temp) {
        ret.push(temp);
      }

      return ret as UseMangaFeedsResult;
    },
    {
      ...queryOptions,
    },
  );
};
