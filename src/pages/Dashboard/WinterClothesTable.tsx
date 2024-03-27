import {
  useDeleteWinterClothMutation,
  useGetWinterClothesQuery,
} from "@/redux/features/winterClothes/winterClothesApi";
import { TWinterClothProps } from "@/types";
import EditedWClothesModal from "@/utils/EditedWClothesModal";
import { Button, Modal, Space, Table, TableColumnsType } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";

interface DataType {
  _id: string;
  title: string;
  category: string;
  size: string;
}

const WinterClothesTable = () => {
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
      title: "Title",
      dataIndex: "title",
      key: "title",
      width: "5%",
      render: (text: string) => (
        <div style={{ marginRight: "20px" }}>{text}</div>
      ),
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      width: "1.5%",
      render: (text: string) => (
        <div style={{ marginLeft: "10px" }}>{text}</div>
      ),
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
      width: "1.5%",
      render: (text: string) => (
        <div style={{ marginLeft: "10px" }}>{text}</div>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => {
        // console.log(item);
        return (
          <Space size="large">
            {/* <Button className="bg-green-400">Edit</Button> */}
            <EditedWClothesModal record={record} />
            <Button
              onClick={() => handleDelete(record._id)}
              className="bg-red-400 "
            >
              Delete
            </Button>
          </Space>
        );
      },
      width: "1.5%",
    },
  ];

  return (
    <div className="mx-10 my-12 ">
      <div className="mx-4">
        <Link to="/dashboard/create-winter-clothes">
          <Button className="bg-orange-400 ">Add New</Button>
        </Link>
      </div>
      <div className="my-4 mx-4 border-4 border-blue-400 rounded-xl">
        <Table
          className="bg-slate-300"
          loading={isFetching}
          columns={columns}
          dataSource={data}
        />
      </div>
      <Modal
        title="Confirm Delete"
        open={confirmDeleteModalVisible}
        footer={[
          <Button key="cancel" onClick={handleCancelDelete}>
            Cancel
          </Button>,
          <Button
            key="submit"
            className="bg-red-400"
            onClick={handleConfirmDelete}
          >
            Confirm
          </Button>,
        ]}
      >
        <p>Are you sure you want to delete this winter clothes post?</p>
      </Modal>
    </div>
  );
};

export default WinterClothesTable;
