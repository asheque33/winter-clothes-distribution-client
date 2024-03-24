import React from "react";
import { Layout, Card } from "antd";
import { Pie } from "@ant-design/charts";
import { useGetWinterClothesQuery } from "@/redux/features/winterClothes/winterClothesApi";

const { Content } = Layout;

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

  const categoryCounts = countItemsInCategories(data?.data || []);
  const data1 = Object.entries(categoryCounts).map(([category, count]) => ({
    type: category,
    value: count,
  }));

  const config = {
    appendPadding: 10,
    data: data1,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {
      type: "outer",
      content: "{name} {percentage}",
    },
    interactions: [{ type: "element-active" }],
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
            title="Supplies Calculations"
            style={{
              width: 1200,
              height: 800,
              textAlign: "center",
              fontSize: 1000,
              fontWeight: "bolder",
            }}
          >
            <Pie {...config} />
          </Card>
        </div>
      </Content>
    </Layout>
  );
};

export default Dashboard;
