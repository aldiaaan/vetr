import React, {memo} from 'react';

export type ChapterRedirectConsentProps = {
  to?: string;
};

function ChapterRedirectConsent(props: ChapterRedirectConsentProps) {
  return (
    <div>
      <p tw="text-sm text-center">This chapter can be read for free on the official publishers website. </p>
      <a tw="text-sm text-blue-600" target="_blank" href={props.to} rel="noreferrer">
        {props.to}
      </a>
    </div>
  );
}

export default memo(ChapterRedirectConsent);
