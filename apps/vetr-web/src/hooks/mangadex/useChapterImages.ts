import {useQuery, UseQueryOptions} from 'react-query';
import Mangadex, {MangadexImageQuality, MangadexRestError} from '@vetr/mangadex';

export type UseChapterImagesResult = string[];
export type UseChapterImages = any;
export type UseChapterImagesError = MangadexRestError;

export const useChapterImages = (
  id?: string,
  options?: {
    quality: MangadexImageQuality;
  },
  queryOptions?: UseQueryOptions<UseChapterImagesResult, UseChapterImagesError>,
) =>
  useQuery<UseChapterImagesResult, UseChapterImagesError>(
    `chapter-images-${id}`,
    async () => {
      const _options = {
        options,
        ...{
          quality: MangadexImageQuality.DATA,
        },
      };

      if (!id) {
        throw new MangadexRestError({
          code: 'ERR_BAD_ID',
          message: 'bad chapter id',
        });
      }

      const images = await Mangadex.Rest.getChapterImages(id);

      switch (_options.quality) {
        case MangadexImageQuality.DATA:
          return images.chapter.data.map(filename =>
            Mangadex.Utils.buildChapterImageUrl(images.chapter.hash, filename),
          );
        case MangadexImageQuality.DATA_SAVER:
          return images.chapter.dataSaver.map(filename =>
            Mangadex.Utils.buildChapterImageUrl(images.chapter.hash, filename),
          );
      }
    },
    queryOptions,
  );
