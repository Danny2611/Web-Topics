
import React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "~/compoments/layout/Layout";
import publicRoutes from "./publicRoutes";
import userRoutes from "./userRoutes";
import adminRoutes from "./adminRoutes";

const Routes = () => {
  // Sử dụng useRoutes hook để định nghĩa routes
  const element = useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: publicRoutes,
    },
      userRoutes,
      adminRoutes,
  ]);

  return element;
};

export default Routes;
