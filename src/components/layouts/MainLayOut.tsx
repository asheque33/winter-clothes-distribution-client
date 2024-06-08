import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { ThemeContext } from "@/App";

const { Content } = Layout;

const MainLayout: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Layout className={`${theme} max-w-[1450px] mx-auto `}>
        <Sidebar />
        <Layout>
          <Content style={{ margin: "0" }}>
            <div>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default MainLayout;
