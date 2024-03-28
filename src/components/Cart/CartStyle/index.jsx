import React from "react";

function CartStyle({ name, icon, desc }) {
  return (
    <div className="mt-10">
      <div>
        <div className="flex justify-center">
          <p className="text-[60px] text-[#ED6524]">{icon}</p>
        </div>
        <div>
          <p
            style={{ fontFamily: "Quicksand, sans-serif" }}
            className="text-[20px] font-bold text-center"
          >
            {name}
          </p>
        </div>
        <div>
          <p className="text-center mt-7 text-[16px] text-[#4c527d]"> {desc}</p>
        </div>
      </div>
    </div>
  );
}

export default CartStyle;
