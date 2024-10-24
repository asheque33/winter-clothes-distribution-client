import { ConfigProvider, Layout } from "antd";
import Sidebar from "../Shared/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
const { Content } = Layout;

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 520) {
        setIsSidebarCollapsed(false);
      } else {
        setIsSidebarCollapsed(true);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      navigate("/dashboard/home");
    }
  }, [location, navigate]);

  const isDashboardActive = location.pathname === "/dashboard";

  return (
    <ConfigProvider
      theme={
        theme === "dark"
          ? {
              token: {
                colorPrimary: "#ff4c4e",
                colorTextSecondary: "#3c3d37",
                // colorBgMask: "#f5efe6",
                colorBgLayout: "#3c3d37", //bodyBg
                colorBgBase: "#313131", //cardBg,ButtonBg
                colorBgSolid: "#001629",
                //"#313131",
                //navbar,footer
                colorText: "#f0f0f0",
              }, //dark theme
            }
          : {
              token: {
                colorPrimary: "#ff4c4e",
                colorTextSecondary: "#fff",
                // colorBgMask: "#3c3d37",
                colorBgLayout: "#f5f5f5",
                colorBgBase: "#fff", //cardBg,ButtonBg
                colorBgSolid: "#f5efe6",
                colorText: "#3c3d37",
              }, //default/light theme
            }
      }
    >
      <Layout>
        {!isDashboardActive ? <Navbar /> : null}
        <Layout>
          <Sidebar isDashboardActive={isDashboardActive} />
          <Content
            style={{
              marginLeft: isSidebarCollapsed ? 0 : 0, // Ensures the content does not shift when the sidebar toggles
              minHeight: `calc(100vh - 64px)`,
              // padding: "24px",
              // transition: "margin-left 0.3s ease", // Smooth transition if needed
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  );
};

export default DashboardLayout;
