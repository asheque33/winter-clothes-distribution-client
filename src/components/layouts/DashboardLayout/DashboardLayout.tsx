import { Layout } from "antd";
import Sidebar from "../Shared/Sidebar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useEffect, useState } from "react";
const { Content } = Layout;

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
  );
};

export default DashboardLayout;
