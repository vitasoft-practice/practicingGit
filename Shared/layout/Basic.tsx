import { createGlobalStyle } from "styled-components";
import NavBar from "../components/NavBar";

export const GlobalStyle = createGlobalStyle`
    // this is the shared style
  html {
    box-sizing: border-box;
  }
  body{
    margin: 0;
    padding: 0;
    text-align: center;
    background-color: #000;
    display: flex;
    flex-direction: column;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

h1 {
    color: yellow !important; // the important is just to show that the style works!
}

  // anything else you would like to include
`;

const BasicLayout = ({ children }: { children: any }) => {
  return (
    <>
      <GlobalStyle />
      <NavBar />
      {children}
    </>
  );
};

export default BasicLayout;