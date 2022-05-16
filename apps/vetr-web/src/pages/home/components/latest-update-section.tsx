import {useChapters} from '@/hooks/mangadex/useChapters';
import React from 'react';
import ChapterSection from './chapter-section';

export default function LatestUpdateSection() {
  const {data, isLoading} = useChapters({
    limit: 12,
    translatedLanguage: ['en'],
  });

  return (
    <ChapterSection
      isLoading={isLoading}
      title="Latest updates"
      data={data?.map(d => ({
        title: d.mangaTitle,
        subTitle: d.number || '',
        id: d.id,
        language: d.language,
        coverArtUrl: d.coverArtUrl,
      }))}
    />
  );
}
