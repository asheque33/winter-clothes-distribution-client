import { Button, Image, Progress, theme, Typography } from "antd";
import locationIconDark from "@/assets/events/location-dark-mode.png";
import locationIconLight from "@/assets/events/location-light-mode.png";
import timeStampsIconDark from "@/assets/events/timestamp-dark-mode.png";
import timeStampsIconLight from "@/assets/events/timestamp-light-mode.png";
import { useContext, useState } from "react";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
const { Title, Paragraph, Text } = Typography;
const { useToken } = theme;
export interface IEvents {
  title: string;
  description: string;
  location: string;
  date: string;
}
const UpcomingEvents = () => {
  const events = [
    {
      date: "21st March, 2025",
      title: "Medicine Distribution Campaign Bringing Care to Those in Need.",
      description:
        "Join us to kick off our annual winter clothing drive! Help us sort, pack, and distribute warm clothes to those in need.",
      location: "Community Center, Main Hall",
    },
    {
      date: "26th April, 2024",
      title: "Join Hands to Fight Hunger A Meal at a Time, Step at a Time.",
      description:
        "Come volunteer and help us sort through donations to ensure every item is ready to be distributed.",
      location: "Warehouse 12, Downtown Area",
    },
    {
      date: "03rd May, 2025",
      title: "Sports Events For Funding Charity For Innocent People.",
      description:
        "Be a part of our main event where we distribute clothes to families and individuals. Volunteers needed for setup and assistance.",
      location: "324 City Park, Pavilion End",
    },
    {
      date: "08th July, 2025",
      title:
        "Emergency Assistance for Erosion Victims Help Makes a Difference.",
      description:
        "Be a part of our main event where we distribute clothes to families and individuals. Volunteers needed for setup and assistance.",
      location: "121 King Street, Banner Park",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useContext(ThemeContext);
  const { token } = useToken();
  return (
    <div className="my-16">
      <Typography className="text-center mb-10">
        <Title style={{ marginBottom: "0" }} level={2}>
          <span className="text-[#FF4C4E]">Upcoming</span> Events
        </Title>
        <Paragraph style={{ marginTop: "0" }}>
          <Text italic className="text-lg text-slate-400">
            Warming Hearts This Winter – Events Which We plan to Proceed
            Successfully.
          </Text>
        </Paragraph>
      </Typography>
      <div className="w-full h-full flex flex-col gap-10 lg:flex-row">
        <div className="w-full lg:w-1/2 ">
          <Image
            height={670}
            src="https://i.ibb.co.com/4Kjj2Kd/even-profile2.png"
            className="object-cover w-full h-full rounded-md  "
            alt="EventProfile"
            preview={false}
          />
        </div>
        <div className="w-full lg:w-1/2 h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1  gap-8 lg:gap-4">
          {events.slice(0, 2).map((_event: IEvents, index: number) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <section className="flex justify-between ">
                <Typography>
                  <Title
                    level={3}
                    className="border-2 border-gray-400 rounded-xl py-8 px-4 text-center"
                    style={{ marginBottom: "0px" }}
                  >
                    {_event.date.split(" ")[0]}
                  </Title>
                  <Title
                    level={3}
                    style={{ marginTop: "0px", color: "#ff5722" }}
                  >
                    {_event.date.split(" ")[1].split(",")}
                  </Title>
                </Typography>
                <div className="flex-grow text-center mt-4">
                  <Text strong className="text-[#ff5722]">
                    Organized By :
                  </Text>
                  <br />
                  <Title level={4}>Care Foundation</Title>
                </div>
              </section>
              <Title level={4}>{_event.title}</Title>

              <Progress
                type="line"
                percent={hoveredIndex === index ? 100 : 10}
                strokeColor="#ff5722"
                size={"small"}
                showInfo={false}
                style={{ margin: "20px 0px" }}
              />
              <Text>
                <Image
                  width={15}
                  height={15}
                  src={
                    theme === "dark" ? timeStampsIconDark : timeStampsIconLight
                  }
                  alt="timeL"
                />
                <span>{` Starts: 5:00 PM `}</span>
              </Text>
              <Text>
                <Image
                  width={15}
                  height={15}
                  src={theme === "dark" ? locationIconDark : locationIconLight}
                  alt="locationL"
                />
                <span>{_event.location}</span>
              </Text>
              <div className="flex justify-center gap-6 my-4">
                <Button
                  href="/winter-clothes"
                  style={{
                    backgroundColor:
                      theme === "dark" ? token.colorPrimary : token.colorText,
                    color:
                      theme === "light" ? token.colorTextSecondary : "#fff",
                  }}
                  size="large"
                  color="default"
                  variant="solid"
                >
                  Donate Now
                </Button>
                <Button
                  href="/volunteer"
                  style={{
                    backgroundColor:
                      theme === "dark" ? token.colorPrimary : token.colorText,
                    color:
                      theme === "light" ? token.colorTextSecondary : "#fff",
                  }}
                  size="large"
                  color="default"
                  variant="solid"
                >
                  Join Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
