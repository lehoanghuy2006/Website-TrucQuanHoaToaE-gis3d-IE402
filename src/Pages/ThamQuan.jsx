import { Carousel, Button } from "antd";
import React from "react";
import { Layout } from "../Layout/Layout";
import UIT17 from "../asset/images/uit17.jpg";
import UIT15 from "../asset/images/uit15.jpg";
import UIT14 from "../asset/images/uit14.jpg";
import UIT16 from "../asset/images/uit16.jpg";
import UIT18 from "../asset/images/uit18.png";
import UIT19 from "../asset/images/uit19.png";
import UIT20 from "../asset/images/uit20.png";
import UIT21 from "../asset/images/uit21.jpg";
import { Link } from "react-router-dom";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

export const ThamQuan = () => {
  const slider = React.useRef();

  return (
    <Layout>
      <div className="p-0 m-0">
        <div className="relative overflow-hidden">
          <Carousel
            ref={(ref) => {
              slider.current = ref;
            }}
            autoplay
            className="h-screen w-screen"
          >
            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={UIT14}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={UIT15}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={UIT16}
                alt=""
              />
            </div>
            <div>
              <img
                className="w-full h-full object-cover object-center"
                src={UIT17}
                alt=""
              />
            </div>
          </Carousel>
          <div className="absolute top-[50%] left-[20px] w-[40px] h-[40px] rounded-full bg-white shadow-sm flex justify-center items-center">
            <LeftOutlined
              className="text-[20px]"
              onClick={() => slider.current.prev()}
            />
          </div>
          <div className="absolute top-[50%] right-[20px] w-[40px] h-[40px] rounded-full bg-white shadow-sm flex justify-center items-center">
            <RightOutlined
              className="text-[20px]"
              onClick={() => slider.current.next()}
            />
          </div>
        </div>

        <div className=" my-10  mx-[50px] flex flex-wrap justify-center">
          <img
            className="w-[560px] h-[342px] p-5 object-cover"
            src={UIT18}
            alt=""
          />
          <div className=" p-5  w-[560px]">
            <h3 className="text-[18px]  font-bold ">UIT CAREER DAY 2019</h3>
            <p className="mt-5 text-[18px] text-justify">
            UIT CAREER DAY 2019 với hàng ngàn cơ hội việc làm, thực tập đến từ hơn 33 doanh nghiệp hoạt động trong lĩnh vực Công nghệ Thông tin và Truyền thông trong và ngoài nước. 
UIT Career Day được xem là cơ hội giúp doanh nghiệp và sinh viên trao đổi trực tiếp, nắm bắt được nhu cầu và nguyện vọng của cả hai; là dịp để các bạn sinh viên có cái nhìn thực tế và tổng quát nhất về thị trường tuyển dụng nhân lực IT hiện nay.
            </p>
          </div>
        </div>
        <div className=" my-10 mx-[50px] flex flex-wrap justify-center">
          <div className=" p-5 w-[560px]">
            <h3 className="text-[18px] font-bold ">UIT CAREER DAY 2020</h3>
            <p className="mt-5 text-[18px] text-justify">
            UIT CAREER DAY 2020 Nơi gặp gỡ, kết nối nhà tuyển dụng với sinh viên, với hàng ngàn cơ hội việc làm, thực tập đến từ hơn 25 doanh nghiệp hoạt động trong lĩnh vực Công nghệ Thông tin và Truyền thông trong và ngoài nước. 
UIT Career Day được xem là cơ hội giúp doanh nghiệp và sinh viên trao đổi trực tiếp, nắm bắt được nhu cầu và nguyện vọng của cả hai; là dịp để các bạn sinh viên có cái nhìn thực tế và tổng quát nhất về thị trường tuyển dụng nhân lực IT hiện nay.
            </p>
          </div>
          <img
            className="w-[560px] p-5 h-[362px] object-cover"
            src={UIT19}
            alt=""
          />
        </div>
        <div className=" my-10  mx-[50px] flex flex-wrap justify-center">
          <img
            className="w-[560px] h-[342px] p-5 object-cover"
            src={UIT20}
            alt=""
          />
          <div className=" p-5 w-[560px]">
            <h3 className="text-[18px]  font-bold ">UIT CAREER DAY 2022</h3>
            <p className="mt-5 text-[18px] text-justify">
            UIT CAREER DAY 2022, các bạn sẽ thu về được rất nhiều lợi ích, hỗ trợ tốt cho công việc sau này như:
Kiến thức và kỹ năng cơ bản khi tham gia lực lượng lao động chính thức.
Có cơ hội tìm hiểu về thị trường lao động thực tiễn với các vị trí việc làm mới nhất.
Được tham gia các cuộc thi thú vị để gia tăng sự tự tin cho bản thân.
Được nâng cao các kỹ năng mềm cần thiết cho công việc như kỹ năng giao tiếp, xử lý tình huống, kỹ năng thuyết trình, sự tự tin khi đứng trước đám đông,...
Cơ hội tiếp cận với vô số việc làm hấp dẫn, phù hợp với chuyên ngành học và định hướng nghề nghiệp của bản thân.
Nhiều mối quan hệ mới khi được gặp gỡ và giao lưu với các anh chị “tiền bối”.
            </p>
          </div>
        </div>
        <div className=" my-10 mx-[50px] flex flex-wrap justify-center">
          <div className=" p-5 w-[560px]">
            <h3 className="text-[18px] font-bold ">UIT CAREER DAY 2023</h3>
            <p className="mt-5 text-[18px] text-justify">
            UIT CAREER DAY 2023 với hàng ngàn cơ hội việc làm, thực tập đến từ các doanh nghiệp hoạt động trong lĩnh vực Công nghệ Thông tin và Truyền thông trong và ngoài nước.
UIT Career Day được xem là cơ hội giúp doanh nghiệp và sinh viên trao đổi trực tiếp, nắm bắt được nhu cầu và nguyện vọng của cả hai; là dịp để các bạn sinh viên có cái nhìn thực tế và tổng quát nhất về thị trường tuyển dụng nhân lực IT hiện nay.
            </p>
          </div>
          <img
            className="w-[560px] p-5 h-[362px] object-cover"
            src={UIT21}
            alt=""
          />
        </div>
        <div className=" my-10  mx-[50px] flex flex-wrap justify-center">
          <Button className=" w-[500px] h-[70px] font-bold text-[30px] text-white bg-[#1063B8]">
            <Link to={"/bando"}>Xem bản đồ 3D</Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};
