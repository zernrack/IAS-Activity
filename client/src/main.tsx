import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import GridBackground from "./components/ui/GridBackground.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GridBackground>
      <App />
    </GridBackground>
  </React.StrictMode>
);
