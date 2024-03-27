import { useGetTestimonialsQuery } from "@/redux/features/testimonial/testimonialApi";
import { TTestimonialProps } from "@/types";
import { Card } from "antd";
import { BiSolidQuoteRight } from "react-icons/bi";
import Slider from "react-slick";

const DonorTestimonial = () => {
  const { data, isLoading } = useGetTestimonialsQuery(undefined);
  const testimonials = data?.data;
  console.log("testimonials", testimonials);
  if (isLoading) return <p>Loading...</p>;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container my-8">
      <h2 className="font-bold text-5xl mb-8 text-center">
        Top 6 Donor Testimonials
      </h2>
      <Slider {...settings}>
        {testimonials.map((item: TTestimonialProps, index: string) => (
          <Card
            key={index}
            className="bg-cyan-500 text-white w-[300px] h-[200px]"
          >
            <BiSolidQuoteRight className="text-3xl mx-auto " />
            <h3 className="text-center text-2xl font-bold mt-4">
              {item.testimonial}
            </h3>
            <p className="text-center text-lg font-medium mt-2">
              "{item.name}"
            </p>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default DonorTestimonial;
