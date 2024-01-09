import React from "react";
import { Layout, Menu, Avatar, Dropdown, Space, Button } from "antd";
import { useLocation, useNavigate, Link } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const keyMenu = location.pathname.split("/")[1];
  const navigate = useNavigate();
  const items = [
    {
      label: (
        <Link
          to={"/"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "" ? " font-bold" : " font-medium"
          }`}
        >
          Trang chủ
        </Link>
      ),
      key: "",
    },
    {
      label: (
        <Link
          to={"/bando"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "bando" ? " font-bold" : " font-medium"
          }`}
        >
          Bản đồ 3D
        </Link>
      ),
      key: "bando",
    },
    {
      label: (
        <Link
          to={"/lienhe"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "lienhe" ? " font-bold" : " font-medium"
          }`}
        >
          Liên hệ
        </Link>
      ),
      key: "lienhe",
    },
    {
      label: (
        <Link
          to={"/thamquan"}
          className={`items-center  text-white text-[20px] ${
            keyMenu === "thamquan" ? " font-bold" : " font-medium"
          }`}
        >
          Khám phá
        </Link>
      ),
      key: "thamquan",
    },
  ];
  const email = localStorage.getItem("email");
  const logout = {
    title: "Logout",
    cb: () => {
      window.localStorage.removeItem("email");

      navigate("/dangnhap");
    },
  };
  const ProfileMenu = () => {
    return (
      <Menu>
        <Menu.Item onClick={logout.cb}>{logout.title}</Menu.Item>
      </Menu>
    );
  };
  return (
    <Layout.Header
      style={{
        backgroundColor: keyMenu === "" ? "transparent" : "rgba(0, 0, 0, 0.7)",
        position: "absolute",
        height: "55px",
        color: "black",
        zIndex: "10",
        width: "100vw",
      }}
    >
      <div className="flex items-center w-full h-full  justify-between">
        <Link to={"/"}>
          <div className="text-[32px] font-playfair text-white font-bold">
            ĐH Công Nghệ Thông Tin
          </div>
        </Link>
        <Space align="center" size={30}>
          {items.map((item) => {
            return (
              <div
                className={`${keyMenu === item.key ? "border-b-[4px]" : ""}`}
              >
                {item.label}
              </div>
            );
          })}
        </Space>
        <div>
          {email ? (
            <Dropdown overlay={ProfileMenu}>
              <h3 className="items-center space-x-1 text-white font-bold text-[20px] cursor-pointer min-w-[224px]">
                <Avatar
                  size={48}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1920px-Flag_of_Vietnam.svg.png"
                />{" "}
                {email}
              </h3>
            </Dropdown>
          ) : (
            <Link
              to={"/dangnhap"}
              className="items-center space-x-1 text-Whtie font-bold text-[20px] cursor-pointer"
            >
              <Button
                type="primary"
                className="bg-[#1063B8] text-[20px] h-10  px-3 rounded"
              >
                Đăng nhập
              </Button>
            </Link>
          )}
        </div>
      </div>
    </Layout.Header>
  );
};
