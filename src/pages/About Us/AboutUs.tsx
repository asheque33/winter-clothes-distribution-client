import aboutUsImg from "@/assets/banner/about-us1.png";
import VolunteersList from "./VolunteersList";
import { Card, Image, Space, Typography } from "antd";
import Container from "@/components/layouts/Container";
const { Title, Text } = Typography;

const AboutUs = () => {
  return (
    <section>
      <div
        style={{
          position: "relative",
          backgroundImage: `url(${aboutUsImg})`,
          backgroundSize: "cover",
          objectFit: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "40vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          style={{
            zIndex: 0.5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Title className=" text-center">
            <span className="text-white">Who We Are</span>
          </Title>
          <Text className=" text-center">
            <span className="text-white text-lg">
              {" "}
              We are a non-profit organization dedicated to providing warmth and
              support to displaced refugees and their families.
            </span>
          </Text>
          <a href="#" className="text-white text-center hover:text-orange-500">
            Learn More
          </a>
        </Typography>
      </div>
      <Container>
        <div
          id="about-2nd-part"
          className="flex flex-col sm:flex-row items-stretch justify-around gap-4 md:gap-6 py-6"
        >
          {/* Image Container */}
          <div className="w-full sm:w-3/5 border-4">
            <div className="w-full h-full">
              <Image
                alt="image1"
                src="https://i.ibb.co/vdy6k6c/410649619-662314172766516-7174971664576679563-n.jpg"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="w-full sm:w-2/5 border-4 flex flex-col justify-center">
            <Typography className="w-full h-full p-6 flex flex-col justify-center">
              <Space direction="vertical">
                <Title>
                  <span>
                    Do your little{" "}
                    <span className="text-[#ff4c4e]">bit of good</span> where
                    you are
                  </span>
                </Title>
                <Text strong>
                  <span>
                    To provide warmth and support to displaced refugees and
                    their families, through the exchange of clothing and food,
                    you must provide the following information for your family
                    and child family members. Also, invite your friends and
                    acquaintances to involve themselves in such an amazing
                    platform to help the needy people who are more capable of
                    getting gifts.
                  </span>
                </Text>
              </Space>
            </Typography>
          </div>
        </div>

        <div>
          <Title className="font-bold text-5xl  mt-8 text-center">
            <span className="text-[#ff4c4e]">Our</span> Volunteers
          </Title>
          <div className="border-b-2 shadow-slate-400 border-orange-400 w-[350px] mb-6 mx-auto"></div>

          <div>
            <VolunteersList />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
