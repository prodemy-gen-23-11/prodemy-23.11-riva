import React from "react";

export default function Nav() {
  return (
    <div className="flex justify-center space-x-8 text-xs font-sans font-bold py-5">
      <a class="hover:border-b border-black" href="#allcategories">
        All categories 👇
      </a>
      <a class="hover:border-b border-black" href="#bestsellers">
        Best sellers
      </a>
      <a class="hover:border-b border-black" href="#newestitems">
        Newest items
      </a>
      <a class="hover:border-b border-black" href="#bulletjurnal">
        Bullet Jurnal
      </a>
      <a class="hover:border-b border-black" href="#tsuki">
        Tsuki 🌙
      </a>
      <a class="hover:border-b border-black" href="#hinoki">
        Hinoki 🌲
      </a>
      <a class="hover:border-b border-black" href="#seasonallaunches">
        Seasonal Launches
      </a>
    </div>
  );
}
