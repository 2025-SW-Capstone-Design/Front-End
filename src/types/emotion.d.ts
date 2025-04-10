import '@emotion/react';
import type theme from '../styles/theme';

type ColorKeys = keyof (typeof theme)['colors'];
type TextKeys = keyof (typeof theme)['text'];

declare module '@emotion/react' {
  export interface Theme {
    colors: { [K in ColorKeys]: (typeof theme)['colors'][K] };
    text: { [K in TextKeys]: (typeof theme)['text'][K] };
  }
}
