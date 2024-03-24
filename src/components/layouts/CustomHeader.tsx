import { logOut, selectedUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button, Layout, Menu } from "antd";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const { Header } = Layout;
const CustomHeader: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectedUser);
  const handleLogout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <Header className="sticky top-0 z-50 ">
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ flex: 1, minWidth: 0 }}
      >
        {!isAuthenticated ? (
          <>
            <div
              style={{
                marginRight: "10%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link
                className="font-semibold text-gray-400 hover:text-gray-300 text-2xl"
                to="/"
              >
                wc-project
              </Link>
            </div>

            <>
              <NavLink to="/winter-clothes">All Winter Clothes</NavLink>
            </>

            <>
              <Button className="bg-destructive my-auto ml-8">
                <NavLink to="/login">Login</NavLink>
              </Button>
            </>
          </>
        ) : (
          <>
            <Button className="bg-purple-500 mt-4" onClick={handleLogout}>
              Logout
            </Button>
          </>
        )}
      </Menu>
    </Header>
  );
};

export default CustomHeader;
