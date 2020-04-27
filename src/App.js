import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { StyleConstants } from "./shared/constants";
import welcomeIcon from "./assets/welcome.jpg";

const { blue, yellow } = StyleConstants;
const theme = {
  blue,
  yellow,
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <img src={welcomeIcon} alt="Welcome!" />
      </ThemeProvider>
    </Router>
  );
};

export default App;
