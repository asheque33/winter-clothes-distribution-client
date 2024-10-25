import RadioInForm from "@/components/form/RadioInForm";
import Container from "@/components/layouts/Shared/Container";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { useCreateWinterClothMutation } from "@/redux/features/winterClothes/winterClothesApi";
import { Button, Form, Input, message, Typography } from "antd";
import { useContext } from "react";
const { Title } = Typography;

const CreateWinterClothes = () => {
  const { theme } = useContext(ThemeContext);
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
    <Container className="my-8 ">
      <Typography>
        <Title level={3} className="  mb-4 text-center ">
          <span className="text-[#ff4c4e]">Create </span>To{" "}
          <span className="text-[#ff4c4e]">Donate</span>
        </Title>
      </Typography>

      <Form
        form={form}
        className="w-2/3 mx-auto"
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={{ size: "S" }}
      >
        <Form.Item
          name="image"
          label="Image"
          rules={[{ required: true, message: "Please provide product image!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: "Please provide product title!" }]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          rules={[
            { required: true, message: "Please provide product category!" },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item label="Size" name="size">
          <RadioInForm />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            { required: true, message: "Please provide product details!" },
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

export default CreateWinterClothes;
