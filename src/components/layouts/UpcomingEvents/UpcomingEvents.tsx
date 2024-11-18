import { Button, Image, Progress, Typography } from "antd";
import eventProfile from "@/assets/events/even-profile.png";
import locationIconDark from "@/assets/events/location-dark-mode.png";
import locationIconLight from "@/assets/events/location-light-mode.png";
import timeStampsIconDark from "@/assets/events/timestamp-dark-mode.png";
import timeStampsIconLight from "@/assets/events/timestamp-light-mode.png";
import { useContext, useState } from "react";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
const { Title, Paragraph, Text, Link } = Typography;
export interface IEvents {
  title: string;
  description: string;
  location: string;
  date: string;
}
const UpcomingEvents = () => {
  const events = [
    {
      date: "15th December, 2024",
      title: "Medicine Distribution Campaign Bringing Care to Those in Need.",
      description:
        "Join us to kick off our annual winter clothing drive! Help us sort, pack, and distribute warm clothes to those in need.",
      location: "Community Center, Main Hall",
    },
    {
      date: "5th November, 2024",
      title: "Join Hands to Fight Hunger A Meal at a Time, One Step at a Time.",
      description:
        "Come volunteer and help us sort through donations to ensure every item is ready to be distributed.",
      location: "Warehouse 12, Downtown Area",
    },
    {
      date: "1st December, 2024",
      title: "Sports Events For Funding Charity For Innocent People.",
      description:
        "Be a part of our main event where we distribute clothes to families and individuals. Volunteers needed for setup and assistance.",
      location: "City Park Pavilion",
    },
    {
      date: "22nd December, 2024",
      title:
        "Emergency Assistance for Erosion Victims Help Makes a Difference.",
      description:
        "Be a part of our main event where we distribute clothes to families and individuals. Volunteers needed for setup and assistance.",
      location: "121 King Street, Banner Park",
    },
  ];
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { theme } = useContext(ThemeContext);
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
      <div className="w-full flex">
        <div className="w-1/2">
          <Image
            src={eventProfile}
            width={650}
            height={475}
            className="object-cover aspect-[4/3] w-fit order-first"
            alt="EventProfile"
          />
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-8">
          {events.map((_event: IEvents, index: number) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <section className="flex justify-between ">
                <Typography>
                  <Title
                    level={3}
                    className="border-2 border-neutral-700 rounded-xl py-8 px-1 text-center"
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
              {/* <Text>{_event.description}</Text> */}
              <Title level={4}>{_event.title}</Title>

              <Progress
                type="line"
                percent={hoveredIndex === index ? 100 : 10}
                strokeColor="#ff5722"
                showInfo={false}
              />
              <Text>
                {theme === "dark" ? (
                  <Image
                    width={15}
                    height={15}
                    src={timeStampsIconDark}
                    alt="timeL"
                  />
                ) : (
                  <Image
                    width={15}
                    height={15}
                    src={timeStampsIconLight}
                    alt="timeL"
                  />
                )}
                <span>{` Starts: 5:00 PM `}</span>
              </Text>
              <Text>
                {theme === "dark" ? (
                  <Image
                    width={15}
                    height={15}
                    src={locationIconDark}
                    alt="locationL"
                  />
                ) : (
                  <Image
                    width={15}
                    height={15}
                    src={locationIconLight}
                    alt="locationL"
                  />
                )}
                <span>{_event.location}</span>
              </Text>
              <div className="flex justify-center gap-6 my-4">
                <Link href="/winter-clothes">
                  {" "}
                  <Link href="/volunteer">
                    <Button color="primary" variant="solid">
                      Donate Now
                    </Button>
                  </Link>
                </Link>

                <Button color="primary" variant="solid">
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
