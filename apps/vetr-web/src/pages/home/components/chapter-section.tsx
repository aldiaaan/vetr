import React from 'react';
import {MangadexCountryCode} from '@vetr/mangadex';
import {Link} from 'react-router-dom';
import ChapterCard from './chapter-card';

export type MangaSectionItem = {
  coverArtUrl?: string;
  language: MangadexCountryCode;
  title?: string;
  subTitle?: string;
  ref?: string;
  id: string;
  isExternal?: boolean;
};

export type MangaSectionProps = {
  title?: string;
  data?: MangaSectionItem[];
  isLoading?: boolean;
  onItemClick?: (args: MangaSectionItem) => void;
};

export default function ChapterSection(props: MangaSectionProps) {
  const {data, title, isLoading, onItemClick} = props;

  return (
    <div>
      <p tw="mb-6 px-3 text-xl font-semibold text-gray-900 tracking-tight">{title}</p>
      <div tw="grid px-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {isLoading
          ? Array.from({length: 12}).map((_, index) => <div key={index} tw="h-48 w-full bg-gray-200 animate-pulse" />)
          : data?.map(d => (
              <ChapterCard
                key={d.id}
                title={d.title}
                coverArtUrl={d.coverArtUrl}
                subTitle={d.subTitle}
                to={`/chapter/${d.id}`}
              />
            ))}
      </div>
    </div>
  );
}
