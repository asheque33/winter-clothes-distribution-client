import { Divider, Typography } from "antd";
import {
  useGetSingleWinterClothQuery,
  useGetWinterClothesQuery,
} from "@/redux/features/winterClothes/winterClothesApi";

import Container from "@/components/layouts/Container";
import { TWinterClothProps } from "@/types";
import RelatedProductCard from "./RelatedProductCard";
import SingleClothCard from "./SingleClothCard";
import { useParams } from "react-router-dom";
const { Title } = Typography;
// const cardStyle: React.CSSProperties = {
//   maxWidth: 1280,
//   maxHeight: "100%",
//   paddingBottom: 50,
// };

const SingleWinterCloth = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetWinterClothesQuery(undefined);

  const clothes = data?.data;
  const { data: cloth, isLoading: isSingleLoading } =
    useGetSingleWinterClothQuery(id);
  const item = cloth?.data;
  if (isLoading || isSingleLoading) {
    return <p>Loading</p>;
  }
  const relatedProducts = clothes
    .filter((product: TWinterClothProps) => product._id !== item?._id)
    .slice(0, 10);

  return (
    <Container className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[calc(100vh-449.5px)] my-8">
      {/* <Card
        hoverable
        style={cardStyle}
        styles={{ body: { padding: 0, overflow: "hidden" } }}
      > */}
      <div className="w-full lg:col-span-9">
        <SingleClothCard item={item} />
      </div>
      <div className="bg-white  lg:col-span-3 w-full">
        <Typography className="text-center">
          <Title level={2}>
            <span>Related Products</span>
          </Title>
        </Typography>
        <Divider />
        <div className=" p-4">
          {relatedProducts.map((product: TWinterClothProps) => (
            <RelatedProductCard key={product._id} relatedProduct={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SingleWinterCloth;
