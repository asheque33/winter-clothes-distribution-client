import { useGetVolunteersQuery } from "@/redux/features/volunteer/volunteerApi";
import { TVolunteerProps } from "@/types";
import { Card, List } from "antd";

const VolunteersList = () => {
  const { data, isLoading } = useGetVolunteersQuery(undefined);
  const volunteers = data?.data;
  if (isLoading) return "Loading...";

  return (
    <List
      grid={{
        gutter: 16,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 3,
      }}
      dataSource={volunteers}
      renderItem={(volunteer: TVolunteerProps) => (
        <List.Item>
          <Card className="rounded-xl bg-orange-400 ms-2">
            <h5 className="text-xl font-semibold">Email: {volunteer.email}</h5>
            <h6 className="text-lg font-medium">
              Phone: {volunteer.phoneNumber}
            </h6>
            <h6 className="text-lg font-medium">
              Location: {volunteer.location}
            </h6>
          </Card>
        </List.Item>
      )}
    />
  );
};

export default VolunteersList;
