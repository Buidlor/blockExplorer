import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UseGlobalContext } from "./contexts/Context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UseGlobalContext>
      <App />
    </UseGlobalContext>
  </React.StrictMode>
);
