import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Lottery from "./Lottery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Lottery title="Lottery" />
    <Lottery title="Lottery" maxBalls="3" maxNum="100" />
    <Lottery title="Lottery" maxBalls="3" maxNum="100" />
  </div>
);

reportWebVitals();
