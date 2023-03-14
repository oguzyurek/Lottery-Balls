import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Lottery from "./Lottery";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Lottery />
    <Lottery title="Lucky Game" maxBalls="4" maxNum="50" />
    <Lottery title="Lucky Game" maxBalls="3" maxNum="100" />
    <Lottery title="Lucky Game" maxBalls="2" maxNum="10" />
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
