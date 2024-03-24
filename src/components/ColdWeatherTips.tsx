import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

const ColdWeatherTips = () => {
  return (
    <div className="cold-weather-tips">
      <h2 className="text-center font-bold text-5xl mb-5">
        Cold Weather Safety Tips
      </h2>
      <Card>
        <Title level={4}>1. Dress in Layers</Title>
        <Paragraph>
          Layering your clothing helps trap heat and keeps you warm. Start with
          a moisture-wicking base layer, add an insulating layer, and finish
          with a waterproof and windproof outer layer.
        </Paragraph>
      </Card>
      <Card>
        <Title level={4}>2. Protect Your Extremities</Title>
        <Paragraph>
          Don't forget to wear gloves or mittens, a hat, and warm socks to
          protect your hands, head, and feet from frostbite.
        </Paragraph>
      </Card>
      <Card>
        <Title level={4}>3. Stay Hydrated and Eat Warm Foods</Title>
        <Paragraph>
          Drink plenty of fluids and eat warm, high-energy foods to help your
          body maintain its core temperature.
        </Paragraph>
      </Card>
      <Card>
        <Title level={4}>4. Know the Signs of Hypothermia and Frostbite</Title>
        <Paragraph>
          Learn the symptoms of hypothermia and frostbite and seek medical
          attention if you or someone else shows signs of these conditions.
        </Paragraph>
      </Card>
      {/* Add more tips as needed */}
    </div>
  );
};

export default ColdWeatherTips;
