import { Layout, Card } from "antd";
import { Chart } from "react-google-charts";
import { useGetWinterClothesQuery } from "@/redux/features/winterClothes/winterClothesApi";

const { Content } = Layout;

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

const Dashboard: React.FC = () => {
  const { data, isLoading } = useGetWinterClothesQuery(undefined);
  console.log("inside dashboard", data);

  if (isLoading) {
    return <p>Loading...........</p>;
  }

  // Get category counts
  const categoryCounts = countItemsInCategories(data?.data || []);

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
    slices: {
      0: { offset: 0.1 },
    },
    legend: { position: "bottom" },
    pieStartAngle: 135,
    is3D: true,
  };

  return (
    <Layout>
      <Content
        style={{
          padding: "30px 50px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "screen",
          height: "100vh",
        }}
      >
        <div className="mx-auto">
          <Card
            title="Supply Statistics"
            style={{
              width: 1200,
              height: 800,
              textAlign: "center",
              fontSize: 1000,
              fontWeight: "bolder",
            }}
          >
            <Chart
              chartType="PieChart"
              data={chartData}
              options={options}
              width={"100%"}
              height={"400px"}
            />
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;
