import React, {useEffect, useRef} from 'react';
import {useParams} from 'react-router';

import {useMangaDetails, useMangaFeed} from '@/hooks/mangadex';
import Chip from '@/components/chip';
import Button from '@/components/buttons/button';

import ChapterLink from './components/chapter-link';
import CircularSpinner from '@/components/loading-indicators/circular-spinner';

const ITEMS_PER_PAGE = 40;

function MangaPageSkeleton() {
  return (
    <div tw="h-screen flex items-center justify-center">
      <CircularSpinner tw="w-5 h-5 text-black" />
    </div>
  );
}

export default function MangaPage() {
  const {id} = useParams<{id: string}>();

  const {data} = useMangaDetails(id!, {
    refetchOnWindowFocus: false,
  });

  const page = useRef(0);

  const {
    data: feed,
    fetchNextPage,
    isFetchingNextPage,
  } = useMangaFeed(id!, {
    limit: ITEMS_PER_PAGE,
  });

  const hasNextPage = (feed?.pages[feed.pages.length - 1]?.length || 0) >= ITEMS_PER_PAGE;

  if (!data || !feed) return <MangaPageSkeleton />;

  return (
    <div tw="h-screen overflow-auto w-screen overflow-x-hidden pb-24">
      <div tw="container mx-auto flex-col md:flex-row flex py-6 px-6">
        <div tw="flex-shrink-0 justify-center flex mb-12">
          <img src={data.cover.url} tw="w-64 h-96 shadow overflow-hidden" />
        </div>
        <div tw="flex-1 ml-0 md:ml-12">
          <h3 tw="text-gray-900 font-semibold mt-4 tracking-tighter leading-10 text-3xl">{data.title}</h3>
          <p tw="text-gray-600 text-sm leading-8">{data.originalTitle}</p>
          <p tw="text-gray-900 text-sm leading-6 mt-12">{data.description}</p>
          <div tw="mt-8 flex flex-wrap">
            {data.tags.map(t => (
              <span tw="mb-2 mr-1.5" key={t.id}>
                <Chip label={t.name} />
              </span>
            ))}
          </div>
          <div tw="mt-12 ">
            <h3 id="chapters" tw="text-gray-900 font-semibold tracking-tight">
              Chapters
            </h3>
            <div tw="mt-4">
              {feed.pages
                .flatMap(d => d)
                .map(f => (
                  <ChapterLink
                    to={`/chapter/${f.data[0].id}`}
                    key={f.data[0].id}
                    title={f.data[0].title}
                    chapter={f.formatted}
                  />
                ))}
              {hasNextPage && (
                <Button
                  onPress={() => {
                    fetchNextPage({
                      pageParam: ++page.current,
                    });
                  }}
                  tw="mt-6"
                  isLoading={isFetchingNextPage}>
                  Load more ...
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
