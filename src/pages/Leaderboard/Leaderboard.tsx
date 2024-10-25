import Container from "@/components/layouts/Shared/Container";
import { useGetDonorsQuery } from "@/redux/features/donations/donorsApi";
import { TDonationProps } from "@/types";
import { Table, Avatar, Typography, TableColumnsType } from "antd";
const { Title } = Typography;
const LeaderBoard = () => {
  const { data: donations, isFetching } = useGetDonorsQuery(undefined);
  const data = donations?.data?.map((item: TDonationProps) => {
    return {
      name: item.name,
      image: <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />,
      donationAmount: item.amount,
    };
  });
  const sortedDonors = data
    ?.sort(
      (a: { donationAmount: number }, b: { donationAmount: number }) =>
        b.donationAmount - a.donationAmount
    )
    ?.map((sortedItems: TDonationProps, index: number) => ({
      ...sortedItems,
      _id: index + 1,
    }));
  const columns: TableColumnsType<TDonationProps> = [
    {
      title: "Serial",
      dataIndex: "_id",
      key: "_id",
      width: "20%",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      width: "25%",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "25%",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
    {
      title: "Donation Amount",
      dataIndex: "donationAmount",
      key: "donationAmount",
      width: "30%",
      responsive: ["xs", "sm", "md", "lg", "xl"],
    },
  ];
  return (
    <Container>
      <Typography className="my-6 text-center">
        <Title level={4}>
          {" "}
          <span className="text-[#FF4C4E]">Donors</span> LeaderBoard
        </Title>
      </Typography>
      <div className="my-4 overflow-x-auto border border-[#ff4c4e] rounded-xl">
        <Table<TDonationProps>
          className="  w-full"
          loading={isFetching}
          columns={columns}
          dataSource={sortedDonors}
          size="large"
          rowKey={(record) => record._id}
          scroll={{ x: 500 }}
        />
      </div>
    </Container>
  );
};

export default LeaderBoard;
