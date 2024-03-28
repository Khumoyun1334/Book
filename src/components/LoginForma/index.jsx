import React from "react";

function LoginForma() {
  return (
    <div>
      <div className="bg-[#F6F8FC] mt-[60px] p-11 xl:w-[50%] lg:w-[70%] w-[90%] rounded-[8px] m-auto">
        <div>
          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="text-[28px] text-center font-bold"
          >
            Get A Free Preview
          </p>
          <p className="text-center text-[16px] text-[#4c527d] mt-3 m-auto">
            Sign up to get a free preview of the book. <br /> You can offer
            visitors free book previews to generate leads.
          </p>
        </div>
        <div className="lg:flex grid gap-4 mt-4 xl:px-5">
          <input
            className="lg:w-[75%] focus:border-[#f6b292] focus:shadow-[0_5px_15px_0_rgba(0,0,0,0.15)] w-full rounded-[5px] px-4 h-[50px] border outline-none"
            type="text"
            placeholder="Your Email"
          />
          <button className="border lg:w-[25%] w-full rounded-[5px] font-bold bg-[#ED6524] text-white h-[50px]">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginForma;
