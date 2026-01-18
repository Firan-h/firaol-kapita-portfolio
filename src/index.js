import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; 
import { ThemeProvider } from './contexts/ThemeContext'; // This imports the default export
import './App.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);