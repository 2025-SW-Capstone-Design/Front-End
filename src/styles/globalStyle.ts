import { css } from '@emotion/react';
import { fonts } from './fonts';

const globalStyles = css`
  ${fonts}

  * {
    margin: 0px;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  form,
  textarea,
  label,
  table {
    font-family:
      'SUIT Variable',
      SUIT,
      -apple-system;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  html,
  body {
    height: 100%;
  }
  body {
    line-height: 1;
    background: #e6e6e6;
  }
  ol,
  ul {
    list-style: none;
  }
  button {
    font-family:
      'SUIT Variable',
      SUIT,
      -apple-system;
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }
  input {
    font-family:
      'SUIT Variable',
      SUIT,
      -apple-system;
  }
  .w-md-editor {
    box-shadow: none !important;
    border: 1px solid var(--Gray-60, #aeb6bd);
    font-family:
      'SUIT Variable',
      SUIT,
      -apple-system;
    caret-color: transparent;
    font-size: 20px !important;
    line-height: 1.5 !important;
    box-sizing: border-box !important;
  }
`;

export default globalStyles;
