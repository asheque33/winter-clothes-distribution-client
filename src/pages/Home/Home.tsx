import Banner from "@/components/Banner";
import ColdWeatherTips from "@/components/ColdWeatherTips";
import FAQComponent from "@/components/FAQComponent";
import SuccessStories from "@/components/SuccessStories";
import WinterClothesCard from "@/components/WinterClothesCard";
import WinterClothesGallery from "@/components/WinterClothesGallery";
import CustomFooter from "@/components/layouts/CustomFooter";
import CustomHeader from "@/components/layouts/CustomHeader";
import DonorTestimonial from "@/components/layouts/DonorTestimonial";

const Home = () => {
  return (
    <div className="max-w-[1450px] mx-auto">
      <CustomHeader />
      <Banner />
      <WinterClothesCard />
      <DonorTestimonial />
      <WinterClothesGallery />
      <SuccessStories />
      <ColdWeatherTips />
      <FAQComponent />
      <CustomFooter />
    </div>
  );
};

export default Home;
