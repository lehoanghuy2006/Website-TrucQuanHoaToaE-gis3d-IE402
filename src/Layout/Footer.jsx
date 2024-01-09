import React from "react";
import { Layout, Row, Col } from "antd";
import logo from "../asset/images/logo.png";
import { useNavigate, useLocation } from "react-router-dom";
export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const keyMenu = location.pathname.split("/")[1];
  if (keyMenu === "bando") return <></>;
  return (
    <Layout.Footer
      className="px-[50px]"
      style={{
        color: "white",
        weight:"350px",
        height: "490px",
        position: "relative",
      }}
    >
      <Row className="absolute w-full h-[200px] top-[50%] translate-y-[-50%]">
        <Col span={6} className="p-[10px]">
          <h3 className="text-white font-bold text-[36px] font-playfair">
            Nhóm 19
          </h3>
          <p className="text-white mt-2 text-[14px] ">Đỗ Văn Hưởng</p>
          <p className="text-white mt-2 text-[14px] ">Lê Hoàng Huy</p>
          <img src={logo} alt="logo" className="mt-5 w-3/4" />
        </Col>
        <Col span={6} className="p-[10px] mt-11">
          <p
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white mt-2 font-bold cursor-pointer text-[14px] "
          >
            Đại học Công nghệ Thông tin
          </p>
          <p
            onClick={() => {
              navigate("/");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white mt-2 cursor-pointer text-[14px] "
          >
            Trang chủ
          </p>
          <p
            onClick={() => {
              navigate("/bando");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white mt-2 cursor-pointer text-[14px] "
          >
            Bản đồ 3D
          </p>
          <p
            onClick={() => {
              navigate("/thamquan");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white mt-2 cursor-pointer text-[14px] "
          >
            Tham quan
          </p>
          <p
            onClick={() => {
              navigate("/lienhe");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-white mt-2 cursor-pointer text-[14px] "
          >
            Liên hệ
          </p>
        </Col>
        <Col span={6} className="p-[10px] mt-11">
          <p className="text-white mt-2  text-[14px] ">
            Địa chỉ: Đường Hàn Thuyên, khu phố 6 P, Thủ Đức, Thành phố Hồ Chí Minh
          </p>
          <p className="text-white mt-2 text-[14px] ">Tel: 028 3725 2002</p>
          <p className="text-white mt-2 text-[14px] ">Fax: 028 3725 2148</p>
        </Col>
        <Col span={6} className="p-[10px] mt-11">
          <p className="text-white  text-[14px] ">Nhận tin tức</p>
          <input
            className="bg-[transparent] p-3 mt-4 placeholder-white border border-white"
            placeholder="Điền địa chỉ email"
          />
        </Col>
      </Row>
    </Layout.Footer>
  );
};
