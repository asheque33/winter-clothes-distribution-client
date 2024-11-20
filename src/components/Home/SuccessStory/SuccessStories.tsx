import { useContext, useEffect } from "react";
import { Card, Typography } from "antd";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
const { Title, Paragraph, Text } = Typography;
const { Meta } = Card;

const SuccessStories = () => {
  const { theme } = useContext(ThemeContext);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });
  const variants = {
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 3, delayChildren: 1 },
    },
    hidden: { opacity: 0, scale: 0.5 },
  };
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="h-full  my-16 " ref={ref}>
      <Typography className="text-center mb-10">
        <Title style={{ marginBottom: "0" }} level={2}>
          <span className="text-[#FF4C4E]">Success</span> Stories
        </Title>
        <Paragraph style={{ marginTop: "0" }}>
          <Text italic className="text-lg text-slate-400">
            Warming Hearts This Winter – Stories of Generosity and Care from Our
            Beneficiaries.
          </Text>
        </Paragraph>
      </Typography>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="success-stories-container  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 "
      >
        <Card
          className="shadow-lg  aspect-[4/3]"
          hoverable
          cover={
            <img
              alt="image1"
              src="https://i.ibb.co/vdy6k6c/410649619-662314172766516-7174971664576679563-n.jpg"
              className="w-[400px] h-[300px] rounded-md object-cover "
            />
          }
        >
          <Meta
            title={
              <>
                <h3 className="font-semibold mt-3 text-center">
                  <span className="text-[#FF4C4E]">Kabir's</span> Story
                </h3>
              </>
            }
            description={
              <>
                <p
                  style={{ color: theme === "light" ? "#8c8c8c" : "#fff" }}
                  className="font-medium "
                >
                  Receiving warm winter clothes from this program has made a
                  significant difference in my life. I no longer have to worry
                  about braving the cold without proper clothing.
                </p>
              </>
            }
          />
        </Card>
        <Card
          className="shadow-lg  aspect-[4/3]"
          hoverable
          cover={
            <img
              alt="image2"
              src="https://i.ibb.co/1Rv3bmx/420567746-681880620809871-8470989243286092346-n.jpg"
              className="w-[400px] h-[300px] rounded-md object-cover "
            />
          }
        >
          <Meta
            title={
              <>
                <h3 className="font-semibold mt-3 text-center">
                  <span className="text-[#FF4C4E]">Masud's</span> Story
                </h3>
              </>
            }
            description={
              <>
                <p
                  style={{ color: theme === "light" ? "#8c8c8c" : "#fff" }}
                  className="font-medium "
                >
                  The winter clothes I received from this program have been a
                  lifesaver during the harsh winter months. I can't thank you
                  enough for your generosity and support.
                </p>
              </>
            }
          />
        </Card>
        <Card
          className="shadow-lg  aspect-[4/3]"
          hoverable
          cover={
            <img
              alt="image3"
              src="https://i.ibb.co/jgmv4Td/418180659-676062594725007-5189345305091564716-n.jpg"
              className="w-[400px] h-[300px] rounded-md object-cover "
            />
          }
        >
          <Meta
            title={
              <>
                <h3 className="font-semibold mt-3 text-center">
                  Physically{" "}
                  <span className="text-[#FF4C4E]">Handicapped people's</span>{" "}
                  Stories
                </h3>
              </>
            }
            description={
              <>
                <p
                  style={{ color: theme === "light" ? "#8c8c8c" : "#fff" }}
                  className="font-medium "
                >
                  The winter clothes We received from this program have been a
                  lifesaver during the harsh winter months. We can't thank you
                  enough for your generosity and support.
                </p>
              </>
            }
          />
        </Card>
      </motion.div>
    </div>
  );
};

export default SuccessStories;
/*
<Row
        gutter={[
          { xs: 8, md: 16, lg: 24 },
          { xs: 8, md: 16, lg: 24 },
        ]}
      >
        {displayClothes?.map((item: TWinterClothProps) => (
          <Col key={item._id} xs={24} sm={12} md={12} lg={8}>
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
                  <div className="mb-3">
                    <p>Category: {item.category}</p>
                    <p>Size: {item.size}</p>
                  </div>
                }
              />

              <Link href={`/winter-clothes/${item._id}`}>
                <Button
                  block
                  type="primary"
                  size="middle"
                  danger
                  // className="bg-[#3C3D37] text-[#ECDFCC]  "
                >
                  View Details
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
*/
