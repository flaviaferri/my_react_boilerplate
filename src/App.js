import { Global, css } from "@emotion/react";
import "reset-css";
import { theme } from "./styles/theme";
import { ThemeProvider } from "@emotion/react";

import styled from "@emotion/styled";

const style = css`
  html {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 10px;
    box-sizing: border-box;
  }

  * {
    box-sizing: border-box;
  }
`;

const Title = styled.h1(
  ({ theme }) => css`
    font-size: 3.4rem;
    color: ${theme.colors.blak};
  `
);

function App() {
  return (
    <>
      <Global styles={style} />
      <ThemeProvider theme={theme}>
        <Title>Hello World</Title>
      </ThemeProvider>
    </>
  );
}

export default App;
