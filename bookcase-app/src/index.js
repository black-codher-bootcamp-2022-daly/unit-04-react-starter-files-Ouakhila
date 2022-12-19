import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navigator";
//import styles from "./main/styles.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div style={{ backgroundColor: " #DEF4F4 " }}>
    <React.StrictMode>
      <BrowserRouter>
        <div className="Title">My e-Book Library</div>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </div>
);
