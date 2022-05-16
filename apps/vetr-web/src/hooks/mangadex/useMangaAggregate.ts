import {useQuery, UseQueryOptions} from 'react-query';
import qs from 'qs';
import Mangadex, {GetMangaAggregateOptions, MangadexRestError} from '@vetr/mangadex';

export type UseMangaAggregateResult = {
  id: string;
  formatted: string;
  chapter: string;
  volume: string;
}[];

export type UseMangaAggregateOptions = GetMangaAggregateOptions;

export type UseMangaAggregateError = MangadexRestError;

export const useMangaAggregate = (
  id?: string,
  options?: UseMangaAggregateOptions,
  queryOptions?: UseQueryOptions<UseMangaAggregateResult, UseMangaAggregateError>,
) =>
  useQuery<UseMangaAggregateResult, UseMangaAggregateError>(
    `manga-${id}-aggregate-${qs.stringify(options)}`,
    async () => {
      if (!id) {
        throw new MangadexRestError({
          code: 'ERR_BAD_ID',
          message: 'bad manga id',
        });
      }

      const aggregate = await Mangadex.Rest.getMangaAggregate(id, options);

      function sortFn(a: string, b: string) {
        // none volume = latest volume
        const _a = a === 'none' ? Number.MAX_SAFE_INTEGER : parseInt(a);
        const _b = b === 'none' ? Number.MAX_SAFE_INTEGER : parseInt(b);

        if (_a > _b) {
          return 1;
        }
        if (_a < _b) {
          return -1;
        }
        return 0;
      }

      return Object.keys(aggregate.volumes)
        .sort(sortFn)
        .reverse()
        .flatMap(volKey => {
          const vol = aggregate.volumes[volKey];
          return Object.keys(vol.chapters)
            .sort(sortFn)
            .reverse()
            .map(chapterKey => ({
              volume: volKey,
              formatted: `${volKey === 'none' ? '' : `Vol ${volKey} `}Ch. ${vol.chapters[chapterKey].chapter}`,
              chapter: chapterKey,
              id: vol.chapters[chapterKey].id,
            }));
        });
    },
    queryOptions,
  );
