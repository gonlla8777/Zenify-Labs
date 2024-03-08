// main.jsx

import React from "react";
import { HashRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter hashType="hashbang">
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
