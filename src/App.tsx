import React from "react";
import { ThemeProvider } from "styled-components";
import { Box } from "./SS";

const theme = {
  breakpoints: ["500px", "700px", "1000px"],
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box bg={["yellow", "green", "red"]}>Hello world!</Box>
    </ThemeProvider>
  );
}

export default App;
