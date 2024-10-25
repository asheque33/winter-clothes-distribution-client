import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { TDonationProps } from "@/types";
import { theme } from "antd";
import { useContext } from "react";

import Chart from "react-google-charts";
const { useToken } = theme;
const ColumnChart = ({ donors }: { donors: TDonationProps[] }) => {
  const { token } = useToken();
  const { theme } = useContext(ThemeContext);
  // Customize color based on theme mode
  const textColor = theme === "dark" ? "#ffffff" : "#313131";
  const bgColor = theme === "dark" ? token.colorBgSolid : token.colorBgBase;

  const options = {
    title: "Donation Calculation",
    fontSize: 14,
    titleTextStyle: {
      color: textColor, // Change title color based on theme
      fontSize: 18, // Adjust title font size if needed
    },
    backgroundColor: bgColor,
    hAxis: {
      textStyle: {
        color: textColor, // Apply color to the horizontal axis labels (donor names)
      },
    },
    vAxis: {
      textStyle: {
        color: textColor, // Apply color to the vertical axis labels (donation amounts)
      },
    },
    legend: {
      textStyle: {
        color: textColor,
      },
    },
    colors: ["#f86d45"], //legend symbol color
  };
  const data: (string | number | { role: string })[][] = [
    // ["Elements", "Donation Chart", { role: "style" }],
    ["Donor", "Amount", { role: "style" }],
  ];
  if (donors.length > 0) {
    donors.forEach((donor: TDonationProps) => {
      data.push([donor.name, donor.amount, "color: #f86d45"]);
    });
  }
  return (
    <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height={"400px"}
        options={options}
        data={data}
      />
    </div>
  );
};

export default ColumnChart;
