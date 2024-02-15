import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import "./demos/ipc";
import { HashRouter as Router } from "react-router-dom"; // Change this line
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'

// Use `Router` instead of `BrowserRouter` here
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router> {/* Updated to use HashRouter */}
      <App />
    </Router>
  </React.StrictMode>
);

postMessage({ payload: "removeLoading" }, "*");
