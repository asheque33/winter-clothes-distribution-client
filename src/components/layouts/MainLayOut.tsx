import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  return (
    <Layout className="max-w-[1450px] mx-auto">
      <Sidebar />
      <Layout>
        <Content style={{ margin: "0" }}>
          <div>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
