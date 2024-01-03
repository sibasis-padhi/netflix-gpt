import React from "react";
import AuthOption from "./Authentication/LoginSignup";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "./Home/HomePage";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <AuthOption />,
    },
    {
      path: "/browse",
      element: <HomePage />,
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
