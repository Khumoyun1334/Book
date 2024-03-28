import { FaLaptopCode } from "react-icons/fa";
import React from "react";
import CartStyle from "./CartStyle";

function Cart() {
  const data = [
    {
      name: "Build Lorem Ipsum lobortis nec mauris habitant morbi",
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
      icon: <FaLaptopCode />,
    },
    {
      name: "Build Lorem Ipsum lobortis nec mauris habitant morbi",
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
      icon: <FaLaptopCode />,
    },
    {
      name: "Build Lorem Ipsum lobortis nec mauris habitant morbi",
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
      icon: <FaLaptopCode />,
    },
    {
      name: "Build Lorem Ipsum lobortis nec mauris habitant morbi",
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
      icon: <FaLaptopCode />,
    },
    {
      name: "Build Lorem Ipsum lobortis nec mauris habitant morbi",
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
      icon: <FaLaptopCode />,
    },
    {
      name: "Build Lorem Ipsum lobortis nec mauris habitant morbi",
      desc: "List one of your book's benefits here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer blandit consequat consequat.",
      icon: <FaLaptopCode />,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-11 lg:w-[93%] md:w-[90%] w-[90%] lg:grid-cols-3 xl:w-[87%] mt-5 m-auto ">
        {data.map((elem, ind) => (
          <CartStyle
            key={ind + 1}
            name={elem.name}
            desc={elem.desc}
            icon={elem.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Cart;
