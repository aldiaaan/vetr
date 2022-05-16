import React, {forwardRef, memo, useLayoutEffect, useCallback, useEffect, useImperativeHandle, useRef} from 'react';
import ChapterImage, {ChapterImageRef, ChapterImageType} from './chapter-image';

export enum ChapterImagesRendererMode {
  // SINGLE_PAGE = 'single-page',
  LONG_STRIP = 'long-strip',
}

export type ChapterImagesRendererRef = {
  refreshAll: () => void;
};

export type ChapterImagesRendererProps = {
  images?: string[];
  mode?: ChapterImagesRendererMode;
  imageVariant?: ChapterImageType;
};

function ChapterImagesRenderer(props: ChapterImagesRendererProps, ref: React.ForwardedRef<ChapterImagesRendererRef>) {
  const {images = [], mode = ChapterImagesRendererMode.LONG_STRIP, imageVariant = ChapterImageType.FIT_WIDTH} = props;

  const imageRefs = useRef<ChapterImageRef[]>([]);

  const registerImageRef = useCallback(node => {
    imageRefs.current.push(node);
  }, []);

  useImperativeHandle(ref, () => ({
    refreshAll: () => {
      return true;
    },
  }));

  return (
    <div tw="items-center flex flex-col">
      {images.map((url, index) => (
        <ChapterImage src={url} page={`${index}`} ref={registerImageRef} variant={imageVariant} key={url} />
      ))}
    </div>
  );
}

export default memo(forwardRef(ChapterImagesRenderer));
