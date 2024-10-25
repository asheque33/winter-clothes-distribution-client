import { selectedUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { authUserPaths } from "@/routes/dashboard.route";
import { SidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { useContext, useState } from "react";
import { Layout, Menu, theme } from "antd";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
const { useToken } = theme;
const { Sider } = Layout;
const Sidebar = ({ isDashboardActive }: { isDashboardActive: boolean }) => {
  const { theme } = useContext(ThemeContext);
  const { token } = useToken();
  const [collapsed, setCollapsed] = useState(!isDashboardActive);
  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };
  const handleSidebarMenu = () => {
    setCollapsed(true);
  };
  const user = useAppSelector(selectedUser);
  const userRole = user!.role || "user";

  return (
    <>
      {/* Toggle button */}
      <div
        className="flex justify-end p-2"
        style={{
          position: "fixed",
          top: "20px",
          left: collapsed ? "10px" : "210px",
          transition: "left 0.3s",
          zIndex: 1001,
          // backgroundColor:
          //   theme === "light" ? token.colorBgSolid : token.colorBgSolid,
          color: theme === "light" ? "#333" : "#fff",
          // borderRadius: "50%",
          padding: "5px",
          cursor: "pointer",
          // border: "1px solid #ddd",
        }}
      >
        {collapsed ? (
          <MenuUnfoldOutlined
            onClick={toggleSidebar}
            style={{ fontSize: "18px" }}
          />
        ) : (
          <MenuFoldOutlined
            onClick={toggleSidebar}
            style={{ fontSize: "18px" }}
          />
        )}
      </div>
      {/* Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        trigger={null}
        theme="light"
        // breakpoint="xs"
        collapsedWidth={0}
        // onBreakpoint={(broken) => {
        //   if (broken) {
        //     setCollapsed(true);
        //   }
        // }}
        style={{
          height: `calc(100vh - 64px)`,
          position: "fixed",
          zIndex: 1000,
          top: "64px",
          left: "0",
          overflow: " auto",
          backgroundColor:
            theme === "light" ? token.colorBgSolid : token.colorBgSolid,
        }}
      >
        <Menu
          theme="light"
          mode="inline"
          style={{
            backgroundColor:
              theme === "light" ? token.colorBgSolid : token.colorBgSolid,
            color: theme === "light" ? token.colorText : token.colorText,
          }}
          onClick={handleSidebarMenu}
          items={SidebarItemsGenerator(authUserPaths, userRole)}
        ></Menu>
      </Sider>
    </>
  );
};

export default Sidebar;
