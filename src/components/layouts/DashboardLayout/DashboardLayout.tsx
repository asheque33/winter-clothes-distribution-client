import { Layout } from "antd";
import Sidebar from "../Sidebar";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
const { Content } = Layout;

const DashboardLayout = () => {
  const location = useLocation();

  const isDashboardActive = location.pathname === "/dashboard";

  return (
    <Layout>
      {!isDashboardActive ? <Navbar /> : ""}
      <Layout>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
