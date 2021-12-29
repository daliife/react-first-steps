import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

// Browser history management logic
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL,
});

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
