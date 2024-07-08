import React from "react";
import CarsStyle from "./CarsStyle";

function Cars() {
  const data = [
    {
      name: "Basic",
      status: false,
    },
    {
      name: "Standard",
      status: true,
      bacground:
        "https://preview.uideck.com/items/appland/assets/images/price-shape.png",
    },
    {
      name: "Professional",
      status: false,
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 xl:w-[70%] m-auto lg:grid-cols-3">
        {data.map((elem, ind) => (
          <CarsStyle
            key={ind + 1}
            name={elem.name}
            status={elem.status}
            bacground={elem.bacground}
          />
        ))}
      </div>
    </div>
  );
}

export default Cars;
