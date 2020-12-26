import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      calculatorBackground: string;
      background: string;
      text: string;
      inputText: string;
      resultText: string;
      buttonBoxShadowPrimary: string;
      buttonBoxShadowSecondary: string;
      operator: string;
    };
  }
}
