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

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
