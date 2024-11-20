import { logOut, selectedUser } from "@/redux/features/auth/authSlice";
import logoLightIcon from "@/assets/care-logo-light.png";
import logoDarkIcon from "@/assets/care-logo-dark.png";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { unAuthUserPaths } from "@/routes/navbar.route";

import { Button, Drawer, Image, Layout, Menu, theme } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Container from "./Container";
import "@/components/layouts/Shared/Navbar.css";
import {
  CloseOutlined,
  MenuOutlined,
  MoonOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { ThemeContext } from "@/components/ThemeContext/ThemeProvider";
import { NavbarItemsGenerator } from "@/utils/navbarItemsGenerator";

const { useToken } = theme;
const { Header } = Layout;
const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isAuthenticated = useAppSelector(selectedUser);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { token } = useToken();

  const toggleDrawer = () => {
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
        zIndex: 100,
        width: "100%",
        color: theme === "light" ? token.colorText : token.colorText,
        backgroundColor:
          theme === "light" ? token.colorBgSolid : token.colorBgSolid,
      }}
    >
      <Container className="flex items-center justify-between lg:px-4">
        <div id="logo" style={{ flex: 1 }}>
          <Link
            className={`font-semibold  hover:opacity-90 text-lg md:text-2xl flex items-center gap-0.5`}
            style={{ color: token?.colorPrimary }}
            to="/"
          >
            <Image
              src={theme === "dark" ? logoDarkIcon : logoLightIcon}
              alt="logo Icon"
              width={30}
              height={30}
              preview={false}
            />
            <span>Care</span>
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
            theme="light"
            items={NavbarItemsGenerator(unAuthUserPaths)}
            style={{
              flex: 3,
              display: "flex",
              justifyContent: "flex-end",
              backgroundColor:
                theme === "light" ? token.colorBgSolid : token.colorBgSolid,
              color: theme === "light" ? token.colorText : token.colorText,
              fontWeight: "bold",
              textDecoration: theme === "light" ? "none" : "none",

              // minWidth: 0,
            }}
          />
          <div
            className="flex justify-end items-center gap-8"
            style={{ flex: 2 }}
          >
            <div style={{ color: theme === "light" ? "#ff4c4e" : "#f0f0f0" }}>
              <div
                onClick={toggleTheme}
                style={{ cursor: "pointer", fontSize: "24px" }}
              >
                {theme === "dark" ? <MoonOutlined /> : <SunOutlined />}
              </div>
            </div>
            <div>
              {!isAuthenticated ? (
                <Button
                  size="large"
                  className=" border-0 "
                  style={{
                    color: "white",
                    backgroundColor: token?.colorPrimary,
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
                    backgroundColor: token?.colorPrimary,
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
        {/* menu button */}
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
              items={NavbarItemsGenerator(unAuthUserPaths)}
              style={{
                fontWeight: "bold",
                textDecoration: "none",
                textAlign: "center",
                padding: "0",
                color: theme === "light" ? token.colorText : token.colorText,
                backgroundColor:
                  theme === "light" ? token.colorBgSolid : token.colorBgSolid,
                // minWidth: 0,
              }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <div
              className="flex flex-col items-center gap-4  pb-2"
              style={{
                color: theme === "light" ? token.colorText : token.colorText,
                backgroundColor:
                  theme === "light" ? token.colorBgSolid : token.colorBgSolid,
              }}
            >
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
              <div
                onClick={toggleTheme}
                style={{ cursor: "pointer", fontSize: "24px" }}
              >
                {theme === "dark" ? <MoonOutlined /> : <SunOutlined />}
              </div>
            </div>
          </Drawer>
        </div>
      </Container>
    </Header>
  );
};

export default Navbar;
