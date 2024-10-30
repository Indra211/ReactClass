import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>
);

// whole react class

/*
react topics
1. React intro,
what is jsx,
component in react,
props in react,
state in react,
event in react,
conditional rendering in react,
lists in react,
form in react,

parent and child in react
prop drilling in react
redux in react
state management in react

react router
dynamic routing


Api calling in react (fetch or axios)
*/
