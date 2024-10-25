import { ReactNode } from "react";
import Dashboard from "../pages/Dashboard/Dashboard Home/Dashboard";
import CreateWinterClothes from "@/pages/Dashboard/CreateWinterClothes";
import WinterClothesTable from "@/pages/Dashboard/WinterClothesTable";
import CreateTestimonial from "@/pages/Dashboard/CreateTestimonial";
import AdminProfile from "@/pages/Dashboard/MyProfile/AdminProfile";
import UserProfile from "@/pages/Dashboard/MyProfile/UserProfile";

export type TRoute = {
  path: string;
  element: ReactNode;
};

export type TAuthUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  adminOnly?: boolean;
  children?: TAuthUserPath[];
};
export const authUserPaths = [
  {
    name: "Dashboard",
    children: [
      {
        name: "Dashboard Home",
        path: "home",
        element: <Dashboard />,
      },
      {
        name: "WinterClothes",
        path: "winter-clothes",
        element: <WinterClothesTable />,
        adminOnly: true,
      },
      {
        name: "Create Winter Clothes",
        path: "create-winter-clothes",
        element: <CreateWinterClothes />,
        adminOnly: true,
      },
      {
        name: "Create Testimonial",
        path: "create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
  {
    name: "My Profile",
    path: "admin-profile",
    element: <AdminProfile />,
    adminOnly: true,
  },
  {
    name: "My Profile",
    path: "user-profile",
    element: <UserProfile />,
  },
];
