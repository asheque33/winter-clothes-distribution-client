import RadioInForm from "@/components/form/RadioInForm";
import { useCreateWinterClothMutation } from "@/redux/features/winterClothes/winterClothesApi";
import { Button, Divider, Form, Input, message } from "antd";

const CreateWinterClothes = () => {
  const [form] = Form.useForm();
  const [createWinterCloth, { isLoading }] = useCreateWinterClothMutation();
  const handleSubmit = async (data: FormData) => {
    const res = await createWinterCloth(data).unwrap();
    if (isLoading) {
      return <p>Loading..................</p>;
    }
    form.resetFields();
    message.success(res.message);
  };
  return (
    <div className="max-w-7xl ">
      <h2 className="font-bold text-5xl my-8 text-center text-blue-500">
        Create Winter Clothes Post
      </h2>
      <Divider className="border-b-2 border-blue-400"></Divider>
      <Form
        form={form}
        className="w-2/3 mx-auto"
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ size: "S" }}
      >
        <Form.Item name="image" label="Image">
          <Input type="text" />
        </Form.Item>
        <Form.Item name="title" label="Title">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Category" name="category">
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Size" name="size">
          <RadioInForm />
        </Form.Item>
        <Form.Item label="Description" name="description">
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

export default CreateWinterClothes;
