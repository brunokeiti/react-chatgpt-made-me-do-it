import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import CountdownPage from "./pages/CountdownPage.tsx";
import TaskListPage from "./pages/TaskListPage.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/countdown",
    element: <CountdownPage />,
  },
  {
    path: "/tasklist",
    element: <TaskListPage />,
  },
  {
    path: "*",
    element: <>nothing here</>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
