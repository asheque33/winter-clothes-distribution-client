import { ReactNode } from "react";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateWinterClothes from "@/pages/Dashboard/CreateWinterClothes";
import WinterClothesTable from "@/pages/Dashboard/WinterClothesTable";
import WinterClothes from "@/pages/AllWinterClothes";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TAuthUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TAuthUserPath[];
};
export const authUserPaths = [
  {
    name: "All Winter Clothes",
    path: "winter-clothes",
    element: <WinterClothes />,
  },
  {
    name: "Dashboard",
    children: [
      {
        name: "Dashboard Home",
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        name: "All Winter Clothes In Form",
        path: "dashboard/winter-clothes",
        element: <WinterClothesTable />,
      },
      {
        name: "Create Winter Clothes",
        path: "dashboard/create-winter-clothes",
        element: <CreateWinterClothes />,
      },
    ],
  },
];
