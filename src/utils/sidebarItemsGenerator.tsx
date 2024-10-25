import { TAuthUserPath } from "@/routes/dashboard.route";
import { theme } from "antd";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
};
const { useToken } = theme;
export const SidebarItemsGenerator = (
  items: TAuthUserPath[],
  userRole: string
) => {
  const { token } = useToken();
  // sidebar Items
  const sidebarItems = items.reduce((acc: TSidebarItems[], item) => {
    const isAdmin = userRole === "admin";
    // const isUser = userRole === "user";
    const isAdminAccess = isAdmin || !item.adminOnly;
    // Profile Link Check
    if (item.name === "My Profile") {
      if (
        (isAdmin && item.path === "admin-profile") ||
        (!isAdmin && item.path === "user-profile")
      ) {
        acc.push({
          key: item.name,
          label: (
            <NavLink
              to={`/dashboard/${item.path}`}
              style={({ isActive }) => ({
                color: isActive ? token.colorPrimary : token.colorText,
                border: "none",
                padding: 0,
                margin: 0,
              })}
            >
              {item.name}
            </NavLink>
          ),
        });
      }
    } else if (item.path && item.name && isAdminAccess) {
      acc.push({
        key: item.name,
        label: (
          <NavLink
            to={`/dashboard/${item.path}`}
            style={({ isActive }) => ({
              color: isActive ? token.colorPrimary : token.colorText,
              border: "none",
              padding: 0,
              margin: 0,
            })}
          >
            {item.name}
          </NavLink>
        ),
      });
    }
    // nested routes
    if (
      item.children &&
      isAdminAccess
      // && (item.name !== "Dashboard" || isAuthenticated)
    ) {
      const filteredChildren = item.children.filter(
        (child) => isAdmin || !child.adminOnly
      );
      if (filteredChildren.length > 0) {
        acc.push({
          key: item.name,
          label: item.name,
          children: filteredChildren.map((child) => ({
            key: child.name,
            label: (
              <NavLink
                to={`/dashboard/${child.path}`}
                style={({ isActive }) => ({
                  color: isActive ? token.colorPrimary : token.colorText,
                  // backgroundColor: isActive ? "#f5efe6" : "",
                  // borderColor: "#f5efe6",
                  // border: "none",
                  padding: 0,
                  margin: 0,
                })}
              >
                {child.name}
              </NavLink>
            ),
          })),
        });
      }
    }
    return acc;
  }, []);
  return sidebarItems;
};
