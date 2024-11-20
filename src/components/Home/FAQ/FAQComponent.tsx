import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import type { CollapseProps } from "antd";
import { Collapse, Typography } from "antd";
import React, { CSSProperties } from "react";
import "@/index.css";

const { Title, Paragraph, Text } = Typography;

const text1 = (
  <p className="px-8">
    As soon as winter approaches, the situation for many people escalates
    dangerously, especially for those who are already vulnerable due to
    displacement and poverty: they suffer from hunger and have little physical
    strength to counter the bitter cold. As part of our winter aid, WHH supplies
    families who are particularly hard hit by the frost and the current rise in
    prices for staple foods and petrol. For example, vouchers for food, warm
    clothing and fuel are distributed.
  </p>
);
const text2 = (
  <p className="px-8">
    We greatly appreciate your desire to support refugees with warm winter
    clothing or food donations. However, we ask that you refrain from making
    donations in kind for one important reason: WHH has made it a guiding
    principle to purchase relief goods, such as clothing or food, for its aid
    projects in the respective countries or regions in which we are active. This
    is not only more cost-effective but also involves the local economy and
    takes into account local traditions and cultural conditions.
  </p>
);
const text3 = (
  <p className="px-8">
    You can donate by dropping off winter clothes at our designated locations or
    arranging for a pickup if available. Alternatively, monetary donations can
    be made directly on our website to help purchase essential items.
  </p>
);
const text4 = (
  <p className="px-8">
    Care is made up of large and small nonprofits from 64 districts. When
    disasters and crises strike, we are committed to connecting donors to vetted
    We value transparency and will update you on the impact of your
    contributions through our newsletter and social media. Stories and reports
    will show how your donations make a difference in the community.
  </p>
);
const text5 = (
  <p className="px-8">
    Absolutely! We welcome volunteers of all kinds, including groups of friends,
    families, and even corporate or community groups. Volunteering as a team can
    be a fun and rewarding way to give back to the community. We offer flexible
    opportunities to accommodate groups and ensure you have a meaningful
    experience together, whether it's sorting and packing donated winter clothes
    or distributing them at our events. Please reach out to us in advance so we
    can make the necessary arrangements and discuss how your group can make the
    biggest impact.
  </p>
);
const text6 = (
  <p className="px-8">
    Care is made up of large and small nonprofits from 64 districts. When
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

const items: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: (
      <Title level={2}>
        <span className=" tracking-tight">
          Why do we increase our emergency aid measures in winter?
        </span>
      </Title>
    ),
    children: text1,
    style: { ...panelStyle },
  },
  {
    key: "2",
    label: (
      <Title level={2}>
        <span className=" tracking-tight">
          Can I donate warm clothes or food for refugees?
        </span>
      </Title>
    ),
    children: text2,
    style: { ...panelStyle },
  },
  {
    key: "3",
    label: (
      <Title level={2}>
        <span className=" tracking-tight"> How can I make Donations?</span>
      </Title>
    ),
    children: text3,
    style: { ...panelStyle },
  },
  {
    key: "4",
    label: (
      <Title level={2}>
        <span className=" tracking-tight">
          {" "}
          Can I track how my donation is used?
        </span>
      </Title>
    ),
    children: text4,
    style: { ...panelStyle },
  },
  {
    key: "5",
    label: (
      <Title level={2}>
        <span className=" tracking-tight">
          {" "}
          Can I volunteer with my friends/family/group?
        </span>
      </Title>
    ),
    children: text5,
    style: { ...panelStyle },
  },
  {
    key: "6",
    label: (
      <Title level={2}>
        <span className=" tracking-tight">
          {" "}
          What makes Care different from other nonprofits?
        </span>
      </Title>
    ),
    children: text6,
    style: { ...panelStyle },
  },
];

const FAQComponent = () => {
  const panelStyle: React.CSSProperties = {
    // marginBottom: 24,
    // fontFamily: "Core Sans WHH HEAD NR Cn",
    fontFamily: "'Fira Sans Condensed', sans-serif",

    // fontWeight: 800,
    width: "100%",
    // border: "none",
  };
  return (
    <div className="h-full my-8 w-full ">
      <Typography className="text-center">
        <Title style={{ marginBottom: "0" }} level={2}>
          <span className="text-[#ff4c4e]">Winter Cause</span> FAQ
        </Title>
        <Paragraph style={{ marginTop: "0" }}>
          <Text italic className="text-lg text-slate-400">
            Warming Hearts This Winter – Doubted Any Query In Mind?
          </Text>
        </Paragraph>
      </Typography>
      <div className="w-full">
        <Collapse
          size="large"
          accordion
          items={items(panelStyle)}
          bordered={false}
          expandIcon={({ isActive }) =>
            isActive ? (
              <MinusOutlined
                style={{
                  color: "#ff4c4e",
                  fontWeight: "bolder",
                  fontSize: "24px",
                }}
              />
            ) : (
              <div
                style={{
                  color: "#ff4c4e",

                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontWeight: 900,
                  fontSize: "24px",
                }}
              >
                <PlusOutlined
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            )
          }
          expandIconPosition="end"
        />
      </div>
    </div>
  );
};

export default FAQComponent;
