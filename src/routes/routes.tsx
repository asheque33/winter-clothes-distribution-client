import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import WinterClothes from "../pages/AllWinterClothes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import SingleWinterCloth from "@/pages/SingleWinterCloth";
import { authUserPaths } from "./dashboard.route";
import { routesGenerator } from "@/utils/routesGenerator";
import Home from "@/pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: routesGenerator(authUserPaths),
  },
  {
    path: "/winter-clothes",
    element: <WinterClothes />,
  },
  {
    path: "/winter-clothes/:id",
    element: <SingleWinterCloth />,
  },

  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
export default router;
