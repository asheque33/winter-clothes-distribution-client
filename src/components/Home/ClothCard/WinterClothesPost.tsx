import { Button, Col, Row, theme, Typography } from "antd";
import { TWinterClothProps } from "@/types";
import { useGetWinterClothesQuery } from "@/redux/features/winterClothes/winterClothesApi";
import WinterClothesCard from "./WinterClothesCard";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";

const { Title, Text, Paragraph } = Typography;
const { useToken } = theme;
const WinterClothesPost = () => {
  const { theme } = useContext(ThemeContext);
  const { token } = useToken();
  const { data: clothes, isLoading } = useGetWinterClothesQuery(undefined);

  if (isLoading) {
    <p>Loading...................</p>;
  }
  const displayClothes = clothes?.data.slice(0, 6);
  return (
    <div className="my-16">
      <Typography className="text-center mb-10">
        <Title style={{ marginBottom: "0" }} level={2}>
          <span className="text-[#FF4C4E]">Support</span> Our Cause
        </Title>
        <Paragraph style={{ marginTop: "0" }}>
          <Text italic className="text-lg text-slate-400">
            Join us in raising awareness about the importance of winter clothing
            for people with chronic cold conditions.
          </Text>
        </Paragraph>
      </Typography>
      <div className="site-card-wrapper mt-8 ">
        <Row
          gutter={[
            { xs: 8, md: 16, lg: 24 },
            { xs: 8, md: 16, lg: 24 },
          ]}
        >
          {displayClothes?.map((item: TWinterClothProps) => (
            <Col key={item._id} xs={24} sm={12} md={12} lg={8}>
              <WinterClothesCard item={item} />
            </Col>
          ))}
        </Row>
        <div
          className="mx-auto"
          style={{ textAlign: "center", marginTop: "24px" }}
        >
          <Button
            href="/winter-clothes"
            style={{
              backgroundColor:
                theme === "dark" ? token.colorPrimary : token.colorText,
              color: theme === "light" ? token.colorTextSecondary : "#fff",
            }}
            size="large"
            color="default"
            variant="solid"
          >
            View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WinterClothesPost;
