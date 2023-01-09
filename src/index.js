import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/normalize.css";
import "./styles/index.css";
import Root, { usersLoader } from "./routes/Root/Root";
import Error from "./routes/Error/Error";
import Dashboard from "./routes/Dashboard/Dashboard";
import Home from "./routes/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home />, loader: usersLoader },
      {
        path: "/dashboard/:userId",
        element: <Dashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
