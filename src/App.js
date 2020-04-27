import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import welcomeIcon from "./assets/welcome.jpg";

const App = () => {
  return (
    <Router>
      <img src={welcomeIcon} alt="Welcome!" />
    </Router>
  );
};

export default App;
