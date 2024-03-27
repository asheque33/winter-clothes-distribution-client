import Banner from "@/components/Banner";
import VolunteersList from "./VolunteersList";

const AboutUs = () => {
  return (
    <div>
      <h2 className="font-bold  text-5xl text-orange-500  mt-8 text-center">
        About Us
      </h2>
      <div className="border-b-2 shadow-slate-400 border-orange-400 w-[220px] mb-6 mx-auto"></div>
      <div>
        <Banner />
      </div>
      <div>
        <h2 className="font-bold text-5xl text-orange-500 mt-8 text-center">
          Our Volunteers
        </h2>
        <div className="border-b-2 shadow-slate-400 border-orange-400 w-[350px] mb-6 mx-auto"></div>

        <div>
          <VolunteersList />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
