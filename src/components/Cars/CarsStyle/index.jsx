import React from "react";

function CarsStyle({ name, status, bacground }) {
  return (
    <div>
      <div
        className={`border bg-[${bacground}] p-5 shadw-[0_0_11px_0_rgba(154,154,154,.16)]`}
      >
        <div>
          <p className="text-[25px] text-[#38424d] text-center">{name}</p>
        </div>
        <div className="mt-6">
          <p
            className={` ${
              status ? "text-[#0898e7]" : "text-black"
            } text-[35px] text-center`}
          >
            $49
          </p>
        </div>
      </div>
    </div>
  );
}

export default CarsStyle;
