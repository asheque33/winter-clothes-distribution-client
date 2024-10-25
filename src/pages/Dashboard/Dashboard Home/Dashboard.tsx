import { Card, Col, Row, Typography } from "antd";
import { useGetDonorsQuery } from "@/redux/features/donations/donorsApi";
import ColumnChart from "../../../components/Dashboard/Home/ColumnChart";
import StatCard from "@/components/Dashboard/Home/StatCard";
import PieChart from "@/components/Dashboard/Home/PieChart";
import Container from "@/components/layouts/Shared/Container";
const { Title } = Typography;

const Dashboard: React.FC = () => {
  const { data: donorsInfo, isLoading: isDonorLoading } =
    useGetDonorsQuery(undefined);
  const donors = donorsInfo?.data;

  if (isDonorLoading) {
    return <p>Loading...........</p>;
  }

  return (
    <Container className="my-6">
      <Typography>
        <Title style={{ textAlign: "center" }} level={3}>
          <span className="text-[#ff4c4e]">Dashboard</span> Overview
        </Title>
      </Typography>
      <StatCard />
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              fontWeight: "bolder",
              padding: 0,
            }}
            styles={{ body: { padding: 0 } }}
          >
            <PieChart />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card
            style={{
              width: "100%",
              height: "100%",
              textAlign: "center",
              fontWeight: "bolder",
              padding: 0,
            }}
            styles={{ body: { padding: 0 } }}
          >
            <ColumnChart donors={donors} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
