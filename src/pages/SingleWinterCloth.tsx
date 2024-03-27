import { Button, Card, Modal } from "antd";
import { useGetSingleWinterClothQuery } from "@/redux/features/winterClothes/winterClothesApi";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/features/auth/authSlice";
const cardStyle: React.CSSProperties = {
  maxWidth: 1280,
  maxHeight: "100%",
  paddingBottom: 50,
};

const imgStyle: React.CSSProperties = {
  display: "block",
  maxWidth: 500,
  maxHeight: 650,
};
const SingleWinterCloth = () => {
  const { id } = useParams();
  const { data: cloth, isLoading } = useGetSingleWinterClothQuery(id);
  const item = cloth?.data;
  const isAuthenticated = useAppSelector(selectedUser);
  const navigate = useNavigate();
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);

  const handleDonateNow = () => {
    setConfirmModalVisible(true);
  };

  const handleConfirmDonate = () => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleCancelDonate = () => {
    setConfirmModalVisible(false);
  };

  if (isLoading) {
    return <p>Loading</p>;
  }
  console.log("single cloth", cloth);
  return (
    <div className="mx-auto w-full h-screen max-w-[1280px]">
      <h2 className="font-bold text-slate-500 text-lg md:text-3xl lg:text-5xl my-8 text-center">
        Winter Cloth Details
      </h2>
      <Card
        hoverable
        style={cardStyle}
        styles={{ body: { padding: 0, overflow: "hidden" } }}
      >
        <div className=" lg:flex justify-around items-center gap-6">
          <img
            className="w-full md:w-1/2 flex-1 mx-auto"
            alt="avatar"
            src={item.image}
            style={imgStyle}
          />
          <div className="w-full h-full md:w-1/2 space-y-3 object-cover mt-16  flex-1 mx-auto">
            <h3 className="text:xl md:text-2xl lg:text-3xl font-semibold">
              Title : {item.title}
            </h3>
            <h6 className="font-medium text-base md:text-lg">
              Category : {item.category}
            </h6>
            <h6 className="font-medium text-base md:text-lg">
              Size : {item.size}
            </h6>
            <h6 className="font-medium text-base md:text-lg">
              Description : {item.description}
            </h6>
            <motion.div
              initial={{ opacity: 0, y: 200 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 1, delay: 0.5, type: "spring" },
              }}
            >
              <Button
                onClick={handleDonateNow}
                className="text-orange-400 mt-8 border-8 border-red-400  rounded-lg w-[250px] md:w-[250px] lg:w-[400px] h-[100px]"
              >
                {" "}
                <span className="text-lg md:text-2xl lg:text-3xl font-bold">
                  <ArrowLeftOutlined className=" mr-2 text-lg md:text-2xl lg:text-3xl font-bold" />{" "}
                  Donate Now
                </span>
              </Button>
            </motion.div>
            <Modal
              title="Confirm Donation"
              open={confirmModalVisible}
              footer={[
                <Button key="cancel" onClick={handleCancelDonate}>
                  Cancel
                </Button>,
                <Button
                  key="submit"
                  className="bg-cyan-500"
                  onClick={handleConfirmDonate}
                >
                  Submit
                </Button>,
              ]}
            >
              <p>Are you sure you want to donate to this Cloth?</p>
            </Modal>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SingleWinterCloth;
