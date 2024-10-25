import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { routesGenerator } from "@/utils/routesGenerator";
import Home from "@/pages/Home/Home";
import { unAuthUserPaths } from "./navbar.route";
import DashboardLayout from "@/components/layouts/DashboardLayout/DashboardLayout";
import { authUserPaths } from "./dashboard.route";
import SingleWinterCloth from "@/pages/WinterClothesDetails/SingleClothDetails";
import App from "@/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "winter-clothes/:id",
        element: <SingleWinterCloth />,
      },
      ...routesGenerator(unAuthUserPaths),
    ],
  },
  // {
  //   path: "/",
  //   element: <MainLayout />,
  //   children: routesGenerator(unAuthUserPaths),
  // },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: routesGenerator(authUserPaths),
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <div>Page Not Found</div>,
  },
]);
export default router;
