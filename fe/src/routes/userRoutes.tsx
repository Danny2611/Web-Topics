// userRoutes.js

import PackageDetailPage from "~/pages/user/packages/PackageDetail";
import RoleBasedRoute from "./roleBasedRoute";
import DashboardLayout from "~/compoments/layout/DashboardLayout";
import PackagesPage from "~/pages/user/packages/Packages";
import ChangePassword from "~/pages/user/profile/ChangePassword";
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
        { path: "change-password", element: <ChangePassword /> },
        { path: "packages", element: <PackagesPage /> },
         { path: "package-detail/:id", element: <PackageDetailPage /> },
      ],
    },
  ],
};

export default userRoutes;
