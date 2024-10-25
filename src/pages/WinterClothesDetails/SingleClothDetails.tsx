import { Divider, theme, Typography } from "antd";
import {
  useGetSingleWinterClothQuery,
  useGetWinterClothesQuery,
} from "@/redux/features/winterClothes/winterClothesApi";

import Container from "@/components/layouts/Shared/Container";
import { TWinterClothProps } from "@/types";
import RelatedProductCard from "./RelatedProductCard";
import SingleClothCard from "./SingleClothCard";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
const { Title } = Typography;
// const cardStyle: React.CSSProperties = {
//   maxWidth: 1280,
//   maxHeight: "100%",
//   paddingBottom: 50,
// };
const { useToken } = theme;
const SingleWinterCloth = () => {
  const { id } = useParams();
  const { token } = useToken();
  const { theme } = useContext(ThemeContext);
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
      <div
        style={{
          backgroundColor: theme === "light" ? "#f0f0f0" : token.colorBgSolid,
        }}
        className="  lg:col-span-3 w-full"
      >
        <Typography className="text-center relative top-2">
          <Title level={2}>
            <span>Related Products</span>
          </Title>
        </Typography>
        <Divider className="mb-0" />
        <div className="mt-0 p-4">
          {relatedProducts.map((product: TWinterClothProps) => (
            <RelatedProductCard key={product._id} relatedProduct={product} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SingleWinterCloth;
