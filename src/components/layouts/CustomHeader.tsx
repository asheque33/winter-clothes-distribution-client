import { ThemeContext } from "@/App";
import { logOut, selectedUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Layout, Menu, Switch } from "antd";
import React, { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const { Header } = Layout;
const CustomHeader: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectedUser);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = `${theme}-theme`;
  }, [theme]);
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <Header className="sticky top-0 z-50 ">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ flex: 1, minWidth: 0 }}
      >
        {!isAuthenticated ? (
          <>
            <Button className="bg-green-400 mt-4">
              <NavLink to="/login">Login</NavLink>
            </Button>
          </>
        ) : (
          <>
            <Button className="bg-red-400 mt-4" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
        <Switch className="ml-[85%] mt-4" onClick={toggleTheme} />
      </Menu>
    </Header>
  );
};

export default CustomHeader;
