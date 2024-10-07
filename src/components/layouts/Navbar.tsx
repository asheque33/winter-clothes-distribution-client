import { logOut, selectedUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { authUserPaths } from "@/routes/dashboard.route";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { Button, Drawer, Layout, Menu, Switch } from "antd";
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "./Container";
import "@/components/layouts/Navbar.css";
import { MenuOutlined } from "@ant-design/icons";

const { Header } = Layout;
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthenticated = useAppSelector(selectedUser);
  const toggleDrawer = () => {
    // setMobileMenuOpen((open) => !open);
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // const { theme, toggleTheme } = useContext(ThemeContext);

  // useEffect(() => {
  //   document.body.className = `${theme}-theme`;
  // }, [theme]);
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        color: "#3C3D37",
        backgroundColor: "#f5efe6",
      }}
    >
      <Container className="flex items-center justify-between lg:px-8">
        {/* <section > */}
        <div id="logo" style={{ flex: 1 }}>
          <Link
            className="font-semibold text-[#ff4c4e] hover:text-[#ff4c4e] hover:opacity-75 text-lg md:text-2xl "
            to="/"
          >
            {/* text-#3C3D37 */}
            Care
          </Link>
        </div>
        {/* desktop view */}
        <div
          id="desktop-display"
          style={{ flex: 5 }}
          className="hidden lg:flex justify-between  items-center"
        >
          <Menu
            mode="horizontal"
            // defaultSelectedKeys={["1"]}
            items={sidebarItemsGenerator(authUserPaths, isAuthenticated!)}
            style={{
              flex: 3,
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor: "#f5efe6",
              // flex: 1,
              // justifyContent: "space-between",
              // alignItems: "center",
              // margin: "none",
              // columnGap: "1rem",
              // backgroundColor: "#f5efe6",
              color: "#3c3d37",
              fontWeight: "bold",
              textDecoration: "none",
              // minWidth: 0,
            }}
          />
          <div
            className="flex justify-end items-center gap-8"
            style={{ flex: 2 }}
          >
            <div style={{ color: "#ff4c4e" }}>
              {/* <Switch onClick={toggleTheme} /> */}
              <Switch style={{ color: "#ff4c4e" }} />
            </div>
            <div>
              {!isAuthenticated ? (
                <Button
                  size="large"
                  className=" border-0 "
                  style={{
                    color: "white",
                    backgroundColor: "#ff4c4e",
                    fontWeight: "bold",
                  }}
                >
                  <NavLink to="/login">Login</NavLink>
                </Button>
              ) : (
                <Button
                  size="large"
                  className=" border-0"
                  style={{
                    color: "white",
                    backgroundColor: "#ff4c4e",
                    fontWeight: "bold",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
            </div>
          </div>
        </div>
        <div>
          <MenuOutlined
            onClick={toggleDrawer}
            className="visible lg:hidden"
            style={{}}
          />
        </div>
        {/* </section> */}
        {/* ============================================== */}
        <div id="tab-mobile-display">
          <Drawer
            placement="top"
            onClose={toggleDrawer}
            open={mobileMenuOpen}
            closable={false}
            style={{
              marginTop: "64px",
              zIndex: 0.5,
              padding: "0",
              overflow: "hidden",
              backgroundColor: "#f5efe6",
            }}
          >
            <Menu
              mode="vertical"
              // defaultSelectedKeys={["1"]}
              items={sidebarItemsGenerator(authUserPaths, isAuthenticated!)}
              style={{
                color: "#3c3d37",
                fontWeight: "bold",
                textDecoration: "none",
                textAlign: "center",
                padding: "0",
                // minWidth: 0,
              }}
            />
            <div className="flex flex-col items-center gap-4 bg-[#f5efe6] text-[#3c3d37] ">
              {!isAuthenticated ? (
                <div>
                  <Button
                    size="large"
                    className=" border-0 "
                    style={{
                      color: "white",
                      backgroundColor: "#ff4c4e",
                      fontWeight: "bold",
                    }}
                  >
                    <NavLink to="/login">Login</NavLink>
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    size="large"
                    className=" border-0"
                    style={{
                      color: "white",
                      backgroundColor: "#ff4c4e",
                      fontWeight: "bold",
                    }}
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                </div>
              )}
              <div style={{ color: "#ff4c4e" }}>
                {/* <Switch onClick={toggleTheme} /> */}
                <Switch style={{ color: "#ff4c4e" }} />
              </div>
            </div>
          </Drawer>
        </div>
      </Container>
    </Header>
  );
};

export default Navbar;
