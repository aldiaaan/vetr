import React, {forwardRef, memo} from 'react';
import {Link} from 'react-router-dom';

export type ChapterLinkProps = {
  to: string;
  chapter?: string;
  title?: string;
} & React.RefAttributes<HTMLAnchorElement>;

function ChapterLink(props: ChapterLinkProps) {
  const {to, chapter, title, ...rest} = props;

  return (
    <Link {...rest} to={to}>
      <div tw="py-4 border-b-2 border-dashed border-gray-200">
        <div tw="">
          <p tw="text-xs text-gray-600 tracking-tight">{chapter}</p>
          <p tw="text-sm text-gray-900 leading-8 font-semibold tracking-tight">{title}</p>
        </div>
      </div>
    </Link>
  );
}

export default memo(forwardRef(ChapterLink));
