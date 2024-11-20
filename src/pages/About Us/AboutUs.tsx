import aboutUsImg from "@/assets/banner/about-us1.png";
import aboutUsImg2 from "@/assets/banner/about-us2.png";
import VolunteersList from "./VolunteersList";
import { Image, Space, Typography } from "antd";
import Container from "@/components/layouts/Shared/Container";
const { Title, Text, Paragraph } = Typography;

const AboutUs = () => {
  return (
    <section>
      <div
        id="about-us-1st"
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
          <Text className="text-center">
            <span className="text-white text-lg sm:mx-auto mx-0">
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
          className=" flex flex-col-reverse md:flex-row items-stretch justify-around gap-4 lg:gap-6 my-6"
        >
          {/* Image Container */}
          <div className="w-full sm:w-4/5 md:w-3/5 mx-auto md:mx-0 h-full  md:h-[450px] ">
            <div className="w-full h-full  overflow-hidden">
              <Image
                alt="image2"
                src={aboutUsImg2}
                className="w-full h-full  rounded-md object-cover"
                preview={false}
              />
            </div>
          </div>

          {/* Text Container */}
          <div className="w-full sm:w-4/5 md:w-2/5 mx-auto md:mx-0 h-full md:h-full lg:h-[500px] md:my-auto lg:my-0  flex flex-col justify-center">
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
          <Typography className="text-center">
            <Title style={{ marginBottom: "0" }} level={2}>
              <span className="text-[#FF4C4E]">Our</span> Volunteers
            </Title>
            <Paragraph style={{ marginTop: "0" }}>
              <Text italic className="text-lg text-slate-400">
                Warming Hearts This Winter – Introduction To Our real heroes.
              </Text>
            </Paragraph>
          </Typography>

          <div>
            <VolunteersList />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
