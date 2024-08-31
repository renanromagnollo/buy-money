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

    h1 {
        font-family: ${({ theme }) => theme.fonts.h1.fontFamily};
        font-weight: ${({ theme }) => theme.fonts.h1.fontWeight};
        font-size: ${({ theme }) => theme.fonts.h1.fontSize};
        line-height: ${({ theme }) => theme.fonts.h1.lineHeight};
    }
    h5 {
        font-family: ${({ theme }) => theme.fonts.h5.fontFamily};
        font-weight: ${({ theme }) => theme.fonts.h5.fontWeight};
        font-size: ${({ theme }) => theme.fonts.h5.fontSize};
        line-height: ${({ theme }) => theme.fonts.h5.lineHeight};
    }
    h6 {
        font-family: ${({ theme }) => theme.fonts.h6.fontFamily};
        font-weight: ${({ theme }) => theme.fonts.h6.fontWeight};
        font-size: ${({ theme }) => theme.fonts.h6.fontSize};
        line-height: ${({ theme }) => theme.fonts.h6.lineHeight};
    }
    p {
        font-family: ${({ theme }) => theme.fonts.p.fontFamily};
        font-weight: ${({ theme }) => theme.fonts.p.fontWeight};
        font-size: ${({ theme }) => theme.fonts.p.fontSize};
        line-height: ${({ theme }) => theme.fonts.p.lineHeight};
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
