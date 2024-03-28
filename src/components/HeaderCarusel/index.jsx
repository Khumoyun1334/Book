import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

export default function HeaderCarusel() {
  return (
    <div className="mt-9">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <div className="bg-[#F6F8FC] border-l-[5px] border-[#f5a782] p-6">
              <i className="text-[16px] text-[#4c527d]">
                "Excellent Book! Add your book reviews here consectetur
                adipiscing elit. Aliquam euismod nunc porta urna facilisis
                tempor. Praesent mauris neque, viverra quis erat vitae, auctor
                imperdiet nisi."
              </i>
            </div>
            <div className="flex gap-3 items-center mt-6">
              <div>
                <img
                  className="w-[60px] h-[60px]"
                  src="https://themes.3rdwavemedia.com/demo/bs5/devbook/assets/images/profiles/profile-2.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[14px] text-[#4c527d]">Jean Doe</p>
                <p className="text-[14px] text-[#4c527d]">
                  Co-Founder, Startup Week
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#F6F8FC] border-l-[5px] border-[#f5a782] p-6">
              <i className="text-[16px] text-[#4c527d]">
                "Awesome! Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Aliquam euismod nunc porta urna facilisis tempor. Praesent
                mauris neque, viverra quis erat vitae."
              </i>
            </div>
            <div className="flex gap-3 items-center mt-6">
              <div>
                <img
                  className="w-[60px] h-[60px]"
                  src="https://themes.3rdwavemedia.com/demo/bs5/devbook/assets/images/profiles/profile-2.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[14px] text-[#4c527d]">Jean Doe</p>
                <p className="text-[14px] text-[#4c527d]">
                  Co-Founder, Startup Week
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div className="bg-[#F6F8FC] border-l-[5px] border-[#f5a782] p-6">
              <i className="text-[16px] text-[#4c527d]">
                "Awesome! Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Aliquam euismod nunc porta urna facilisis tempor. Praesent
                mauris neque, viverra quis erat vitae."
              </i>
            </div>
            <div className="flex gap-3 items-center mt-6">
              <div>
                <img
                  className="w-[60px] h-[60px]"
                  src="https://themes.3rdwavemedia.com/demo/bs5/devbook/assets/images/profiles/profile-2.png"
                  alt=""
                />
              </div>
              <div>
                <p className="text-[14px] text-[#4c527d]">Jean Doe</p>
                <p className="text-[14px] text-[#4c527d]">
                  Co-Founder, Startup Week
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
