import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/base/_base.scss";
import App from "./Components/App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
