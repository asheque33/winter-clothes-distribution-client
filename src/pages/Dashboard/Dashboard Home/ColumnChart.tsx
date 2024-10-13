import { TDonationProps } from "@/types";

import Chart from "react-google-charts";

const ColumnChart = ({ donors }: { donors: TDonationProps[] }) => {
  const data: (string | number | { role: string })[][] = [
    ["Elements", "Donation Chart", { role: "style" }],
  ];
  if (donors.length > 0) {
    donors.forEach((donor: TDonationProps) => {
      data.push([donor.name, donor.amount, "color: #b87333"]);
    });
  }
  return (
    <div>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height={"400px"}
        data={data}
      />
    </div>
  );
};

export default ColumnChart;
