import Container from "@/components/layouts/Shared/Container";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { useAddVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import { Button, Form, Input, message, Typography } from "antd";
import { useContext } from "react";
const { Title, Text, Paragraph } = Typography;

const CreateVolunteer = () => {
  const { theme } = useContext(ThemeContext);
  const [form] = Form.useForm();
  const [addVolunteer, { isLoading }] = useAddVolunteerMutation();
  const handleSubmit = async (data: FormData) => {
    const res = await addVolunteer(data).unwrap();
    if (isLoading) {
      return <p>Loading..................</p>;
    }
    form.resetFields();
    message.success(res.message);
  };
  return (
    <Container className="my-6">
      <Typography className="text-center">
        <Title style={{ marginBottom: "0" }} level={2}>
          <span className="text-[#FF4C4E]">SignUp</span> As A{" "}
          <span className="text-[#ff4c4e]">Volunteer</span>
        </Title>
        <Paragraph style={{ marginTop: "0" }}>
          <Text italic className="text-lg text-slate-400">
            Warming Hearts This Winter – Interested To Contribute With Us?
          </Text>
        </Paragraph>
      </Typography>
      <Form
        form={form}
        className="w-2/3 mx-auto"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phoneNumber"
          rules={[
            {
              required: true,
              message: "Please enter your phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Location"
          name="location"
          rules={[
            {
              required: true,
              type: "string",
              message: "Please enter your location!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button
            style={{
              backgroundColor: theme === "light" ? "#333" : "#ff4c4e",
              color: theme === "light" ? "#fff" : "#fff",
            }}
            color="default"
            variant="solid"
            htmlType="submit"
          >
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default CreateVolunteer;
