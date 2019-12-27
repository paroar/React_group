import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/main.scss";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { LangProvider } from "./contexts/LangContext";

ReactDOM.render(
  <LangProvider>
    <Router>
      <App />
    </Router>
  </LangProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
