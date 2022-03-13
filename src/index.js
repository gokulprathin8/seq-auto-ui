import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from "./components/auth";

// sora font imports
import "../src/fonts/sora/Sora-Regular.ttf";
import "../src/fonts/sora/Sora-Bold.ttf";
import "../src/fonts/sora/Sora-ExtraBold.ttf";
import "../src/fonts/sora/Sora-Light.ttf";
import "../src/fonts/sora/Sora-Thin.ttf";
import "../src/fonts/sora/Sora-Medium.ttf";
import "../src/fonts/sora/Sora-ExtraLight.ttf";
import "../src/fonts/sora/Sora-SemiBold.ttf";

ReactDOM.render(
    <Router>
      <React.StrictMode>
        <Routes>
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/" element={<App/>} />
        </Routes>
      </React.StrictMode>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
