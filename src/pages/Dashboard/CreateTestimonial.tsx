import Container from "@/components/layouts/Shared/Container";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { useAddTestimonialMutation } from "@/redux/features/testimonial/testimonialApi";
import { Button, Form, Input, message, Typography } from "antd";
import { useContext } from "react";
const { Title } = Typography;
const CreateTestimonial = () => {
  const { theme } = useContext(ThemeContext);
  const [form] = Form.useForm();
  const [addTestimonial] = useAddTestimonialMutation();
  const handleSubmit = async (data: FormData) => {
    const res = await addTestimonial(data).unwrap();
    console.log(res);
    message.success(res.message);
    form.resetFields();
  };
  return (
    <Container className="my-8 ">
      <Typography>
        <Title
          level={3}
          className="font-semibold md:font-bold  mb-4 text-center "
        >
          <span className="text-[#ff4c4e]">Create </span>Testimonial
        </Title>
      </Typography>
      <Form
        form={form}
        className="w-2/3 mx-auto"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please provide your name!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Testimonial"
          name="testimonial"
          rules={[
            { required: true, message: "Please provide your testimonial!" },
          ]}
        >
          <Input.TextArea />
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
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default CreateTestimonial;
