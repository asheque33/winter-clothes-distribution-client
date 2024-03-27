import { Card, Col, Row, Button, Divider } from "antd";
import { Link } from "react-router-dom";
import { useGetWinterClothesQuery } from "@/redux/features/winterClothes/winterClothesApi";
import CustomHeader from "@/components/layouts/CustomHeader";
import { TWinterClothProps } from "@/types";

const WinterClothes: React.FC = () => {
  const { data: clothes, isLoading } = useGetWinterClothesQuery(undefined);
  if (isLoading) {
    <p>Loading...................</p>;
  }
  console.log(clothes);
  return (
    <div
      style={{
        margin: "0 auto",
        width: "full",
        maxWidth: "1450px",
        // height: "100vh",
      }}
    >
      <CustomHeader />
      <h2 className="font-bold text-5xl text-blue-400 my-8 text-center">
        All Winter Clothes Collection
      </h2>
      <Divider className="border-b-2 border-blue-400" />
      <div className="site-card-wrapper my-16">
        <Row gutter={[16, { xs: 16, md: 24, lg: 32 }]}>
          {clothes?.data?.map((item: TWinterClothProps) => (
            <Col key={item._id} xs={24} md={12} lg={8}>
              <Card
                className="shadow-lg"
                hoverable
                cover={
                  <img
                    alt={item.title}
                    src={item.image}
                    className="size-[416px] mt-2 px-2"
                  />
                }
              >
                <Card.Meta title={item.title} />
                <h6>{`Category: ${item.category}`}</h6>
                <h6>{`Size: ${item.size}`}</h6>
                <Button
                  type="primary"
                  className="bg-[#1677FF] text-white border-4"
                >
                  <Link to={`/winter-clothes/${item._id}`}>View Detail</Link>
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default WinterClothes;
