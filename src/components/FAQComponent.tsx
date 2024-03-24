import type { CollapseProps } from "antd";
import { Collapse, Typography } from "antd";

const { Text } = Typography;

const text1 = (
  <p className="px-8">
    WC-Project is a top-rated (4-star) charity on Charity Navigator. We are also
    accredited by the BSTI Wise Giving Alliance. We've been recommended by
    experts in thousands of articles, including these: * Completion of 2
    thousand rickshaws on behalf of Self Reliance Project-2023 * Relief
    distribution and rehabilitation activities completed among the flood
    victims.
  </p>
);
const text2 = (
  <p className="px-8">
    All donations to WC Project funds will support immediate relief and
    long-term recovery efforts in the region(s) affected by the specifically
    described disaster or crisis. Typically, money is first sent to help meet
    the most urgent and immediate needs, including the provision of shelter,
    medical care, food, and clean water. Once initial relief work is complete,
    money from a fund will be allocated by WC-Project for longer-term recovery
    efforts—largely led by local representative.
  </p>
);
const text3 = (
  <p className="px-8">
    WC-Project is made up of large and small nonprofits from 64 districts. When
    disasters and crises strike, we are committed to connecting donors to vetted
    organizations responding to needs in the impacted communities from the
    initial emergency relief phase through the mid- and longer-term recovery. We
    often support international or regional first responders in the initial
    stages of relief. However, we believe local, community-led organizations are
    best positioned to assess and respond to needs in the medium- and long-term.
    We listen carefully to what these local leaders deem most critical. Our view
    is that community-led organizations possess critical knowledge about their
    communities and can nimbly and effectively navigate unique dynamics in their
    region. Getting funds to them benefits communities directly, quickly, and
    with longer-term impact.
  </p>
);

const items: CollapseProps["items"] = [
  {
    key: "1",
    label: (
      <Text strong>How do I know I can trust my donation to WC-Project?</Text>
    ),
    children: text1,
  },
  {
    key: "2",
    label: <Text strong>Where does the money donated to your funds go?</Text>,
    children: text2,
  },
  {
    key: "3",
    label: (
      <Text strong>
        What makes GlobalGiving different from other nonprofits?
      </Text>
    ),
    children: text3,
  },
];

const FAQComponent = () => {
  return (
    <div className="my-8">
      <h2 className="font-bold bg-white py-6 text-5xl mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <Collapse
        size="large"
        items={items}
        bordered={false}
        defaultActiveKey={["1"]}
      />
    </div>
  );
};

export default FAQComponent;
