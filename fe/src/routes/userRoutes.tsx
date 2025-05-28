// userRoutes.js

import PackageDetailPage from "~/pages/user/packages/PackageDetail";
import RoleBasedRoute from "./roleBasedRoute";
import DashboardLayout from "~/compoments/layout/DashboardLayout";
import PackagesPage from "~/pages/user/packages/Packages";
import ChangePassword from "~/pages/user/profile/ChangePassword";
import ProfilePage from "~/pages/user/profile/Profile";
import PackageRegistrationPage from "~/pages/user/packages/PackageRegistrationPage";
import MyPackagesPage from "~/pages/user/memberships/Memberships";
import PaymentStatusPage from "~/pages/user/payments/PaymentStatusPage";
import TrainerList from "~/pages/user/trainner/TrainerList";
import BookingPage from "~/pages/user/appoinments/BookingPage";
import ManageAppointments from "~/pages/user/appoinments/ManageAppointments";
import RescheduleAppointmentPage from "~/pages/user/appoinments/RescheduleAppointmentPage";
import PersonalSchedulePage from "~/pages/user/schedules/PersonalSchedulePage";
import CreateWorkoutPage from "~/pages/user/workoutSchedule/CreateWorkoutPage";
import TransactionHistory from "~/pages/user/transactions/TransactionHistory";
import ProgressPage from "~/pages/user/progress/ProgressPage";
import Dashboard from "~/pages/user/Dashboard";

const userRoutes = {
  path: "user",
  element: <RoleBasedRoute allowedRoles={["67c024616b4448e1eab6a85f"]} />,
  children: [
    {
      element: <DashboardLayout/>,
      children: [
        { path: "dashboard", element: <Dashboard /> },
        { path: "profile", element: <ProfilePage /> },
        { path: "change-password", element: <ChangePassword /> },
        { path: "packages", element: <PackagesPage /> },
        { path: "package-detail/:id", element: <PackageDetailPage /> },
        { path: "packages-register/:id", element: <PackageRegistrationPage /> },
         { path: "my-packages", element: <MyPackagesPage /> },

        {
          path: "payment",
          children: [
            { path: "success", element: <PaymentStatusPage /> },
            { path: "failed", element: <PaymentStatusPage /> },
          ],
        },

         { path: "list-trainer", element: <TrainerList /> },
          { path: "book-appointment/:trainerId", element: <BookingPage /> },
         { path: "manage-appointment", element: <ManageAppointments /> },

          {
          path: "reschedule-appointment/:appointmentId",
          element: <RescheduleAppointmentPage />,
        },
         // schedule
        { path: "my-schedule", element: <PersonalSchedulePage /> },
          //workoutSchedule:
        { path: "workout", element: <CreateWorkoutPage /> },

          //transactions
        { path: "transactions", element: <TransactionHistory /> },

        { path: "progress", element: <ProgressPage /> },

      ],
    },
  ],
};

export default userRoutes;
