import { ConfigProvider } from "antd";
import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext/ThemeProvider";
import MainLayout from "./components/layouts/MainLayout/MainLayOut";

function App() {
  const { theme } = useContext(ThemeContext);

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
      <MainLayout />
    </ConfigProvider>
  );
}

export default App;
