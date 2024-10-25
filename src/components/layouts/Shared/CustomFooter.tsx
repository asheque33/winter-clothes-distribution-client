import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import {
  FacebookFilled,
  LinkedinFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import { Avatar, Col, Divider, Layout, Row, theme, Typography } from "antd";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
const { useToken } = theme;
const CustomFooter = () => {
  const { Footer } = Layout;
  const { token } = useToken();
  const { theme } = useContext(ThemeContext);
  const { Text, Title } = Typography;
  return (
    <Footer
      style={{
        backgroundColor: theme === "light" ? "#F6D9D9" : token.colorBgSolid,
        color: token.colorPrimary,
        // padding: "24px 0",
      }}
    >
      <Divider />
      <Row gutter={[16, { xs: 16, md: 16, lg: 24 }]} className="text-center">
        <Col xs={24} md={12} lg={8}>
          <Typography>
            <Title level={3} className="text-lg font-semibold mb-4">
              {" "}
              <span className="text-[#ff4c4e]">Contact Us</span>
            </Title>
            <Text className="mb-2 text-[#ff4c4e] text-lg font-medium">
              <p>Address: 123 Main St, City, Country</p>
              <p>Email: xyz@gmail.com</p>
              <p>Phone: +88017184469</p>
            </Text>
          </Typography>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Typography>
            <Title level={3} className="text-lg font-semibold mb-4 ">
              {" "}
              <span className="text-[#ff4c4e]">Follow Us</span>
            </Title>
            <Text strong>
              <Avatar
                size="large"
                icon={<LinkedinFilled />}
                className="mx-8 bg-[#ff4c4e] "
              />
              <Avatar
                size="large"
                icon={<FacebookFilled />}
                className="mr-8 bg-[#ff4c4e]"
              />
              <Avatar
                size="large"
                icon={<YoutubeFilled />}
                className="mr-8 bg-[#ff4c4e]"
              />
            </Text>
          </Typography>
        </Col>
        <Col xs={24} md={12} lg={8}>
          <Typography>
            <Title
              style={{ marginBottom: "8px" }}
              level={3}
              className="text-lg font-medium mt-4 md:mt-0 "
            >
              <span className="text-[#ff4c4e] ">Resources</span>
            </Title>
          </Typography>
          <ul
            style={{ marginTop: "4px" }}
            className="mb-1 text-base font-medium mt-0"
          >
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
          <Text strong>
            <span className="text-[#ff4c4e]">
              Winter Clothes Distribution Project © {new Date().getFullYear()}{" "}
              Created by Care.
            </span>
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default CustomFooter;
