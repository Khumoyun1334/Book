import React from "react";
import HeaderCarusel from "../HeaderCarusel";

function Header() {
  return (
    <div>
      <div className="md:flex block xl:w-[87%] justify-between w-[92%] xl:mt-0 mt-12 m-auto items-center lg:gap-8 xl:gap-[100px]">
        <div className="md:w-[55%] w-[95%] m-auto">
          <div>
            <p
              style={{ fontFamily: "Quicksand, sans-serif" }}
              className="lg:text-[40px] text-[30px] font-bold xl:w-[70%] w-full"
            >
              Free Book & eBook Landing Page Template
            </p>
            <p className="text-[20px] text-[#4c527d] mt-6">
              A free Bootstrap 5 template for developers and programmers who
              want to self-publish books. Download now and start selling your
              book right away!
            </p>
          </div>
          <div className="md:flex block xl:w-[50%] gap-5 mt-7">
            <button className="border p-4 bg-[#e55713] w-full text-white font-semibold px-9 rounded-[100px]">
              Buy for $39
            </button>
            <button className="border-[2px] mt-4 md:mt-0 w-full p-4 text-[#e55713] font-semibold border-[#e55713] px-9 rounded-[100px]">
              Learn More
            </button>
          </div>
          <div>
            <HeaderCarusel />
          </div>
        </div>
        <div className="lg:w-[45%] mt-8 w-full md:w-[40%] ">
          <img
            className="w-full "
            src="https://themes.3rdwavemedia.com/demo/bs5/devbook/assets/images/devbook-cover.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
