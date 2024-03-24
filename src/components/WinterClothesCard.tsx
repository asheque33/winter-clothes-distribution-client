import { useGetWinterClothesQuery } from "@/redux/features/winterClothes/winterClothesApi";
import { TWinterClothProps } from "@/types";
import { Button, Card, Col, Row } from "antd";
import { Link } from "react-router-dom";

// const gridStyle: React.CSSProperties = {
//   width: "25%",
//   textAlign: "center",
// };

const WinterClothesCard = () => {
  const { data: clothes, isLoading } = useGetWinterClothesQuery(undefined);

  if (isLoading) {
    <p>Loading...................</p>;
  }
  const displayClothes = clothes?.data.slice(0, 6);
  console.log("display clothes", displayClothes);
  return (
    <div className="site-card-wrapper my-8">
      <h2 className="font-bold text-5xl mb-8 text-center">
        Winter Clothes Are Available
      </h2>
      <Row gutter={[16, { xs: 16, md: 24, lg: 32 }]}>
        {displayClothes?.map((item: TWinterClothProps) => (
          <Col key={item._id} xs={24} md={12} lg={8}>
            <Card
              className="shadow-lg"
              hoverable
              cover={
                <img
                  alt={item.title}
                  src={item.image}
                  className="h-[400px]  mt-2 px-2"
                />
              }
            >
              <Card.Meta title={item.title} />
              <h6>{`Category: ${item.category}`}</h6>
              <h6>{`Size: ${item.size}`}</h6>
              <Button
                // type="primary"
                className="bg-[#1677FF] text-white border-2"
              >
                <Link to={`/winter-clothes/${item._id}`}>View Detail</Link>
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
      <div
        className="mx-auto"
        style={{ textAlign: "center", marginTop: "50px" }}
      >
        <Button className="bg-orange-400" type="default">
          <Link to="/winter-clothes">View All</Link>
        </Button>
      </div>
    </div>
  );
};
export default WinterClothesCard;
