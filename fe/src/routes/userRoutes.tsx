// userRoutes.js

import RoleBasedRoute from "./roleBasedRoute";
import DashboardLayout from "~/compoments/layout/DashboardLayout";
import ProfilePage from "~/pages/user/profile/Profile";

const userRoutes = {
  path: "user",
  element: <RoleBasedRoute allowedRoles={["67c024616b4448e1eab6a85f"]} />,
  children: [
    {
      element: <DashboardLayout/>,
      children: [
        // { path: "dashboard", element: <Dashboard /> },
        { path: "profile", element: <ProfilePage /> },
       
      ],
    },
  ],
};

export default userRoutes;
