// src/index.jsx

// 1. Polyfill Buffer for ethers.js in the browser
import { Buffer } from "buffer";
window.Buffer = Buffer;

// 2. React bootstrap
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
