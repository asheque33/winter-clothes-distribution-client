import {
  LockOutlined,
  LoginOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Form, FormProps, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { IRegisterUser } from "@/types";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
const RegisterForm = () => {
  const navigate = useNavigate();
  const [register] = useRegisterMutation();
  const onFinish: FormProps<IRegisterUser>["onFinish"] = (values) => {
    const registerFields = { ...values, role: "user" };
    register(registerFields);
    message.success("User registered successfully!");
    navigate("/login");
  };
  return (
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
          size="small"
          style={{
            padding: "8px 20px",
            fontSize: "20px",
            gap: "10px",
          }}
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
          size="small"
          style={{
            padding: "8px 20px",
            fontSize: "20px",
            gap: "10px",
          }}
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
          size="small"
          style={{
            padding: "8px 20px",
            fontSize: "20px",
            gap: "10px",
          }}
        />
      </Form.Item>
      <Form.Item>
        <Button
          color="default"
          variant="solid"
          size="large"
          block
          htmlType="submit"
          icon={<LoginOutlined />}
        >
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
