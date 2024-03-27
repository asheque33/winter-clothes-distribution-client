import { useAddTestimonialMutation } from "@/redux/features/testimonial/testimonialApi";
import { Button, Divider, Form, Input, message } from "antd";

const CreateTestimonial = () => {
  const [form] = Form.useForm();
  const [addTestimonial] = useAddTestimonialMutation();
  const handleSubmit = async (data: FormData) => {
    console.log("Form submitted");
    const res = await addTestimonial(data).unwrap();
    console.log(res);
    message.success(res.message);
    form.resetFields();
  };
  return (
    <div className="max-w-7xl ">
      <h2 className="font-bold text-5xl my-8 text-center text-blue-500">
        Create Testimonial
      </h2>
      <Divider className="border-b-2 border-blue-400"></Divider>
      <Form
        form={form}
        className="w-2/3 mx-auto"
        layout="vertical"
        onFinish={handleSubmit}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Testimonial"
          name="testimonial"
          rules={[
            { required: true, message: "Please input your testimonial!" },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button className="bg-blue-400" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTestimonial;
