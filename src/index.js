import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAo5dpe1HEyUuRnSIS4sI-xioEnmbjOwok",
  authDomain: "laptop-research.firebaseapp.com",
  projectId: "laptop-research",
  storageBucket: "laptop-research.appspot.com",
  messagingSenderId: "571056963244",
  appId: "1:571056963244:web:16bf2a46362f86dfd0a909"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
