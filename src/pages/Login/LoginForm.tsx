import {
  LockOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectedUser, setUser } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { ILoggedInUser } from "@/types";
import { useEffect } from "react";
import { capitalize } from "@/utils/CapitalizedWord";
interface IDemoCredentials {
  demoCredentials: {
    email: string;
    password: string;
  };
}

const LoginForm = ({ demoCredentials }: IDemoCredentials) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [login] = useLoginMutation();
  const [form] = Form.useForm();

  useEffect(() => {
    if (demoCredentials.email && demoCredentials.password) {
      form.setFieldsValue({
        email: demoCredentials.email,
        password: demoCredentials.password,
      });
    }
  }, [demoCredentials, form]);

  const onFinish = async (data: ILoggedInUser) => {
    const result = await login(data).unwrap();
    const user = verifyToken(result.token);
    dispatch(setUser({ user, token: result.token }));
  };
  const auth = useAppSelector(selectedUser);
  const userRole = capitalize(auth?.role as string);
  useEffect(() => {
    if (userRole) {
      message.success(`${userRole} logged in successfully!`);
      navigate("/");
    }
  }, [userRole, navigate]);

  return (
    <Form
      form={form}
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
          size="small"
          placeholder="Email"
          style={{ padding: "8px 20px", fontSize: "20px", gap: "10px" }}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          size="small"
          placeholder="Password"
          style={{ padding: "8px 20px", fontSize: "20px", gap: "10px" }}
        />
      </Form.Item>
      <Form.Item style={{ fontSize: "10px", gap: "10px" }}>
        <Button
          size="large"
          block
          color="default"
          variant="solid"
          icon={<LoginOutlined />}
          htmlType="submit"
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
