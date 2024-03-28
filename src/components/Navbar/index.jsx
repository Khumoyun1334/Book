import React from "react";

function Navbar() {
  return (
    <div>
      <div className="flex w-[98%] mt-5 m-auto items-center gap-4">
        <img
          src="https://themes.3rdwavemedia.com/demo/bs5/devbook/assets/images/site-logo.svg"
          alt=""
        />
        <p
          style={{ fontFamily: "Roboto, sans-serif" }}
          className="text-[24px] font-bold"
        >
          DevBook
        </p>
      </div>
    </div>
  );
}

export default Navbar;
