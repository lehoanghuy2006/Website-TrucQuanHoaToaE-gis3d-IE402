import { Carousel, Row, Col, Space, Button } from "antd";
import React from "react";
import { Layout } from "../Layout/Layout";
import UIT1 from "../asset/images/uit1.png";
import UIT2 from "../asset/images/uit2.png";
import UIT3 from "../asset/images/uit3.png";
import UIT4 from "../asset/images/uit4.png";
import UIT5 from "../asset/images/uit5.png";
import UIT6 from "../asset/images/uit6.jpg";
import UIT7 from "../asset/images/uit7.jpg";
import UIT8 from "../asset/images/uit8.jpg";
import UIT9 from "../asset/images/uit9.png";
import UIT10 from "../asset/images/uit10.jpg";
import UIT11 from "../asset/images/uit11.jpg";
import UIT12 from "../asset/images/uit12.jpg";
import UIT13 from "../asset/images/uit13.jpg";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const Home = () => {
  const slider = React.useRef();
  const images = [
    UIT1,
    UIT2,
    UIT3,
    UIT4,
  ];
  return (
    <Layout>
      <div className="p-0 m-0">
      <div className=" relative w-screen mt-100" >
        <br />
              <img
                className="w-screen h-screen  object-cover object-center" style={{ marginTop:"-50px" }}
                src={UIT10}
                alt=""
              />
              <div className="bg-text w-[90%] text-center absolute right-0 left-0 m-auto bottom-[30%]  pb-[100px] px-[10%]">
                <h1 className="text-black mt-10 text-[40px] font-bold ">
                  Bề dày thành tích - dẫn đầu tại các cuộc thi
                </h1>
                <br />  
                <p className="text-[16px] text-black">
                Con số 14 năm hình thành và phát triển đối với một trường đại học không phải là dài, nhưng đối với UIT, đó là khoảng thời gian nỗ lực không ngừng của tập thể thầy và trò. Vượt qua những khó khăn của giai đoạn đầu thành lập, đến nay UIT đã có thể tự tin khẳng định vị thế của mình trong lĩnh vực đào tạo công nghệ thông tin và truyền thông với bề dày những thành tích mà sinh viên UIT đã đạt được trong nước và quốc tế: sinh viên đạt 07 giải thưởng kỳ thi Olympic Toán toàn quốc, giải thưởng sinh viên nghiên cứu khoa học Euréka, 2 giải nhất và 1 giải nhì của 2 cuộc thi về hacking: cuộc thi "VIETTEL MATES CTF" do Trung tâm An ninh mạng Viettel tổ chức và cuộc thi An ninh mạng WhiteHat Challenge 01 do BKAV tổ chức,ngành Công nghệ Thông tin xuất sắc có bài báo khoa học tại Hội nghị Quốc tế RIVF 2020,...
                </p>
                  <br /><br />
                <div className="absolute w-[70%] bottom-0 translate-y-[50%] left-[50%] translate-x-[-50%]">
                  <br /><br />
                  <div className="flex flex-wrap justify-between">
                    <img
                      className="w-[30%]"
                      src={UIT11}
                      alt=""
                    />
                    <img
                      className="w-[30%]"
                      src={UIT12}
                      alt=""
                    />
                    <img
                      className="w-[30%]"
                      src={UIT13}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
        

        <div className="text-center flex justify-center flex-wrap w-full">
          <div className="w-[70%]">
            <h1 className="mt-10 text-[48px] font-bold">Cơ sở vật chất, trang thiết bị</h1>
            <p className="text-[16px]">
            Trường Đại học Công nghệ Thông tin sử dụng khuôn viên đất là 12,3 hecta trong khu quy hoạch của ĐHQG TPHCM tại Thủ Đức, Tp.Hồ Chí Minh (đối diện khu du lịch Suối Tiên), diện tích sàn xây dựng là 93.750 m2, kinh phí là 412 tỉ VNĐ. Quy hoạch xây dựng gồm 7 tòa nhưng hiện nay mới chỉ có 5 tòa được xây dựng hoàn chỉnh.Hệ thống mạng thông tin tư liệu của ĐHQG TPHCM kết nối internet và các đơn vị thành viên của ĐHQG TPHCM trong đó có Trung tâm Phát triển CNTT, khu CNPM qua hệ thống cáp quang. Hệ thống có băng thông rộng 8MBps.
Mạng internet được coi là mạnh nhất ĐHQG TPHCM với tốc độ lên tới 1Gbps.             </p>
          </div>
          <Row className="mt-10 flex flex-wrap">
            <Col
              className="items-center justify-end flex flex-wrap border-dashed  border-r-[2px] border-r-[#626262] "
              span={12}
            >
              <Space direction="vertical">
                <img
                  className=" w-[40vw]  m-10 ml-0"
                  src={UIT5}
                  alt=""
                />
                <img
                  className="w-[40vw]  m-10 ml-0"
                  src={UIT6}
                  alt=""
                />
              </Space>
            </Col>
            <Col className="items-center" span={12}>
              <img
                className="w-[40vw]  m-10 mt-0"
                src={UIT7}
                alt=""
              />
              <img
                className="w-[40vw]  m-10  my-20"
                src={UIT8}
                alt=""
              />
              <img
                className="w-[40vw]  m-10  mt-20"
                src={UIT9}
                alt=""
              />
            </Col>
          </Row>

          <div className="w-screen m-10">
            {/* <Button
              type="primary"
              className="bg-[#1063B8] text-[16px] px-3 rounded h-8"
            >
              Xem thêm
            </Button> */}

           <div className="relative overflow-hidden">
          <Carousel
            ref={(ref) => {
              slider.current = ref;
            }}
            autoplay
            className=""
          >
            {images.map((image) => {
              return (
                <div className="bg-black relative w-screen">
                  <img
                    className="w-screen h-screen   object-cover object-center opacity-75"
                    src={image}
                    alt="UIT1"
                  />
                  <div className="w-[80%] text-center absolute right-0 left-0 m-auto top-[250px]">
                    <h1 className="text-white text-[32px] font-bold">
                      Chào mừng Quý khách đến tham quan Đại học Công nghệ Thông tin
                    </h1>
                    <p className="text-[20px] font-bold text-white troke">
                    Đại học Công nghệ Thông tin, Đại học Quốc gia Thành phố Hồ Chí Minh (UIT) là một trong những trường đại học hàng đầu về công nghệ thông tin tại Việt Nam. Trường UIT cung cấp các chương trình đào tạo đa dạng từ cử nhân đến tiến sĩ trong các lĩnh vực như Khoa học máy tính, Mạng máy tính và Truyền thông, Công nghệ thông tin, Kỹ thuật phần mềm, Trí tuệ nhân tạo, và nhiều lĩnh vực công nghệ thông tin khác.
                    </p>
                  </div>
                </div>
              );
            })}
          </Carousel>
          <div className="absolute opacity-50 top-[50%] left-[20px] w-[40px] h-[40px] rounded-full bg-white shadow-sm flex justify-center items-center">
            <LeftOutlined
              className="text-[20px]"
              onClick={() => slider.current.prev()}
            />
          </div>
          <div className="absolute opacity-50 top-[50%] right-[20px] w-[40px] h-[40px] rounded-full bg-white shadow-sm flex justify-center items-center">
            <RightOutlined
              className="text-[20px] "
              onClick={() => slider.current.next()}
            />
          </div>
        </div>
        <br />
        <Button
              type="primary"
              className="bg-[#1063B8] text-[16px] px-3 rounded h-8"
            >
              Xem thêm
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};
