import { ImQuotesRight } from "react-icons/im";
import React from "react";

function BookStyle({ desc }) {
  return (
    <div className="">
      <div className="bg-[#F6F8FC] p-7 rounded-[8px]">
        <div className="flex justify-center -mt-11">
          <div className="w-[40px]  h-[40px] bg-[#F5A782] rounded-full text-white flex justify-center items-center">
            <ImQuotesRight />
          </div>
        </div>
        <div>
          <div className="mt-4">
            <i className="text-[#4c527d]">
              "Excellent Book! Add your book review here consectetur adipiscing
              elit. Aliquam euismod nunc porta urna facilisis tempor. "
            </i>
          </div>
        </div>
        <div>
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
      </div>
    </div>
  );
}

export default BookStyle;
