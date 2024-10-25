import { TAuthUserPath } from "@/routes/dashboard.route";
import { theme } from "antd";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

const { useToken } = theme;
type TNavbarItems = {
  key: string;
  label: ReactNode;
  children?: TNavbarItems[];
};
export const NavbarItemsGenerator = (
  items: TAuthUserPath[]
  // isAuthenticated?: object
) => {
  const { token } = useToken();
  // navLink Items
  const navbarItems = items.reduce((acc: TNavbarItems[], item) => {
    if (
      item.path &&
      item.name
      // &&  (item.name !== "Dashboard" || isAuthenticated)
    ) {
      acc.push({
        key: item.name,
        label: (
          <NavLink
            to={`/${item.path}`}
            style={({ isActive }) => ({
              color: isActive ? token.colorPrimary : token.colorText,
              border: "none",
            })}
          >
            {item.name}
          </NavLink>
        ),
      });
    }
    if (
      item.children
      // && (item.name !== "Dashboard" || isAuthenticated)
    ) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: (
            <NavLink
              to={`/${child.path}`}
              style={({ isActive }) => ({
                color: isActive ? token.colorPrimary : token.colorText,
                // textDecorationLine: isActive ? "underline" : "underline",
              })}
            >
              {child.name}
            </NavLink>
          ),
        })),
      });
    }
    return acc;
  }, []);
  return navbarItems;
};
