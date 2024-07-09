import { appleImg, bagImg, searchImg } from "../utils";
import { nav1Lists, nav2Lists } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [nav2, setNav2] = useState(false);
  const [subNav2, setSubNav2] = useState(1);
  window.addEventListener("scroll", () => {
    window.scrollY >= 300 ? setNav2(true) : setNav2(false);
  });
  return (
    <header className="w-full relative">
      <div className="h-[44px]">
        <nav className="flex justify-between items-center max-w-[1024px] w-full mx-auto px-5">
          <img
            src={appleImg}
            alt="apple"
            width={14}
            height={18}
            className="py-[13px] cursor-pointer"
          />
          {nav1Lists.map((nav, i) => (
            <div
              key={i}
              className="py-[14px] text-xs cursor-pointer text-[#cccccc] hover:text-white transition-all lg:block hidden mt-1"
            >
              {nav.name}
            </div>
          ))}
          <div className="flex items-center gap-4">
            <div className="p-[14px] cursor-pointer">
              <img src={searchImg} width={16} height={16} alt="search" />
            </div>
            <div className="p-[14px] cursor-pointer">
              <img src={bagImg} alt="bag" width={16} height={16} />
            </div>
          </div>
        </nav>
      </div>

      <div
        className={`bg-[#161617cc]/80 w-full fixed left-0 right-0 z-[1000] h-[52px] border-b-[1px] border-[#4b4b4b] transition-all ease-linear duration-1000 backdrop-saturate-100 backdrop-blur ${
          nav2 ? "top-0" : "-top-full"
        }`}
      >
        <nav className="flex justify-between items-center max-w-[1024px] w-full h-full mx-auto px-5">
          <div>
            <a href="" className="text-xl">
              iPhone 16 Pro
            </a>
          </div>
          <div className="flex items-center gap-5">
            <ul className="flex items-center gap-5">
              {nav2Lists.map((nav, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className={`text-xs py-[18px] ${
                      subNav2 === i + 1 ? "border-b-[1px] border-white-90" : ""
                    }`}
                    onClick={() => setSubNav2(i + 1)}
                  >
                    {nav}
                  </a>
                </li>
              ))}
            </ul>
            <div>
              <a href="" className="text-xs bg-blue py-2 px-4 rounded-3xl">
                Buy
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
