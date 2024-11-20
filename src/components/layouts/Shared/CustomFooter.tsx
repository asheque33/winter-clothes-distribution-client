import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import logoLightIcon from "@/assets/care-logo-light.png";
import logoDarkIcon from "@/assets/care-logo-dark.png";
import { Col, Divider, Image, Layout, Row, theme, Typography } from "antd";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
const { useToken } = theme;
const CustomFooter = () => {
  const { Footer } = Layout;
  const { token } = useToken();
  const { theme } = useContext(ThemeContext);
  const { Text, Title, Paragraph } = Typography;
  return (
    <Footer
      style={{
        backgroundColor: theme === "light" ? "#f6f4f4" : token.colorBgSolid,
        // color: token.colorPrimary,
        // padding: "24px 0",
      }}
    >
      <Divider style={{ borderColor: "#d9d9d9" }} />
      <Container>
        <Row gutter={[16, { xs: 16, md: 16, lg: 24 }]} className="text-center">
          <Col xs={24} md={12} lg={6} xl={6}>
            <div>
              <div
                className="flex flex-row items-start justify-center gap-2"
                // style={{ marginBottom: "0px" }}
              >
                <div>
                  <Image
                    src={theme === "dark" ? logoDarkIcon : logoLightIcon}
                    alt="logo Icon"
                    width={40}
                    height={40}
                    preview={false}
                  />
                </div>
                <Typography className="flex flex-col text-start">
                  <Title
                    level={2}
                    style={{ marginBottom: "0px" }}
                    className="text-lg font-semibold mb-4"
                  >
                    <span>Care</span>
                  </Title>
                  <Paragraph style={{ marginTop: "0px" }}>
                    <span>Donation, Charity, Funding</span>
                  </Paragraph>
                </Typography>
              </div>
              <Text className="mb-2  text-lg text-start">
                <p>
                  We are a non-profit organization dedicated to supporting those
                  in need with winter essentials.
                </p>
              </Text>
            </div>
          </Col>
          <Col xs={24} md={12} lg={6} xl={6}>
            <Typography>
              <Title level={3} className="text-lg font-semibold mb-4">
                {" "}
                <span>Quick Links</span>
              </Title>
            </Typography>
            <ul style={{ marginTop: "4px" }} className="mb-1 text-base  mt-0 ">
              <li className="mb-1">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/winter-clothes">Causes</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/leaderboard">LeaderBoard</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="/volunteer">Volunteer</NavLink>
              </li>
            </ul>
          </Col>

          <Col xs={24} md={12} lg={6} xl={6}>
            <Typography>
              <Title
                style={{ marginBottom: "8px" }}
                level={3}
                className="text-lg font-medium mt-4 md:mt-0 "
              >
                <span>Resources</span>
              </Title>
            </Typography>
            <ul style={{ marginTop: "4px" }} className="mb-1 text-base  mt-0">
              <li className="mb-1">
                <NavLink to="/about-us">About Us</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="#">Community</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="#">FAQs</NavLink>
              </li>
              <li className="mb-1">
                <NavLink to="#">Support</NavLink>
              </li>
            </ul>
          </Col>
          <Col xs={24} md={12} lg={6} xl={6}>
            <Typography>
              <Title level={3} className="text-lg font-semibold mb-4">
                <span>Contact Us</span>
              </Title>
              <Text className="mb-1  text-base ">
                <p>Address: 123 Main St, City, Country</p>
                <p>Email: care@gmail.com</p>
                <p>Phone: +880107184469</p>
              </Text>
            </Typography>
          </Col>
        </Row>
        <Divider style={{ borderColor: "#d9d9d9" }} />
        <Row>
          <Col span={24} className="text-center">
            {" "}
            <Text strong>
              <span>
                Winter Clothes Distribution Project © {new Date().getFullYear()}{" "}
                Created by Care.
              </span>
            </Text>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
};

export default CustomFooter;
