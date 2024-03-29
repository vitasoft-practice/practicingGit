import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

h1 {
    color: black !important; // the important is just to show that the style works!
}

  // anything else you would like to include
`;

const BasicLayout = ({ children }: { children: any }) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default BasicLayout;