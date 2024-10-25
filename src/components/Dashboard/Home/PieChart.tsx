/* eslint-disable @typescript-eslint/no-explicit-any */
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { useGetWinterClothesQuery } from "@/redux/features/winterClothes/winterClothesApi";
import { theme } from "antd";
import { useContext } from "react";
import Chart from "react-google-charts";

const { useToken } = theme;
// Function to count items in categories
const countItemsInCategories = (items: any[]) => {
  const counts: { [key: string]: number } = {};
  items.forEach((item) => {
    if (counts[item.category]) {
      counts[item.category]++;
    } else {
      counts[item.category] = 1;
    }
  });
  return counts;
};
const PieChart = () => {
  const { token } = useToken();
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useGetWinterClothesQuery(undefined);

  // Get category counts
  const categoryCounts = countItemsInCategories(data?.data || []);
  if (isLoading) {
    return <p>Loading...........</p>;
  }
  // Format data for Google Charts
  const chartData = [
    ["Category", "Count"], // Column headers for Google Charts
    ...Object.entries(categoryCounts).map(([category, count]) => [
      category,
      count,
    ]),
  ];
  // Customize color based on theme mode
  const textColor = theme === "dark" ? token.colorText : token.colorText;
  const bgColor = theme === "dark" ? token.colorBgSolid : token.colorBgBase;
  // Configuration options for Google Pie Chart
  const options = {
    title: "Supplies Calculations",
    pieSliceText: "label",
    fontSize: 14,
    padding: 0,
    titleTextStyle: {
      color: textColor, // Change title color based on theme
      fontSize: 18, // Adjust title font size if needed
    },
    // pieHole: 0.4,

    slices: {
      0: { offset: 0.1 },
    },
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        fontSize: 14,
        color: textColor,
      },
    },
    pieStartAngle: 135,
    is3D: true,
  };
  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={{
        ...options,
        backgroundColor: bgColor,
      }}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default PieChart;
