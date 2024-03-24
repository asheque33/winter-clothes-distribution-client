import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/features/auth/authSlice";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const isAuthenticated = useAppSelector(selectedUser);
  return (
    <Layout className="max-w-[1450px] mx-auto">
      {isAuthenticated && <Sidebar />}
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
