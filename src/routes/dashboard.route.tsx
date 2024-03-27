import { ReactNode } from "react";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateWinterClothes from "@/pages/Dashboard/CreateWinterClothes";
import WinterClothesTable from "@/pages/Dashboard/WinterClothesTable";
import WinterClothes from "@/pages/AllWinterClothes";
import Leaderboard from "@/pages/Leaderboard/Leaderboard";
import CommunityGratitudeWall from "@/pages/CommiunityGratitudeWall/CommunityGratitudeWall";
import CreateTestimonial from "@/pages/Dashboard/CreateTestimonial";
import AboutUs from "@/pages/About Us/AboutUs";
import CreateVolunteer from "@/pages/Volunteer/CreateVolunteer";

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
      {
        name: "Create Testimonial",
        path: "dashboard/create-testimonial",
        element: <CreateTestimonial />,
      },
    ],
  },
  {
    name: "Leaderboard",
    path: "leaderboard",
    element: <Leaderboard />,
  },
  {
    name: "Community",
    path: "community",
    element: <CommunityGratitudeWall />,
  },
  {
    name: "Volunteer Hub",
    path: "volunteer",
    element: <CreateVolunteer />,
  },
  {
    name: "About Us",
    path: "about-us",
    element: <AboutUs />,
  },
];
