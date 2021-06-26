import reset from "styled-reset";
import { createGlobalStyle, css } from "styled-components";

const globalStyle = css`
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: Noto Sans, Noto Sans KR;
    line-height: 1.2;
  }
  a {
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle};
`;

export default GlobalStyle;