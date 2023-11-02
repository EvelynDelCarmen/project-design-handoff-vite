// main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import GlobalStyles from './GlobalStyles'; // Import the GlobalStyles component
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles /> {/* Use the GlobalStyles component */}
    <App />
  </React.StrictMode>
);
