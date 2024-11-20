import { Carousel, Typography } from "antd";
const { Title, Text, Paragraph } = Typography;

const WinterClothesGallery = () => {
  return (
    <div className="h-full my-16 ">
      <Typography className="text-center mb-10">
        <Title style={{ marginBottom: "0" }} level={2}>
          <span className="text-[#FF4C4E]">Hands</span> To Hearts
        </Title>
        <Paragraph style={{ marginTop: "0" }}>
          <Text italic className="text-lg text-slate-400">
            Warming Hearts This Winter – Donated Item Reaches Those Who Need It
            Most.
          </Text>
        </Paragraph>
      </Typography>
      <Carousel
        autoplay
        autoplaySpeed={2000}
        adaptiveHeight={true}
        effect="fade"
      >
        <div>
          <img
            src="https://i.ibb.co/gM1Pr5S/410587813-660674446263822-4041273227539728533-n.jpg"
            alt="Winter Clothes Distribution 1"
            style={{ width: "100%", height: "850px" }}
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/8281Cs9/410633497-661717026159564-5615960517558633423-n.jpg"
            alt="Winter Clothes Distribution 2"
            style={{ width: "100%", height: "850px" }}
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/HtwcVXh/418732138-678373804493886-1129692707493634840-n.jpg"
            alt="Winter Clothes Distribution 3"
            style={{ width: "100%", height: "850px" }}
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/ChDpXy1/winter-clothing-gallery-3.jpg"
            alt="Winter Clothes Distribution 4"
            style={{ width: "100%", height: "850px" }}
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/T8SpPCw/winter-clothing-gallery-1.jpg"
            alt="Winter Clothes Distribution 5"
            style={{ width: "100%", height: "850px" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default WinterClothesGallery;
