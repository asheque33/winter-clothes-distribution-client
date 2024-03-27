import { LockOutlined, UserAddOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch } from "@/redux/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";

type TLoginProps = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login, { error }] = useLoginMutation();
  console.log("error from useloginmutation", error);
  const onFinish = async (data: TLoginProps) => {
    console.log("Received values of form: ", data);
    const result = await login(data).unwrap();
    console.log("after login data", result);
    const user = verifyToken(result.token);
    console.log(user);
    dispatch(setUser({ user, token: result.token }));
    message.success("User logged in successfully!");
    navigate("/");
  };
  return (
    <div style={{ margin: "100px auto", width: "600px", height: "100vh" }}>
      <h1 className="font-bold text-5xl my-8">User's Login Form!</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            prefix={<UserAddOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="Email"
            style={{ padding: "20px", fontSize: "20px", gap: "10px" }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            style={{ padding: "20px", fontSize: "20px", gap: "10px" }}
          />
        </Form.Item>
        <Form.Item style={{ fontSize: "10px", gap: "10px" }}>
          <Button className="bg-red-400 w-56 h-16 text-white" htmlType="submit">
            Login
          </Button>
          <span style={{ fontWeight: "normal", fontSize: "24px" }}>
            {" "}
            Or <Link to="/register">Register now!</Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
