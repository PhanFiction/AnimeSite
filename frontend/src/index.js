const ReactDOM = require('react-dom/client');
import App from "./App.jsx";
import React from "react";
import { BrowserRouter } from "react-router-dom";

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);