import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: CascadiaCode;

  src: url('/CascadiaCode-Regular.ttf');
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: CascadiaCode, sans-serif;

  outline: 0;

  transition: all 0.2s ease !important;
}

svg {
  transition: all 0.005s ease !important;
}

input, textarea, button {
  font-family: CascadiaCode, sans-serif;
  background: transparent;
  border: 0;
  outline: 0;
}

`;
