// Route admin: quản lý hội viên, gói tập, báo cáo.



import DashboardLayoutAdmin from "~/pages/admin/DashboardLayoutAdmin";
import RoleBasedRoute from "./roleBasedRoute";
import MemberManagement from "~/pages/admin/Members/MemberList";
import MembershipManagement from "~/pages/admin/Members/MembershipList";


const adminRoutes = {
  path: "admin",
  element: <RoleBasedRoute allowedRoles={["67c024616b4448e1eab6a861"]} />,
  children: [
    {
      element: <DashboardLayoutAdmin />,
      children: [
        // { path: "dashboard", element: <Dashboard /> },
        { path: "members", element: <MemberManagement /> },
        { path: "memberships", element: <MembershipManagement /> },
       
      ],
    },
  ],
};

export default adminRoutes;
