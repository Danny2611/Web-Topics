
import Login from "~/pages/auth/Login";
import Home from "../pages/public/Home/Home";
import Register from "~/pages/auth/Register";
import ForgotPassword from "~/pages/auth/ForgotPassword";
import VerifyOTP from "~/pages/auth/VerifyOTP";
import OAuthCallback from "~/pages/auth/OAuthCallback";
import AboutPage from "~/pages/public/About/AboutPage";
import Services from "~/pages/public/Services/Services";
import ServiceDetail from "~/pages/public/ServiceDetail/ServiceDetail";


const publicRoutes = [
  { path: "/", element: <Home /> },
   { path: "about-us", element: <AboutPage /> },

   { path: "services", element: <Services/> },
  { path: "services/:id", element: <ServiceDetail /> },
   { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "forgot-password", element: <ForgotPassword /> },
  { path: "verify-otp", element: <VerifyOTP /> },
  { path: "oauth/callback", element: <OAuthCallback /> },

]
export default publicRoutes;
