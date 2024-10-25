import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import CustomFooter from "../Shared/CustomFooter";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const location = useLocation();

  const isDashboardActive = location.pathname === "/dashboard";

  return (
    <Layout>
      {/*${theme}*/}
      <Navbar />
      <Layout>
        <Content
          style={{
            margin: "0",
            minHeight: `calc(100vh - 399.5px)`,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
      {!isDashboardActive ? <CustomFooter /> : null}
    </Layout>
  );
};

export default MainLayout;
