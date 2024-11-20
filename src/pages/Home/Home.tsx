import Container from "@/components/layouts/Shared/Container";
import Banner from "@/components/Home/Banner/Banner";
import FAQComponent from "@/components/Home/FAQ/FAQComponent";
import SuccessStories from "@/components/Home/SuccessStory/SuccessStories";
import WinterClothesGallery from "@/components/Home/ClothGallery/WinterClothesGallery";
import DonorTestimonial from "@/components/Home/Testimonial/DonorTestimonial";
import WinterClothesPost from "@/components/Home/ClothCard/WinterClothesPost";
import UpcomingEvents from "@/components/Home/UpcomingEvents/UpcomingEvents";
import HowItWorks from "@/components/Home/HowItWorks/HowItWorks";

const Home = () => {
  return (
    <Container>
      <Banner />
      <WinterClothesPost />
      <DonorTestimonial />
      <WinterClothesGallery />
      <SuccessStories />
      <HowItWorks />
      <UpcomingEvents />
      <FAQComponent />
    </Container>
  );
};

export default Home;
