import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContextWrapper } from "./context/auth.context";
import { BrowserRouter as Router } from "react-router-dom";
 
const root = ReactDOM.createRoot(document.getElementById("root"));
 
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthContextWrapper>
    <App />
    </AuthContextWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
