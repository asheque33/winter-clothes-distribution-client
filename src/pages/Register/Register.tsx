import Container from "@/components/layouts/Container";
import RegisterForm from "./RegisterForm";
import { Space, Typography } from "antd";
const { Title, Text, Link } = Typography;

const Register = () => {
  return (
    <Container className="h-screen flex justify-center items-center">
      <div className="bg-[#F5EFE6] flex justify-center items-center  w-4/5 md:w-3/5 lg:w-2/5  p-3.5 rounded-xl">
        <div className="flex flex-col items-center w-full">
          <Space direction="vertical">
            <Typography className="text-center mb-2">
              <Title level={2} style={{ marginBottom: 0 }}>
                <span>Register!!</span>
              </Title>
              <Text
                style={{ marginTop: 0 }}
                className="ms-4 italic text-slate-600/75 text-sm"
              >
                <span>Create an account to enjoy all the benefits.</span>
              </Text>
            </Typography>
            <RegisterForm />
            <Typography className="text-center text-slate-600/75 text-sm mt-2">
              <Text strong>
                <span>Already have an account?</span>{" "}
                <Link href="/login">Login</Link>
              </Text>
            </Typography>
          </Space>
        </div>
      </div>
    </Container>
  );
};

export default Register;
