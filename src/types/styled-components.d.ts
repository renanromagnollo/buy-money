import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: {
        default: string;
        light: string;
        dark: string;
      };
      gray: {
        default: string;
        light: string;
        dark: string;
      };
      background: string;
    };
    fonts: {
      default: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        color: string;
      };
      h1: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        color: string;
      };

      h5: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        color: string;
      };
      h6: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        color: string;
      };
      p: {
        fontFamily: string;
        fontStyle: string;
        fontWeight: number;
        fontSize: string;
        lineHeight: string;
        color: string;
      };
    };
  }
}
