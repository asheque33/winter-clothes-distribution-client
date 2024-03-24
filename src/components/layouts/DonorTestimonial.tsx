import { Card } from "antd";
import { BiSolidQuoteRight } from "react-icons/bi";
import Slider from "react-slick";

const testimonials = [
  {
    name: "John Doe",
    content: "I'm happy to contribute to such a noble cause!",
  },
  {
    name: "Jane Smith",
    content: "It's heartwarming to see the impact of our donations.",
  },
  {
    name: "Michael Johnson",
    content:
      "Contributing to the winter clothes initiative has been fulfilling.",
  },
  {
    name: "Emily Davis",
    content: "The joy of giving back to the community is unparalleled.",
  },
  {
    name: "Chris Anderson",
    content: "I am proud to be a part of this wonderful effort.",
  },
  {
    name: "Sarah Brown",
    content: "Seeing the smiles on people's faces makes it all worth it.",
  },
];
const DonorTestimonial = () => {
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
        {testimonials.map((item, index) => (
          <Card
            key={index}
            className="bg-cyan-500 text-white w-[300px] h-[200px]"
          >
            <BiSolidQuoteRight className="text-3xl mx-auto " />
            <h3 className="text-center text-xl font-bold mt-6">
              {item.content}
            </h3>
            <p className="text-center text-lg font-semibold mt-2">
              "{item.name}"
            </p>
          </Card>
        ))}
      </Slider>
    </div>
  );
};

export default DonorTestimonial;
