import React from "react";

export default function Bottom() {
  return (
    <div className="p-20 flex flex-wrap justify-evenly font-sans text-sm text-gray-700">
      <div>
        <i className="fa fa-truck"></i>
        <a href="#" className=" hover:text-black">
          Free Worldwide Shipping
        </a>
      </div>

      <div>
        <i className="fa fa-repeat"></i>
        <a href="#" className=" hover:text-black">
          {" "}
          Full 30-Day Return Policy
        </a>
      </div>

      <div>
        <i className="fa fa-users"></i>
        <a href="#" className=" hover:text-black">
          {" "}
          Join 1000's of stationery-addicts
        </a>
      </div>
    </div>
  );
}
