import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from "webfontloader";

reportWebVitals()

WebFont.load({
    google: {
        families: ['Poppins', "Inter:400","Roboto:600"]
    }
  });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);