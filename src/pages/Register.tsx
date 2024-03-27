import { LockOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../redux/features/auth/authApi";

const Register = () => {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const onFinish = (data: FormData) => {
    console.log("Received values of form: ", data);
    register(data);
    message.success("User registered successfully! Please login now!");
    navigate("/login");
  };
  return (
    <div style={{ margin: "100px auto", width: "600px", height: "100vh" }}>
      <h1 className="text-5xl my-8 font-bold">User's Register Form!</h1>
      <Form
        name="normal_register"
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="User Name"
            style={{ padding: "20px", fontSize: "20px", gap: "10px" }}
          />
        </Form.Item>
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
        <Form.Item>
          <Button className="bg-red-400 text-white w-56 h-16" htmlType="submit">
            Register
          </Button>
          <span style={{ fontWeight: "normal", fontSize: "24px" }}>
            {" "}
            Or <Link to="/login">Login now!</Link>
          </span>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
