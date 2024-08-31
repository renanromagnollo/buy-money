import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    :root {
        font-size: 62.5%;
    }

    

    img {
        width: 100%;
        max-width: 100%;
    }

    ul {
        list-style: none;
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    .container {
        width: 100%;
        margin: 0 auto;

        @media(max-width: 1450px) {
            
        }
        @media(max-width: 1000px) {

        }
        @media(max-width: 700px) {

        }
    }

`;
