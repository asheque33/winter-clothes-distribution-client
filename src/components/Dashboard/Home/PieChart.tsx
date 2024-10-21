/* eslint-disable @typescript-eslint/no-explicit-any */
import { useGetWinterClothesQuery } from "@/redux/features/winterClothes/winterClothesApi";
import Chart from "react-google-charts";

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
  // Configuration options for Google Pie Chart
  const options = {
    title: "Supplies Calculations",
    pieSliceText: "label",
    // pieHole: 0.4,

    slices: {
      0: { offset: 0.1 },
    },
    legend: { position: "bottom" },
    pieStartAngle: 135,
    is3D: true,
  };
  return (
    <Chart
      chartType="PieChart"
      data={chartData}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
};

export default PieChart;
