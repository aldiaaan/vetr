import React from 'react';
import tw, {GlobalStyles as BaseStyles} from 'twin.macro';
import {Global, css} from '@emotion/react';

const globalStyles = css({
  body: {
    ...tw`antialiased`,
  },
  ...css`
    @import url('https://rsms.me/inter/inter.css');
    html {
      font-family: 'Inter', sans-serif !important;
    }
    @supports (font-variation-settings: normal) {
      html {
        font-family: 'Inter var', sans-serif !important;
      }
    }
  `,
});

export default function GlobalStyles() {
  return (
    <>
      <Global styles={globalStyles} />
      <BaseStyles />
    </>
  );
}
