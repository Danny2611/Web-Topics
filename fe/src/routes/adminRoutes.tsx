// Route admin: quản lý hội viên, gói tập, báo cáo.



import DashboardLayoutAdmin from "~/pages/admin/DashboardLayoutAdmin";
import RoleBasedRoute from "./roleBasedRoute";
import MemberManagement from "~/pages/admin/Members/MemberList";
import MembershipManagement from "~/pages/admin/Members/MembershipList";
import PackageManagement from "~/pages/admin/packages/PackageManagement";
import TrainerManagement from "~/pages/admin/trainers/TrainerManagement";
import AppointmentManagement from "~/pages/admin/appointments/AppointmentManagement";
import PaymentManagement from "~/pages/admin/payments/PaymentManagement";
import PromotionManagement from "~/pages/admin/Promotions/PromotionManagement";
import Dashboard from "~/pages/admin/Reports/Dashboard";
import MembershipReport from "~/pages/admin/Reports/MembershipReport";
import RevenueReport from "~/pages/admin/Reports/RevenueReport";


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
        { path: "packages", element: <PackageManagement /> },
        { path: "trainers", element: <TrainerManagement /> },
        { path: "appointments", element: <AppointmentManagement /> },
        { path: "transactions", element: <PaymentManagement /> },
        { path: "promotions", element: <PromotionManagement /> },

        
        { path: "reports/dashboard", element: <Dashboard /> },
        { path: "reports/members", element: <MembershipReport /> },
        { path: "reports/revenues", element: <RevenueReport /> },
      ],
    },
  ],
};

export default adminRoutes;
