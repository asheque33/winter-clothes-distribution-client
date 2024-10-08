import { logOut, selectedUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { authUserPaths } from "@/routes/dashboard.route";
import { sidebarItemsGenerator } from "@/utils/sidebarItemsGenerator";
import { Button, Drawer, Layout, Menu, Switch } from "antd";
import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "./Container";
import "@/components/layouts/Navbar.css";
import {
  CloseOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";

const { Header } = Layout;
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthenticated = useAppSelector(selectedUser);
  const toggleDrawer = () => {
    // setMobileMenuOpen((open) => !open);
    setMobileMenuOpen((prev) => !prev);
  };
  // Close drawer if screen size is large
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // lg breakpoint in Ant Design
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
      className="border-b-2 lg:border-b-0 border-[#ff4c4e]"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        color: "#3C3D37",
        backgroundColor: "#f5efe6",
        // borderBottom: "2px solid #FF4C4E",
      }}
    >
      <Container className="flex items-center justify-between lg:px-4">
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
        {/* mobile view */}
        {/* ============================================== */}
        <div className="lg:hidden text-[#ff4c4e]">
          {mobileMenuOpen ? (
            <CloseOutlined
              onClick={toggleDrawer}
              style={{ fontSize: "24px" }}
            />
          ) : (
            <MenuOutlined onClick={toggleDrawer} style={{ fontSize: "24px" }} />
          )}
        </div>
        <div id="tab-mobile-display">
          <Drawer
            placement="top"
            onClose={toggleDrawer}
            // 1st time toggle button click will be opened
            open={mobileMenuOpen}
            closable={false}
            className="block lg:hidden"
            styles={{
              header: {
                margin: 0,
                // width: "100vw",
                border: "1px solid white",
              },
              body: { padding: 0 },
              mask: { display: "none" },
            }}
            style={{
              marginTop: "64px",
              zIndex: 2,
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
                backgroundColor: "#f5efe6",
                // minWidth: 0,
              }}
            />
            <div className="flex flex-col items-center gap-4 bg-[#f5efe6]  text-[#3c3d37] pb-2">
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
              <div>
                {/* <Switch onClick={toggleTheme} /> */}
                {<Switch style={{ color: "#ff4c4e" }} /> ? (
                  <MoonOutlined />
                ) : (
                  <SunOutlined />
                )}
              </div>
            </div>
          </Drawer>
        </div>
      </Container>
    </Header>
  );
};

export default Navbar;
