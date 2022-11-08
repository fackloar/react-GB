import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const message = "Hello from a const in index.js!";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <App />
      </React.StrictMode>
);
