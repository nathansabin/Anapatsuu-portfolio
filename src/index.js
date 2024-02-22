import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HashRouter>
  // on active server uncomment top
  <HashRouter>
    <App />
  </HashRouter>
);
