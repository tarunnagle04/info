import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <App />,
  },
  {
    path: "/education",
    element: <App />,
  },
  {
    path: "/projects",
    element: <App />,
  },
  {
    path: "/about",
    element: <App />,
  },
  {
    path: "*",
    element: <div>Page Not Found 404</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
