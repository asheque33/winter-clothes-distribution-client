import {
  FacebookFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Avatar, Col, Divider, Layout, Row, Typography } from "antd";
import { NavLink } from "react-router-dom";

const CustomFooter = () => {
  const { Footer } = Layout;
  const { Text } = Typography;
  return (
    <Footer style={{ backgroundColor: "#f0f2f5", padding: "24px 0" }}>
      <Row className="text-center">
        <Col xs={24} md={12} lg={8}>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <Text type="danger" className="mb-2 text-md">
            <p>Email: xyz@gmail.com</p>
            <p>Phone: +88017184469</p>
          </Text>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <h3 className="text-lg font-semibold mb-4 ">Follow Us</h3>
          <Text type="warning" strong>
            <Avatar
              size="large"
              icon={<LinkedinFilled />}
              className="mr-8 ms-8 bg-[#e56605]"
            />
            <Avatar
              size="large"
              icon={<FacebookFilled />}
              className="mr-8 bg-[#e56605]"
            />
            <Avatar
              size="large"
              icon={<YoutubeFilled />}
              className="mr-8 bg-[#e56605]"
            />
          </Text>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <h3 className="text-lg font-semibold mb-4 ">Resources</h3>
          <ul className="mb-2 text-base font-normal text-purple-600">
            <li>
              <NavLink to="/about-us">About Us</NavLink>
            </li>
            <li>
              <NavLink to="#">FAQS</NavLink>
            </li>
            <li>
              <NavLink to="#">Support</NavLink>
            </li>
          </ul>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24} className="text-center">
          {" "}
          <Text strong type="warning">
            Winter Clothes Distribution Project © {new Date().getFullYear()}{" "}
            Created by Care.
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
