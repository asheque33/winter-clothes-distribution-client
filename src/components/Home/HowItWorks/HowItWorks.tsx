import { Image, Typography } from "antd";
import donationLightIcon from "@/assets/donation-icon-light.png";
import volunteersLightIcon from "@/assets/volunteers-icon-light.png";
import moneyBagLightIcon from "@/assets/money-bag-icon-light.png";
import donationDarkIcon from "@/assets/donation-icon-dark.png";
import volunteersDarkIcon from "@/assets/volunteers-icon-dark.png";
import moneyBagDarkIcon from "@/assets/money-bag-icon-dark.png";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { useContext } from "react";

const { Title, Paragraph, Text } = Typography;
const HowItWorks = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="my-16">
      <Typography className="text-center mb-10">
        <Title style={{ marginBottom: "0" }} level={2}>
          <span className="text-[#FF4C4E]">How It</span> Works
        </Title>
        <Paragraph style={{ marginTop: "0" }}>
          <Text italic className="text-lg text-slate-400">
            Warming Hearts This Winter – Each Donation Fuels Vital Aid and
            Innovative Programs.
          </Text>
        </Paragraph>
      </Typography>
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
        <section className="flex flex-col gap-4 text-center   rounded-xl ">
          <div className="text-center pt-4">
            <Image
              src={theme === "dark" ? donationDarkIcon : donationLightIcon}
              alt="donationIconL"
              height={50}
              width={50}
            />
          </div>
          <Typography>
            <Title level={4}>
              <span className="text-[#ff5722]">Donation</span>
            </Title>
            <p className="w-4/5 mx-auto text-zinc-500 tracking-tight">
              Your contributions provide immediate relief and sustain vital
              programs, transforming lives one generous gift at a time.
            </p>
          </Typography>
        </section>
        <section className="flex flex-col gap-4 text-center   rounded-xl ">
          <div className="text-center pt-4">
            <Image
              src={theme === "dark" ? moneyBagDarkIcon : moneyBagLightIcon}
              alt="moneyBagIconL"
              height={50}
              width={50}
            />
          </div>
          <Typography>
            <Title level={4}>
              <span className="text-[#ff5722]">Fundraising</span>
            </Title>
            <p className="w-4/5 mx-auto text-zinc-500 tracking-tight">
              We organize impactful campaigns to rally community support,
              turning compassion into action for those who need it most.
            </p>
          </Typography>
        </section>
        <section className="flex flex-col gap-4 text-center   rounded-xl ">
          <div className="text-center pt-4">
            <Image
              src={theme === "dark" ? volunteersDarkIcon : volunteersLightIcon}
              alt="volunteersIconL"
              height={50}
              width={50}
            />
          </div>
          <Typography>
            <Title level={4}>
              <span className="text-[#ff5722]">Volunteer</span>
            </Title>
            <p className="w-4/5 mx-auto text-zinc-500 tracking-tight">
              Join our passionate team of volunteers to bring meaningful change,
              whether by assisting in events or supporting those in need with
              your time and skills.
            </p>
          </Typography>
        </section>
      </div>
    </div>
  );
};

export default HowItWorks;
