import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import BookStyle from "./BookStyle";

function Book() {
  const data = [
    {
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
    },
    {
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
    },
    {
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
    },
  ];

  const data2 = [
    {
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
    },
    {
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3  mt-16 xl:w-[87%] w-[90%] lg:w-[93%] m-auto gap-7 ">
        {data.map((elem, ind) => (
          <BookStyle key={ind + 1} desc={elem.desc} />
        ))}
      </div>
      <div className="lg:grid-cols-2 grid-cols-1 mt-14 grid gap-7 w-[90%] lg:w-[60%] m-auto">
        {data2.map((elem, ind) => (
          <BookStyle key={ind + 1} desc={elem.desc} />
        ))}
      </div>
      <div className="flex justify-center mt-11">
        <button className="border p-4 bg-[#e55713]  text-white font-semibold px-9 rounded-[100px]">
          Get Your Copy Today
        </button>
      </div>
    </div>
  );
}

export default Book;
