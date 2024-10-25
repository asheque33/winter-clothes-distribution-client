import Banner from "@/components/Home/Banner/Banner";
import FAQComponent from "@/components/Home/FAQ/FAQComponent";
import SuccessStories from "@/components/Home/SuccessStory/SuccessStories";
import WinterClothesGallery from "@/components/Home/ClothGallery/WinterClothesGallery";
import DonorTestimonial from "@/components/Home/Testimonial/DonorTestimonial";
import Container from "@/components/layouts/Shared/Container";
import WinterClothesPost from "@/components/Home/ClothCard/WinterClothesPost";
const Home = () => {
  return (
    <Container>
      <Banner />
      <WinterClothesPost />
      <DonorTestimonial />
      <WinterClothesGallery />
      <SuccessStories />
      {/* <ColdWeatherTips /> */}
      <FAQComponent />
    </Container>
  );
};

export default Home;
