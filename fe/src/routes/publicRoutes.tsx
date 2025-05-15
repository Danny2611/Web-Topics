import Home from "~/pages/public/Home/Home";
import Login from "~/pages/auth/Login";

const publicRoutes = [
  { path: "/", element: <Home /> },

  { path: "login", element: <Login /> },
  
];

export default publicRoutes;
