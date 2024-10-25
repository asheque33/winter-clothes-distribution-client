import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { TWinterClothProps } from "@/types";
import { Button, Card, theme } from "antd";
import { useContext } from "react";
const { Meta } = Card;
// const gridStyle: React.CSSProperties = {
//   width: "25%",
//   textAlign: "center",
// };
const { useToken } = theme;
const WinterClothesCard = ({ item }: { item: TWinterClothProps }) => {
  const { token } = useToken();
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Card
        className="shadow-lg  aspect-[4/3]"
        hoverable
        cover={
          <img
            alt={item.title}
            src={item.image}
            className="w-[400] h-[300px] object-contain mt-2 px-2"
          />
        }
      >
        <Meta
          title={item.title}
          description={
            <div
              style={{
                color: theme === "light" ? token.colorText : token.colorText,
              }}
              className="mb-3"
            >
              <p>Category: {item.category}</p>
              <p>Size: {item.size}</p>
            </div>
          }
        />

        <Button
          href={`/winter-clothes/${item._id}`}
          style={{
            backgroundColor:
              theme === "dark" ? token.colorPrimary : token.colorText,
            color: theme === "light" ? token.colorTextSecondary : "#fff",
          }}
          block
          size="middle"
          color="default"
          variant="solid"
          // className="bg-[#3C3D37] text-[#ECDFCC]  "
        >
          View Details
        </Button>
      </Card>
    </div>
  );
};
export default WinterClothesCard;
