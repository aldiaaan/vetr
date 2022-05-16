import React, {memo} from 'react';

import ChevronLeftIcon from '@/assets/icons/feather/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/feather/chevron-right.svg';
import MenuIcon from '@/assets/icons/feather/menu.svg';
import SettingsIcon from '@/assets/icons/feather/settings.svg';
import IconButton from '@/components/buttons/icon-button';
import Tooltip from '@/components/primitives/tooltip/tooltip';

type Chapter = {
  id: string;
};

export type ChapterFooterProps = {
  mangaTitle?: string;
  chapterTitle?: string;
  currentChapterId?: string;
  nextChapterId?: string;
  previousChapterId?: string;
  isLoading?: boolean;
  /**
   * called whenever user trying to navigate from current chapter to another chapter
   */
  onNavigateChapter?: (chapterId: string) => void;
};

const ChapterFooterSkeleton = memo(() => {
  return (
    <div tw="h-16 bg-gray-900 flex items-center ">
      <div tw="container mx-auto py-2 flex items-center">
        <div tw="mr-auto">
          <div tw="w-48 bg-gray-800  h-4 animate-pulse rounded-full" />
        </div>
        <div tw="flex items-center">
          <div tw="w-7 mr-2 bg-gray-800  h-7 animate-pulse rounded-md" />
          <div tw="w-7 mr-2 bg-gray-800  h-7 animate-pulse rounded-md" />
          <div tw="w-7 mr-2 bg-gray-800  h-7 animate-pulse rounded-md" />
          <div tw="w-7 mr-2 bg-gray-800  h-7 animate-pulse rounded-md" />
        </div>
      </div>
    </div>
  );
});

ChapterFooterSkeleton.displayName = 'ChapterFooterSkeleton';

function ChapterFooter(props: ChapterFooterProps) {
  const {
    mangaTitle,
    chapterTitle,
    isLoading = false,
    currentChapterId,
    nextChapterId,
    previousChapterId,
    onNavigateChapter,
  } = props;

  if (isLoading) return <ChapterFooterSkeleton />;

  return (
    <div tw="h-16 bg-gray-900 flex items-center ">
      <div tw="container mx-auto py-2 flex items-center">
        <div tw="mr-auto">
          <p tw="text-gray-300 mb-0.5 font-medium tracking-tight text-xs">{mangaTitle}</p>
          <p tw="text-white font-semibold text-sm">{chapterTitle}</p>
        </div>
        <div tw="flex items-center">
          {previousChapterId && (
            <div tw="mr-2">
              <Tooltip.Root offset={24} delay={400}>
                <Tooltip.Trigger>
                  <IconButton
                    onPress={() => {
                      onNavigateChapter?.(previousChapterId);
                    }}
                    tw="hover:bg-gray-800 rounded-md">
                    <ChevronLeftIcon tw="text-white" />
                  </IconButton>
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <p tw="text-white text-xs font-medium">Previous chapter</p>
                </Tooltip.Content>
              </Tooltip.Root>
            </div>
          )}
          {nextChapterId && (
            <div tw="mr-2">
              <Tooltip.Root offset={24} delay={400}>
                <Tooltip.Trigger>
                  <IconButton
                    onPress={() => {
                      onNavigateChapter?.(nextChapterId);
                    }}
                    tw="hover:bg-gray-800 rounded-md">
                    <ChevronRightIcon tw="text-white" />
                  </IconButton>
                </Tooltip.Trigger>
                <Tooltip.Content>
                  <p tw="text-white text-xs font-medium">Next chapter</p>
                </Tooltip.Content>
              </Tooltip.Root>
            </div>
          )}
          <div tw="mr-2">
            <Tooltip.Root offset={24} delay={400}>
              <Tooltip.Trigger>
                <IconButton tw="hover:bg-gray-800 rounded-md">
                  <MenuIcon tw="text-white" />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p tw="text-white text-xs font-medium">Open menu (not yet implemented)</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
          <div tw="mr-2">
            <Tooltip.Root offset={24} delay={400}>
              <Tooltip.Trigger>
                <IconButton tw="hover:bg-gray-800 rounded-md">
                  <SettingsIcon tw="text-white " />
                </IconButton>
              </Tooltip.Trigger>
              <Tooltip.Content>
                <p tw="text-white text-xs font-medium">Open settings (not yet implemented)</p>
              </Tooltip.Content>
            </Tooltip.Root>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(ChapterFooter);
