import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Single_Laptop from "./components/Single_Laptop"
import data from "./data/Cleaned_Laptop_data.json";
import {BrowserRouter} from 'react-router-dom';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
