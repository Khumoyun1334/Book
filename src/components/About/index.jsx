import { RiGlobalLine } from "react-icons/ri";
import { BsMedium } from "react-icons/bs";
import { FaGithubAlt } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import React from "react";

function About() {
  return (
    <div className="bg-[#ED6524] p-9 md:p-16 mt-20">
      <div>
        <div className="flex justify-center">
          <img
            className="w-[170px]"
            src="https://themes.3rdwavemedia.com/demo/bs5/devbook/assets/images/profiles/author-profile.png"
            alt=""
          />
        </div>
        <div className="mt-6">
          {" "}
          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="xl:text-[38px] w-[90%] text-white m-auto text-[28px] text-center font-bold"
          >
            About The Author
          </p>
        </div>
        <div>
          <p className="text-white mt-5 xl:w-[55%] md:w-[80%] w-[90%] m-auto">
            This book landing page template is made by product designer Xiaoying
            Riley for developers. You can use this template to self-publish and
            promote your book/ebook. You can easily use platforms such as
            Gumroad to handle your book payment and delivery.
          </p>
          <p className="text-white mt-5 xl:w-[55%] md:w-[80%]  w-[90%] m-auto">
            This template is 100% FREE as long as you keep the footer
            attribution link. You do not have the rights to resell, sublicense
            or redistribute (even for free) the template on its own or as a
            separate attachment from any of your work. If you’d like to use this
            template without the footer attribution link, you can buy the
            commercial license.
          </p>
        </div>
        <div>
          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className=" w-[90%] text-white m-auto text-[20px] mt-9 text-center font-bold"
          >
            Follow Author
          </p>
        </div>
        <div className="flex justify-center gap-3 mt-8">
          <div className="w-[40px] h-[40px] flex text-white justify-center items-center bg-[#D55B20] rounded-full">
            <AiOutlineTwitter size={"20px"} />
          </div>
          <div className="w-[40px] h-[40px] flex text-white justify-center items-center bg-[#D55B20] rounded-full">
            <FaGithubAlt size={"20px"} />
          </div>
          <div className="w-[40px] h-[40px] flex text-white justify-center items-center bg-[#D55B20] rounded-full">
            <BsMedium size={"20px"} />
          </div>
          <div className="w-[40px] h-[40px] flex text-white justify-center items-center bg-[#D55B20] rounded-full">
            <RiGlobalLine size={"20px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
