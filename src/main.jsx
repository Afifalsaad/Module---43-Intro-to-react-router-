import { Component, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./assets/components/Root/Root.jsx";
import Home from "./assets/components/Home/Home.jsx";
import Settings from "./assets/components/Settings/Settings.jsx";
import Laptops from "./assets/components/Laptops/Laptops.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "settings", Component: Settings },
      { path: "laptops", Component: Laptops },
    ],
  },
  {
    path: "about",
    element: <div>About me here</div>,
  },
  {
    path: "app",
    element: <App></App>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
