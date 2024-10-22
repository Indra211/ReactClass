import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ComponentLifeCycle, { NewComponent } from "./ComponentLifeCycle.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ComponentLifeCycle /> */}
    <NewComponent />
  </StrictMode>
);
