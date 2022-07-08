import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        width: 100vw;
        height: 100vh;
    }

    body {
        background-color: #f3f3f3;
    }
`;