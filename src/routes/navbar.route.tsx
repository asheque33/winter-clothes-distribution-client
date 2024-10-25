import { ReactNode } from "react";
import WinterClothes from "@/pages/WinterClothes/AllWinterClothes";
import LeaderBoard from "@/pages/Leaderboard/Leaderboard";
import CommunityGratitudeWall from "@/pages/CommiunityGratitudeWall/CommunityGratitudeWall";
import CreateVolunteer from "@/pages/Volunteer/CreateVolunteer";
import AboutUs from "@/pages/About Us/AboutUs";
import ProtectedRoute from "@/components/layouts/Shared/ProtectedRoute";
import DashboardLayout from "@/components/layouts/DashboardLayout/DashboardLayout";

export type TRoute = {
  path: string;
  element: ReactNode;
};
export type TUnAuthUserPath = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUnAuthUserPath[];
};
export const unAuthUserPaths = [
  {
    name: "About Us",
    path: "about-us",
    element: <AboutUs />,
  },
  {
    name: "All Winter Clothes",
    path: "winter-clothes",
    element: <WinterClothes />,
  },
  {
    name: "LeaderBoard",
    path: "leaderBoard",
    element: <LeaderBoard />,
  },
  {
    name: "Community",
    path: "community",
    element: <CommunityGratitudeWall />,
  },
  {
    name: "Volunteer",
    path: "volunteer",
    element: <CreateVolunteer />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
  },
];
