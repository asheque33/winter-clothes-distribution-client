import { selectedUser } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { authUserPaths } from "@/routes/dashboard.route";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { Layout, Menu } from "antd";

const { Sider } = Layout;
const Sidebar = () => {
  const user = useAppSelector(selectedUser);
  const userRole = user!.role || "user";
  return (
    <Sider
      style={{
        minHeight: `calc(100vh - 64px)`,
        height: "100%",
        position: "sticky",
        top: "0",
        left: "0",
        backgroundColor: "#f5efe6",
      }}
      theme="light"
      breakpoint="xs"
      // collapsed={true}
      // collapsedWidth="50px"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <Menu
        theme="light"
        mode="inline"
        style={{
          backgroundColor: "#f5efe6",
          color: "#3c3d37",
        }}
        items={sidebarItemsGenerator(authUserPaths, userRole)}
      ></Menu>
    </Sider>
  );
};

export default Sidebar;

/* just practice note down */
{
  /* <Menu
mode="inline"
defaultSelectedKeys={['1']}
defaultOpenKeys={['sub1']}
style={{ height: '100%', borderRight: 0 }}
>
<Menu.SubMenu key="sub1" title="Dashboard">
  <Menu.Item key="1">
    <Link to="/dashboard">Dashboard Home</Link>
  </Menu.Item>
  <Menu.Item key="2">
    <Link to="/dashboard/winter-clothes">All Winter Clothes</Link>
  </Menu.Item>
  <Menu.Item key="3">
    <Link to="/dashboard/create-winter-clothes">Create Winter Clothes Post</Link>
  </Menu.Item>
  {/* Add more dashboard related routes as needed */
}
// </Menu.SubMenu>
// <Menu.Item key="4">
//   <Link to="/leaderboard">Donors Leaderboard</Link>
// </Menu.Item>
// <Menu.Item key="5">
//   <Link to="/community">Community Gratitude Wall</Link>
// </Menu.Item>
// <Menu.Item key="6">
//   <Link to="/dashboard/create-testimonial">Interactive Testimonial</Link>
// </Menu.Item>
// <Menu.Item key="7">
//   <Link to="/volunteer">Digital Volunteer Hub</Link>
// </Menu.Item>
// <Menu.Item key="8">
//   <Link to="/about-us">Our Volunteers</Link>
// </Menu.Item>
// </Menu> */}
