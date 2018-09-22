import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "react-router-dom";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { theme } from "./styles";
import history from "./history";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router history={history}>
      <App />
    </Router>
  </ThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
