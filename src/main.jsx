import { Component, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Root from "./assets/components/Root/Root.jsx";
import Home from "./assets/components/Home/Home.jsx";
import Settings from "./assets/components/Settings/Settings.jsx";
import Laptops from "./assets/components/Laptops/Laptops.jsx";
import Users from "./assets/components/Users/users.jsx";
import Users2 from "./assets/components/Users2/Users2.jsx";

const dataPromise = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "Settings", Component: Settings },
      { path: "Laptops", Component: Laptops },
      {
        path: "users",
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        Component: Users,
      },
      {
        path: "users2",
        element: <Suspense fallback={<span>Loading...</span>}>
          <Users2 dataPromise={dataPromise}></Users2>
        </Suspense>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
