import Container from "@/components/layouts/Shared/Container";
import LoginForm from "./LoginForm";
import { Button, Space, theme, Typography } from "antd";
import { useContext, useState } from "react";
import { LoginOutlined } from "@ant-design/icons";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { Link } from "react-router-dom";
const { Title, Text } = Typography;
const { useToken } = theme;
const Login: React.FC = () => {
  const [demoCredentials, setDemoCredentials] = useState({
    email: "",
    password: "",
  });
  const { theme } = useContext(ThemeContext);
  const { token } = useToken();
  const handleUserCredentialsDemo = () => {
    setDemoCredentials({ email: "user@gmail.com", password: "123456" });
  };
  const handleAdminCredentialsDemo = () => {
    setDemoCredentials({ email: "admin@gmail.com", password: "123456" });
  };

  return (
    <div
      style={{
        backgroundColor: theme === "dark" ? "#333" : "#fff",
      }}
    >
      <Container className="h-screen flex  justify-center items-center">
        <section
          style={{
            backgroundColor: "#f5efe6",
          }}
          className=" flex justify-center items-center  w-4/5 md:w-3/5 lg:w-2/5  p-3.5 rounded-xl"
        >
          <div className="flex flex-col items-center w-full">
            <Space direction="vertical">
              <Typography className="text-center mb-2">
                <Title level={2} style={{ marginBottom: 0 }}>
                  <span>Login!!</span>
                </Title>
                <Text
                  style={{ marginTop: 0 }}
                  className="ms-4 italic text-slate-600/75 text-sm"
                >
                  <span>Login info to enjoy all the benefits.</span>
                </Text>
              </Typography>
              <div className="flex flex-col items-center gap-2 mb-4">
                <Button
                  size="large"
                  block
                  color="default"
                  variant="solid"
                  icon={<LoginOutlined />}
                  htmlType="submit"
                  onClick={handleAdminCredentialsDemo}
                >
                  Demo Admin Credentials
                </Button>
                <Button
                  size="large"
                  block
                  color="default"
                  variant="solid"
                  icon={<LoginOutlined />}
                  htmlType="submit"
                  onClick={handleUserCredentialsDemo}
                >
                  Demo User Credentials
                </Button>
              </div>
              <LoginForm demoCredentials={demoCredentials} />
              <Typography className="text-center text-slate-600/75 text-sm mt-2">
                <Text strong>
                  <span>Don't have any account?</span>{" "}
                  <Link style={{ color: token?.colorPrimary }} to="/register">
                    Register
                  </Link>
                </Text>
              </Typography>
            </Space>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Login;
