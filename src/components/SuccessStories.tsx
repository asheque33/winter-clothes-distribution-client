import { useEffect } from "react";
import { Card, Avatar } from "antd";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const { Meta } = Card;

const SuccessStories = () => {
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
    <div className="my-8" ref={ref}>
      <h2 className="font-bold text-5xl mb-8 text-center">Success Stories</h2>
      <motion.div
        initial="hidden"
        animate={controls}
        variants={variants}
        className="success-stories-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        <Card
          className="success-story-card"
          style={{ width: "400px", height: "450px" }}
        >
          <Meta
            avatar={
              <Avatar
                size={250}
                shape="square"
                src="https://i.ibb.co/vdy6k6c/410649619-662314172766516-7174971664576679563-n.jpg"
              />
            }
          />
          <h3 className="font-semibold mt-3">Kabir's Story</h3>
          <p className="font-medium">
            Receiving warm winter clothes from this program has made a
            significant difference in my life. I no longer have to worry about
            braving the cold without proper clothing. Thank you for your
            generosity.
          </p>
        </Card>
        <Card
          className="success-story-card"
          style={{ width: "400px", height: "450px" }}
        >
          <Meta
            avatar={
              <Avatar
                size={250}
                shape="square"
                src="https://i.ibb.co/1Rv3bmx/420567746-681880620809871-8470989243286092346-n.jpg"
              />
            }
          />
          <h3 className="font-semibold mt-3">Ammar's Story</h3>
          <p className="font-medium">
            The winter clothes I received from this program have been a
            lifesaver during the harsh winter months. I can't thank you enough
            for your generosity and support.
          </p>
        </Card>
        <Card
          className="success-story-card"
          style={{ width: "400px", height: "450px" }}
        >
          <Meta
            avatar={
              <Avatar
                size={250}
                shape="square"
                src="https://i.ibb.co/jgmv4Td/418180659-676062594725007-5189345305091564716-n.jpg"
              />
            }
          />
          <h3 className="font-semibold mt-3">
            Physically Handicapped people's Stories
          </h3>
          <p className="font-medium">
            The winter clothes We received from this program have been a
            lifesaver during the harsh winter months. We can't thank you enough
            for your generosity and support.
          </p>
        </Card>
      </motion.div>
    </div>
  );
};

export default SuccessStories;
