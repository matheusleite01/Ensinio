import { createGlobalStyle } from "styled-components";
import {theme} from "./theme";


const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

img {
  display: block;
  max-width: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  min-height: 100vh;
  font-family: ${theme.font.family.inter};
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

`

export default GlobalStyles;