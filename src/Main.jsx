import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";
import "./index.css";
import Menu from "./components/Menu.jsx";

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Approuter} />
  </StrictMode>
);
