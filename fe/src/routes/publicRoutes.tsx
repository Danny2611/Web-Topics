
import Login from "~/pages/auth/Login";
import Home from "../pages/public/Home/Home";
import Register from "~/pages/auth/Register";
import ForgotPassword from "~/pages/auth/ForgotPassword";
import VerifyOTP from "~/pages/auth/VerifyOTP";
import OAuthCallback from "~/pages/auth/OAuthCallback";


const publicRoutes = [
  { path: "/", element: <Home /> },
   { path: "login", element: <Login /> },
  { path: "register", element: <Register /> },
  { path: "forgot-password", element: <ForgotPassword /> },
  { path: "verify-otp", element: <VerifyOTP /> },
  { path: "oauth/callback", element: <OAuthCallback /> },


export default publicRoutes;
