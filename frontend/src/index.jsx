import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const ReactDOM = require('react-dom/client');

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
