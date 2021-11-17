import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    text-decoration: none;
    list-style: none;
    font-weight: normal;
    outline: none;
    box-sizing: border-box;
    border: none;
    font-family: Arial;

    ::-webkit-scrollbar{
      width: 0px;
      height: 0px;
    }
  
    > body {
      > img {
        max-width: 100%;
      }
    }
  }
`;