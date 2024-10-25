import EditedWinterClothesModal from "@/components/ClothUpdatedModal.tsx/EditedWClothesModal";
import Container from "@/components/layouts/Shared/Container";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import {
  useDeleteWinterClothMutation,
  useGetWinterClothesQuery,
} from "@/redux/features/winterClothes/winterClothesApi";
import { TWinterClothProps } from "@/types";

import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Modal,
  Space,
  Table,
  TableColumnsType,
  Typography,
} from "antd";
import { useContext, useState } from "react";
const { Title } = Typography;

interface DataType {
  _id: string;
  image: string;
  title: string;
  category: string;
  size: string;
}

const WinterClothesTable = () => {
  const { theme } = useContext(ThemeContext);
  const { data: AllWinterClothes, isFetching } =
    useGetWinterClothesQuery(undefined);
  const [deleteCloth] = useDeleteWinterClothMutation();
  const [confirmDeleteModalVisible, setConfirmDeleteModalVisible] =
    useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const data: DataType[] | undefined = AllWinterClothes?.data?.map(
    (item: TWinterClothProps) => {
      return {
        _id: item._id,
        image: item.image,
        title: item.title,
        category: item.category,
        size: item.size,
        description: item.description,
      };
    }
  );

  const handleDelete = (_id: string) => {
    setSelectedId(_id);
    setConfirmDeleteModalVisible(true);
  };
  const handleConfirmDelete = async () => {
    if (selectedId) {
      await deleteCloth(selectedId);
      setSelectedId(null);
      setConfirmDeleteModalVisible(false);
    }
  };
  const handleCancelDelete = () => {
    setSelectedId(null);
    setConfirmDeleteModalVisible(false);
  };

  const columns: TableColumnsType<DataType> = [
    {
      title: "Image",
      key: "image",
      width: "15%",
      render: (_, record) => (
        <div>
          <img src={record.image} alt={record.title} width="50%" height="40%" />
        </div>
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "15%",
      // render: (text: string) => (
      //   <div style={{ marginRight: "20px" }}>{text}</div>
      // ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "10%",
      // render: (text: string) => (
      //   <div style={{ marginLeft: "10px" }}>{text}</div>
      // ),
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      width: "10%",
      // render: (text: string) => (
      //   <div style={{ marginLeft: "10px" }}>{text}</div>
      // ),
    },
    {
      title: "Action",
      key: "action",
      width: "10%",
      render: (_, record) => {
        return (
          // Two actions button[edit, delete]
          <Space size="large">
            {/* Table Edited Item */}
            <EditedWinterClothesModal record={record} />
            {/* Table Deleted Item Button */}
            <Button
              onClick={() => handleDelete(record._id)}
              color="danger"
              variant="solid"
              icon={<DeleteOutlined />}
            />
          </Space>
        );
      },
    },
  ];

  return (
    <Container className="my-8  ">
      <div className=" flex flex-col-reverse sm:flex-row items-center justify-between">
        <Button
          href="/dashboard/create-winter-clothes"
          size="large"
          style={{
            backgroundColor: theme === "light" ? "#333" : "#ff4c4e",
            color: theme === "light" ? "#fff" : "#fff",
          }}
          color="default"
          variant="solid"
          className="w-full sm:w-auto"
          icon={<PlusOutlined />}
        >
          Add New
        </Button>
        <Typography className="flex-grow text-center">
          <Title level={3}>
            Clothes <span className="text-[#ff4c4e]">Management</span>
          </Title>
        </Typography>
      </div>
      <div className="my-4  ">
        <Table
          className=" w-full"
          loading={isFetching}
          columns={columns}
          dataSource={data}
          size="large"
          rowKey={(record) => record._id}
        />
      </div>
      <Modal
        title="Confirm Delete"
        open={confirmDeleteModalVisible}
        footer={[
          <Button
            key="cancel"
            color="default"
            variant="filled"
            onClick={handleCancelDelete}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            color="danger"
            variant="solid"
            onClick={handleConfirmDelete}
          >
            Confirm
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete this winter clothes post?</p>
      </Modal>
    </Container>
  );
};

export default WinterClothesTable;
