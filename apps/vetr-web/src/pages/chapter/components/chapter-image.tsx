import React, {forwardRef, memo, useImperativeHandle} from 'react';
import tw from 'twin.macro';

export enum ChapterImageType {
  FIT_WIDTH = 'fit-width',
  FIT_HEIGHT = 'fit-height',
}

export type ChapterImageProps = {
  src: string;
  page?: string;
  variant?: ChapterImageType;
};

export type ChapterImageRef = {
  preload: () => void;
  refresh: () => void;
};

function ChapterImage(props: ChapterImageProps, ref: React.ForwardedRef<ChapterImageRef>) {
  const {page, variant = ChapterImageType.FIT_WIDTH, ...rest} = props;

  useImperativeHandle(ref, () => ({
    preload: () => {
      console.log(`[ChapterImagesRenderer]: preloading ${props.page ? `page ${props.page}` : 'unknown page'}`);
    },
    refresh: () => {
      return;
    },
  }));

  return (
    <div
      {...rest}
      id={`page-${page}`}
      css={[
        // so user can focus on center of the screen, especially on large screen
        variant === ChapterImageType.FIT_WIDTH && tw`container mx-auto`,
      ]}>
      <img
        src={props.src}
        css={[
          variant === ChapterImageType.FIT_HEIGHT && tw`h-screen`,
          variant === ChapterImageType.FIT_WIDTH && tw`w-screen`,
        ]}
      />
    </div>
  );
}

export default memo(forwardRef(ChapterImage));
