import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import { selectedUser } from "@/redux/features/auth/authSlice";
import { Button, Modal, theme, Typography } from "antd";
import { TWinterClothProps } from "@/types";
import { motion } from "framer-motion";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";

const { Title, Text } = Typography;
const imgStyle: React.CSSProperties = {
  display: "block",
  maxWidth: 800,
  maxHeight: 600,
};
const { useToken } = theme;
const SingleClothCard = ({ item }: { item: TWinterClothProps }) => {
  const { theme } = useContext(ThemeContext);
  const { token } = useToken();
  const [confirmModalVisible, setConfirmModalVisible] = useState(false);
  const user = useAppSelector(selectedUser);
  const navigate = useNavigate();

  const handleDonateNow = () => {
    setConfirmModalVisible(true);
  };

  const handleConfirmDonate = () => {
    if (user) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleCancelDonate = () => {
    setConfirmModalVisible(false);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: theme === "light" ? "#fff" : token.colorBgSolid,
        }}
        className="w-full  p-4 mx-auto"
      >
        <div id="img" className="w-full lg:w-[800px] h-[600px]  mx-auto">
          <img
            className="w-full h-full  object-contain "
            alt="avatar"
            src={item.image}
            style={imgStyle}
          />
        </div>
        <div
          id="img-info"
          className="flex justify-evenly items-center w-3/4 mr-auto mt-2"
        >
          <Typography className="w-full h-full  space-y-3 object-cover ">
            <Title
              level={4}
              className="text:xl md:text-2xl lg:text-3xl font-semibold"
            >
              {item.title}
            </Title>
            <Title level={5} className="font-medium text-base md:text-lg">
              Category : <span className="text-[#ff4c4e]">{item.category}</span>
            </Title>
            <Title level={5} className="font-medium text-base md:text-lg">
              Size : <span className="text-[#ff4c4e]">{item.size}</span>
            </Title>
          </Typography>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.5, type: "spring" },
            }}
            className="w-full"
          >
            <Button
              onClick={handleDonateNow}
              type={theme === "light" ? "primary" : "primary"}
              //   type="primary"
              //   color={theme === "light" ? "default" : undefined}
              //   color="default"
              danger={theme !== "light"}
              variant="solid"
              size="large"
              block
            >
              Donate Now
            </Button>
          </motion.div>
        </div>
      </div>
      <section
        id="img-desc"
        style={{
          backgroundColor: theme === "light" ? "#fff" : token.colorBgSolid,
        }}
        className="mt-8   p-4"
      >
        <Typography className=" space-y-4">
          <Text>
            <span className="text-lg  font-semibold md:text-lg ">
              Description Summary{" "}
            </span>{" "}
            <br /> <br />{" "}
            <span className="lg:w-[90%] w-full">
              {item.description}As temperatures plummet, vulnerable individuals
              face the harsh reality of winter without adequate clothing. Your
              donation will support our clothing drive, providing coats, gloves,
              and blankets to those in need. By contributing to this cause,
              you're not just offering warmth against the cold; you're wrapping
              our community members in a blanket of compassion and care.
              Together, let's ensure that everyone has access to essential
              winter wear, allowing them to navigate the season with dignity and
              warmth.As temperatures plummet, vulnerable individuals face the
              harsh reality of winter without adequate clothing. Your donation
              will support our clothing drive, providing coats, gloves, and
              blankets to those in need. By contributing to this cause, you're
              not just offering warmth against the cold; you're wrapping our
              community members in a blanket of compassion and care. Together,
              let's ensure that everyone has access to essential winter wear,
              allowing them to navigate the season with dignity and warmth.As
              temperatures plummet, vulnerable individuals face the harsh
              reality of winter without adequate clothing. Your donation will
              support our clothing drive, providing coats, gloves, and blankets
              to those in need. By contributing to this cause, you're not just
              offering warmth against the cold; you're wrapping our community
              members in a blanket of compassion and care. Together, let's
              ensure that everyone has access to essential winter wear, allowing
              them to navigate the season with dignity and warmth.As
              temperatures plummet, vulnerable individuals face the harsh
              reality of winter without adequate clothing. Your donation will
              support our clothing drive, providing coats, gloves, and blankets
              to those in need. By contributing to this cause, you're not just
              offering warmth against the cold; you're wrapping our community
              members in a blanket of compassion and care. Together, let's
              ensure that everyone has access to essential winter wear, allowing
              them to navigate the season with dignity and warmth.As
              temperatures plummet, vulnerable individuals face the harsh
              reality of winter without adequate clothing. Your donation will
              support our clothing drive, providing coats, gloves, and blankets
              to those in need. By contributing to this cause, you're not just
              offering warmth against the cold; you're wrapping our community
              members in a blanket of compassion and care. Together, let's
              ensure that everyone has access to essential winter wear, allowing
              them to navigate the season with dignity and warmth.As
              temperatures plummet, vulnerable individuals face the harsh
              reality of winter without adequate clothing. Your donation will
              support our clothing drive, providing coats, gloves, and blankets
              to those in need. By contributing to this cause, you're not just
              offering warmth against the cold; you're wrapping our community
              members in a blanket of compassion and care. Together, let's
              ensure that everyone has access to essential winter wear, allowing
              them to navigate the season with dignity and warmth.
            </span>
          </Text>
        </Typography>
      </section>
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
        <p>Are you sure you want to donate to this product?</p>
      </Modal>
    </>
  );
};

export default SingleClothCard;
