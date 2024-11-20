import { TWinterClothProps } from "@/types";
import { Button, Typography } from "antd";
const { Title, Text } = Typography;

const RelatedProductCard = ({
  relatedProduct: item,
}: {
  relatedProduct: TWinterClothProps;
}) => {
  return (
    <section className="border-b border-[#ff4c4e]">
      <div className="flex items-start gap-4 my-2">
        <img className="h-24 w-20" src={item.image!} alt="" />
        <Typography className="flex flex-col">
          <Title level={5}>{item.title.slice(0, 20)}</Title>
          <Text type="danger" strong>
            {item.category}
          </Text>
          <Button
            className="my-1 w-fit"
            variant="solid"
            color="danger"
            href={`/winter-clothes/${item._id}`}
          >
            <span className="px-4">View Details</span>
          </Button>
          {/* <Text type="secondary">Donate Now</Text> */}
        </Typography>
      </div>
    </section>
  );
};

export default RelatedProductCard;
