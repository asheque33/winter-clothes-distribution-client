import { useAddVolunteerMutation } from "@/redux/features/volunteer/volunteerApi";
import { Button, Divider, Form, Input, message } from "antd";

const CreateVolunteer = () => {
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
    <div className="max-w-7xl ">
      <h2 className="font-bold text-5xl my-8 text-purple-500 text-center">
        Volunteer Sign Up Form
      </h2>
      <Divider className="border-b-2 border-purple-400"></Divider>
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
          <Button className="bg-purple-400" htmlType="submit">
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateVolunteer;
