import React, {useCallback, useMemo} from 'react';
import {MangadexImageQuality, MangadexCountryCode} from '@vetr/mangadex';
import {useNavigate, useParams} from 'react-router';

import {useMangaAggregate, useChapterImages, useChapter} from '@/hooks/mangadex';
import ChapterImagesRenderer from './components/chapter-images-renderer';
import ChapterFooter from './components/chapter-footer';
import ChapterRedirectConsent from './components/chapter-redirect-consent';

export type ChapterPageParams = {
  id: string;
};

export default function ChapterPage() {
  const {id} = useParams<ChapterPageParams>();

  const {data: chapter, isLoading: isLoadingChapter} = useChapter(id, {
    refetchOnWindowFocus: false,
  });

  const {data: aggregate, isLoading: isLoadingAggregate} = useMangaAggregate(
    chapter?.manga.id,
    {
      translatedLanguage: ['en'] as MangadexCountryCode[],
    },
    {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      enabled: Boolean(chapter?.manga.id) && !chapter?.externalUrl,
    },
  );

  const nextPrevChapter = useMemo(() => {
    if (aggregate) {
      const currectChapterIndex = aggregate.findIndex(val => val.id === id);

      return {
        next: aggregate?.[currectChapterIndex - 1]?.id,
        prev: aggregate?.[currectChapterIndex + 1]?.id,
      };
    }
    return {
      next: undefined,
      prev: undefined,
    };
  }, [aggregate, id]);

  const {data: images, isLoading: isLoadingImages} = useChapterImages(
    id,
    {quality: MangadexImageQuality.DATA_SAVER},
    {
      refetchOnWindowFocus: false,
      enabled: Boolean(chapter?.manga.id) && !chapter?.externalUrl,
    },
  );

  const navigate = useNavigate();

  const onNavigateChapter = useCallback(
    id => {
      navigate(`/chapter/${id}`, {replace: true});
    },
    [navigate],
  );

  return (
    <div tw="relative overflow-auto max-h-screen h-screen">
      <div tw="mb-14">
        {chapter?.externalUrl ? (
          <div tw="h-screen flex justify-center pt-24">
            <ChapterRedirectConsent to={chapter.externalUrl} />
          </div>
        ) : (
          <ChapterImagesRenderer images={images} />
        )}
      </div>
      <div tw="fixed bottom-0 left-0 right-0">
        <ChapterFooter
          isLoading={isLoadingAggregate || isLoadingChapter}
          currentChapterId={id}
          mangaTitle={chapter?.manga.title?.['en']}
          chapterTitle={`Ch. ${chapter?.key} - ${chapter?.title}`}
          nextChapterId={nextPrevChapter.next}
          previousChapterId={nextPrevChapter.prev}
          onNavigateChapter={onNavigateChapter}
        />
      </div>
    </div>
  );
}
