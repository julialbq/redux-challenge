import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Red Hat Display', sans-serif;
    font-family: 'Red Hat Text', sans-serif;
}

ul, ol, li {
    list-style: none;
}
`;
