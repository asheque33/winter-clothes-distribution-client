import { useUpdateWinterClothMutation } from "@/redux/features/winterClothes/winterClothesApi";
import { TWinterClothProps } from "@/types";
import { Button, Form, Input, Modal } from "antd";
import { useState } from "react";

const EditWinterClothesModal = ({ record }: { record: TWinterClothProps }) => {
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
    const { ...updatedData } = values;
    await updatedCloth({ _id: record._id, data: updatedData }); // Dispatch the RTK Query mutation
    handleCloseModal();
  };

  return (
    <>
      <Button className="bg-green-400" onClick={handleOpenModal}>
        Edit
      </Button>
      <Modal
        title="Edit Winter Clothes Post"
        open={visible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="cancel" onClick={handleCloseModal}>
            Cancel
          </Button>,
          <Button key="submit" className="bg-purple-400" onClick={form.submit}>
            Submit
          </Button>,
        ]}
      >
        <Form form={form} onFinish={handleEdit} layout="vertical">
          <Form.Item label="Image" name="image">
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Input />
          </Form.Item>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Size" name="size">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input.TextArea />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default EditWinterClothesModal;
