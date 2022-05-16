import React, {memo} from 'react';
import {Link} from 'react-router-dom';

export type ChapterCardProps = {
  to: string;
  subTitle?: string;
  title?: string;
  coverArtUrl?: string;
};

function ChapterCard(props: ChapterCardProps) {
  const {to, coverArtUrl, title, subTitle} = props;

  return (
    <Link to={to} tw="pb-6">
      <div tw="">
        <div tw="h-48">
          <img src={coverArtUrl} tw="h-full w-full object-cover object-center overflow-hidden bg-gray-100" />
        </div>
        <div tw="mt-2.5">
          <p tw="font-semibold text-sm tracking-tight text-gray-900 leading-5">{title}</p>
          <p tw="text-xs text-gray-700 tracking-tight leading-6">Chapter {subTitle || '-'}</p>
        </div>
      </div>
    </Link>
  );
}

export default memo(ChapterCard);
