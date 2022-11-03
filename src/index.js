import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weatherapp from "./Weatherapp";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weatherapp defaultCity="Santo Domingo" />
  </React.StrictMode>
);
