import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './components/css/header.css'
import './components/css/maincontent.css'
import './components/css/mobile.css'
import './components/css/info.css';
import App from './App';
import './components/css/social-buttons.css';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
