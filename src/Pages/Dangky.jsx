import { Space, Input } from "antd";
import React from "react";
import UIT16 from "../asset/images/uit16.jpg";
import { useNavigate } from "react-router-dom";
export const Dangky = () => {
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    values.preventDefault();
    window.localStorage.setItem("email", values.target.email.value);
    console.log("Success:", values.target.email.value);
    navigate("/");
  };

  return (
    <div className="relative">
      <div className="dangky">
        <img
          className="w-full h-full object-cover object-center opacity-50"
          src={UIT16}
          alt=""
        />
      </div>
      <Space
        className=" w-screen h-screen justify-center items-center absolute left-0 top-0"
        align="center"
      >
        <form onSubmit={handleSubmit} className="z-50 text-center">
          <h1 className="text-white text-[68px]">
            Chào mừng bạn đến với UIT
          </h1>
          <Space
            direction="vertical"
            size={23}
            align="center"
            className="my-10 px-10 py-[100px] rounded bg-[lightblue] shadow-2xl text-start"
          >
            <Space align="center">
              <h3 className="text-[34px] font-bold ">
                Đăng kí để khám phá nào !
              </h3>
            </Space>

            <div>
              <p className="text-[18px] rounded">Tên tài khoản</p>
              <Input
                name="email"
                className="w-[556px] h-[44px] border border-[#CED0C2] p-2"
                placeholder="Nhập email"
                type="email"
                required
              />
            </div>
            <div>
              <p className="text-[18px]">Mật khẩu</p>
              <Input.Password
                className="w-[556px] h-[44px] rounded border border-[#CED0C2] p-2"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>
            <div>
              <p className="text-[18px]">Nhập lại mật khẩu</p>
              <Input.Password
                className="w-[556px] h-[44px] rounded border border-[#CED0C2] p-2"
                placeholder="Nhập mật lại khẩu"
                required
              />
            </div>

            <button
              type="submit"
              className="w-[556px] mt-6 h-[44px] rounded bg-black text-white font-bold text-[22px]"
            >
              Đăng ký
            </button>
            <div className="flex justify-between w-[556px]">
              <p
                onClick={() => navigate("/")}
                className="cursor-pointer text-[22px]"
              >
                Trang chủ
              </p>
              <p
                onClick={() => navigate("/dangnhap")}
                className="cursor-pointer text-[22px]"
              >
                Đăng nhâp
              </p>
            </div>
          </Space>
        </form>
      </Space>
    </div>
  );
};
