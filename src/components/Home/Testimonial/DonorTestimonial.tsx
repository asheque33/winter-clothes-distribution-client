import { useGetTestimonialsQuery } from "@/redux/features/testimonial/testimonialApi";
import { TTestimonialProps } from "@/types";
import { Card, Image, Rate, Typography } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { useContext } from "react";
const { Title, Text, Paragraph } = Typography;

const DonorTestimonial = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useGetTestimonialsQuery(undefined);
  const testimonials = data?.data;
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const formattedTestimonials = testimonials?.map(
    (item: TTestimonialProps) => ({
      _id: item._id,
      name: item.name,
      image: item.image,
      testimonial: item.testimonial,
      ratings: item.ratings,
      occupation: item.occupation,
    })
  );

  return (
    <section className="w-full h-full my-16 shadow-md shadow-slate-200">
      <Typography className="text-center mb-10">
        <Title style={{ marginBottom: "0" }} level={2}>
          <span className="text-[#FF4C4E]">Top</span> Donors
        </Title>
        <Paragraph style={{ marginTop: "0" }}>
          <Text italic className="text-lg text-slate-400">
            Warming Hearts This Winter – Stories of Generosity and Care from Our
            Top Donors.
          </Text>
        </Paragraph>
      </Typography>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        effect={"fade"}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        // Responsive breakpoints
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1536: {
            slidesPerView: 2,
            spaceBetween: 60,
          },
        }}
      >
        {formattedTestimonials
          ?.slice(0, 6)
          .map((item: TTestimonialProps, index: number) => (
            <SwiperSlide key={index}>
              <Card
                style={{
                  // backgroundColor: theme === "light" ? "#fed7d6" : "#313131",
                  backgroundColor: theme === "light" ? "#d9d9d9" : "#313131",
                }}
                className=" z-10"
              >
                <div className="flex flex-row-reverse items-center justify-between">
                  {/* <BiSolidQuoteRight className="text-3xl  " /> */}
                  <Typography className="flex-grow text-center">
                    <Title
                      level={4}
                      style={{ marginBottom: "0px" }}
                      className="text-lg "
                    >
                      {item.name}
                    </Title>
                    <Text style={{ marginTop: "0px" }} className="text-sm">
                      <p>{item.occupation}</p>
                    </Text>
                  </Typography>
                  <Image
                    src={item.image}
                    width={80}
                    height={80}
                    alt="image"
                    style={{ objectFit: "cover" }}
                    className="rounded-full "
                    preview={false}
                    // className="w-full bg-center  bg-cover bg-opacity-60 rounded-full    border-spacing-0.5  "
                  />
                </div>
                <div>
                  <Rate
                    style={{
                      color: theme === "light" ? "#56371A" : "#F86D45",
                      margin: "8px 0",
                    }}
                    disabled
                    value={item.ratings}
                  />
                </div>

                <Text className="text-lg font-medium">
                  <p>
                    {item.testimonial} I can't thank you enough for your
                    generosity and support.
                  </p>
                </Text>
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default DonorTestimonial;

/*
 <Swiper
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
      </Swiper>
*/
