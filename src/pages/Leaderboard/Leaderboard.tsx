import { useGetDonorsQuery } from "@/redux/features/donations/donorsApi";
import { TDonationProps } from "@/types";
import { Table } from "antd";

const Leaderboard = () => {
  const { data: donations, isFetching } = useGetDonorsQuery(undefined);
  const data = donations?.data?.map((item: TDonationProps) => {
    return {
      _id: item._id,
      name: item.name,
      donationAmount: item.amount,
    };
  });
  const sortedDonors = data?.sort(
    (a: { donationAmount: number }, b: { donationAmount: number }) =>
      b.donationAmount - a.donationAmount
  );
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Donation Amount",
      dataIndex: "donationAmount",
      key: "donationAmount",
    },
  ];
  return (
    <div>
      <h2 className="font-bold text-lg md:text-3xl lg:text-5xl text-fuchsia-400 my-8 text-center">
        Donors Leaderboard
      </h2>
      <div className="my-4 mx-8 border-4 border-fuchsia-400 rounded-xl">
        <Table
          className="bg-white ps-64 w-full"
          loading={isFetching}
          columns={columns}
          dataSource={sortedDonors}
          rowKey={(record) => record._id}
        />
      </div>
    </div>
  );
};

export default Leaderboard;
