import { authUserPaths } from "@/routes/dashboard.route";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Sider } = Layout;
const Sidebar = () => {
  return (
    <Sider
      style={{
        height: "100vh",
        position: "sticky",
        top: "0",
        left: "0",
      }}
      breakpoint="md"
      collapsedWidth="0"
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          color: "white",
          height: "4rem",
          // marginLeft: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link
          className="font-semibold text-gray-400 hover:text-white text-lg md:text-2xl"
          to="/"
        >
          wc-project
        </Link>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["4"]}
        mode="inline"
        items={sidebarItemsGenerator(authUserPaths)}
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
