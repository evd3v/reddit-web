import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import theme from "../theme";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
