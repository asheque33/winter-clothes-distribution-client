import { Typography, Button } from "antd";
import bannerImg from "@/assets/banner/winter11-1.png";
import { Link } from "react-router-dom";
const { Text, Title } = Typography;

const Banner: React.FC = () => {
  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)),url(${bannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Typography
        style={{
          zIndex: 0.5,
          color: "white",
        }}
        id="content"
        className="mt-96 sm:mt-80 "
      >
        <Title
          level={3}
          style={{ color: "#ff4a55", textShadow: "1px 1px 2px #333" }}
          className="block w-1/2 mx-auto text-2xl tracking-wide font-extrabold"
        >
          Wrap Someone in Warmth!
        </Title>
        <Title
          level={2}
          style={{
            color: "white",
            marginBottom: "0",
          }}
          className="text-5xl tracking-wide font-bold"
        >
          Let's Warmth Those Who Are More In Need!
        </Title>
        <Text
          style={{ color: "whitesmoke", marginTop: "0", marginBottom: "16px" }}
          className="text-xl block"
        >
          Join us in supporting those in need with winter essentials.
        </Text>
        <Link to="/winter-clothes">
          <Button type="primary" size="large" danger>
            Donate Now
          </Button>
        </Link>
      </Typography>
    </div>
  );
};

export default Banner;
