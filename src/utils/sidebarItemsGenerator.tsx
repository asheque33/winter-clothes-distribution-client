import { TAuthUserPath } from "@/routes/dashboard.route";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
};

export const sidebarItemsGenerator = (
  items: TAuthUserPath[],
  isAuthenticated: object
) => {
  // sidebar Items
  const sidebarItems = items.reduce((acc: TSidebarItems[], item) => {
    if (
      item.path &&
      item.name &&
      (item.name !== "Dashboard" || isAuthenticated)
    ) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>,
      });
    }
    if (item.children && (item.name !== "Dashboard" || isAuthenticated)) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }
    return acc;
  }, []);
  return sidebarItems;
};
