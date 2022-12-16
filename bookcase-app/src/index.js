import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components/Navigator";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="title">My e-Book Library</div>
      <Navbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
