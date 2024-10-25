import { Col, Row, Typography, theme } from "antd";

import { TWinterClothProps } from "@/types";
import { useGetWinterClothesQuery } from "@/redux/features/winterClothes/winterClothesApi";
import Container from "@/components/layouts/Shared/Container";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import WinterClothesCard from "@/components/Home/ClothCard/WinterClothesCard";

const { Title } = Typography;
const { useToken } = theme;

const WinterClothes: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { token } = useToken();
  const { data, isLoading } = useGetWinterClothesQuery(undefined);
  if (isLoading) {
    <p>Loading...................</p>;
  }
  const clothes = data?.data;
  return (
    <Container>
      <Typography className="my-6 text-center">
        <Title level={4}>
          {" "}
          <span
            style={{
              color:
                theme === "light" ? token.colorPrimary : token.colorPrimary,
            }}
          >
            Total
          </span>{" "}
          Collections
        </Title>
      </Typography>
      {/* <Divider className="border-b-2 border-blue-400" /> */}
      <div className="site-card-wrapper my-8">
        <Row
          gutter={[
            { xs: 16, sm: 16, md: 20, lg: 24 },
            { xs: 16, sm: 16, md: 20, lg: 24 },
          ]}
        >
          {clothes?.map((item: TWinterClothProps) => (
            <Col key={item._id} xs={24} sm={12} md={12} lg={8}>
              <WinterClothesCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default WinterClothes;
