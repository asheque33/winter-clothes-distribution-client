import RadioInForm from "@/components/form/RadioInForm";
import { useUpdateWinterClothMutation } from "@/redux/features/winterClothes/winterClothesApi";
import { TWinterClothProps } from "@/types";
import { EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, theme } from "antd";
import { useContext, useState } from "react";
import { ThemeContext } from "../ThemeContext/ThemeProvider";
const { useToken } = theme;
const EditedWinterClothesModal = ({
  record,
}: {
  record: TWinterClothProps;
}) => {
  const { token } = useToken();
  const { theme } = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [updatedCloth] = useUpdateWinterClothMutation();
  const handleOpenModal = () => {
    setVisible(true);
    form.setFieldsValue({
      image: record.image,
      category: record.category,
      title: record.title,
      size: record.size,
      description: record.description,
    });
  };

  const handleCloseModal = () => {
    setVisible(false);
  };
  const handleEdit = async (values: TWinterClothProps) => {
    try {
      const { ...updatedData } = values;
      await updatedCloth({ _id: record._id, data: updatedData }).unwrap(); // Unwrap the result to handle potential errors
      handleCloseModal();
    } catch (error) {
      console.error("Failed to update cloth:", error);
    }
  };

  return (
    <>
      {/* handle Modal Open Button To Update Cloth */}
      <Button
        style={{
          backgroundColor:
            theme === "dark" ? token.colorBgSolid : token.colorText,
          color: theme === "dark" ? "#fff" : "#fff",
        }}
        onClick={handleOpenModal}
      >
        <EditOutlined />
      </Button>
      {/* Modal To Update specific cloth By Admin */}
      <Modal
        title="Edit Winter Clothes Post"
        open={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button
            key="cancel"
            color="default"
            variant="filled"
            onClick={handleCloseModal}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            color="default"
            variant="solid"
            htmlType="submit"
            onClick={form.submit}
          >
            Submit
          </Button>,
        ]}
      >
        <Form form={form} onFinish={handleEdit} layout="vertical">
          <Form.Item
            label="Image"
            name="image"
            initialValue={record.image as string}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Input />
          </Form.Item>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Size" name="size">
            <RadioInForm />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            initialValue={record.description as string}
          >
            <Input.TextArea placeholder="Describe product details please..." />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditedWinterClothesModal;
