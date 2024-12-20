import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import { About } from "../pages/About";
import Login from "../pages/Login";
import Accont from "../pages/Accont";
import DynamicRouting from "../pages/DynamicRouting";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "account", element: <Accont /> },
      { path: "login", element: <Login /> },
      { path: "element/:id", element: <DynamicRouting /> },
    ],
  },
]);
