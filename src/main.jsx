import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "animate.css";
import { BrowserRouter } from "react-router-dom";
import { StohrApp } from "./StohrApp";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <StohrApp />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
