/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { theme, Typography } from "antd";
import { useContext } from "react";
const { Title, Text, Paragraph } = Typography;
const { useToken } = theme;
const StatCard = () => {
  const { token } = useToken();
  const { theme } = useContext(ThemeContext);
  const statCardsData = [
    {
      title: "Total Donation",
      amount: "$1,430,240.25",
      percentage: "3.7",
      increase: true,
      description: "From last month",
    },
    {
      title: "Avg Donation",
      amount: "$341.28",
      percentage: "1.04",
      increase: true,
      description: "From last month",
    },
    {
      title: "Total Revenue",
      amount: "$500,260.25",
      percentage: "2.25",
      increase: true,
      description: "From last month",
    },
    {
      title: "Total Visitors",
      amount: "400.000",
      percentage: "2.25",
      increase: false,
      description: "From last month",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-6">
        {statCardsData.map((card: any, index: number) => (
          <div
            key={index}
            style={{
              backgroundColor:
                theme === "dark" ? token.colorBgSolid : token.colorBgBase,
            }}
            className="p-4 shadow-sm rounded-lg"
          >
            <Typography className="text-center">
              <Text style={{ marginBottom: 8 }}>{card.title}</Text>
              <Title
                style={{ fontWeight: "bolder", marginTop: 4, marginBottom: 0 }}
                level={3}
              >
                {card.amount}
              </Title>
              <Paragraph
                strong
                style={{ margin: 0 }}
                className={`${
                  card.increase ? "text-green-500" : "text-red-400"
                }`}
              >
                {card.increase ? `+${card.percentage}` : `-${card.percentage}`}%
              </Paragraph>
              <Paragraph style={{ margin: 0 }}>
                <span className="text-slate-400 tracking-wide">
                  {card.description}
                </span>
              </Paragraph>
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatCard;
