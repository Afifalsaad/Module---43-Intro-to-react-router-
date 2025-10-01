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
import Details from "./assets/components/Details/Details.jsx";
import Posts from "./assets/components/Posts/Posts.jsx";
import PostDetail from "./assets/components/PostDetail/PostDetail.jsx";


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
        path: "users/:usersId",
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        Component: Details,
      },
      {
        path: "posts",
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
        Component: Posts,
      },
      {
        path: "posts/:postId",
        loader: ({params}) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        Component: PostDetail,
      },
      
    ],
  },
  {
    path: '*',
    element: <h3>Not Found: 404 status</h3>
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
