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

:root {
  --primary-black: #000000;
  --primary-white: #FFFFFF;
  --primary-grey: #262626;
  --primary-green: #29D305;
  --signal-red: #EE0701;
  --signal-red-opacity: rgba(238, 7, 1, 0.3);
  --grey-70: #676767;
  --grey-30: #BDBDBD;
  --grey-10: #E9E9E9;
  --grey-5: #F4F4F4;
}

.dark {
  --dark-primary-black: #171717;
  --dark-primary-white: #EDEDED;
  --dark-primary-green: #35BB18;
  --dark-signal-red: #C82520;
  --dark-grey: #5E5E5E;
}
`;
