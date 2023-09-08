import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;

  outline: 0;
}

h1, h2, h3, p {
  font-family: 'Montserrat', sans-serif;

}

input, textarea, button {
  font-family: 'Montserrat', sans-serif;
  background: transparent;
  border: 0;
  outline: 0;
}

`;
