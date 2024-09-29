import {
  accountIcon,
  appleImg,
  arrowRightIcon,
  bagImg,
  orderIcon,
  saveIcon,
  savesIcon,
  searchImg,
  signinIcon,
  xCircleIcon,
} from "../utils";
import { nav1Lists, nav2Lists, quickLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [nav2, setNav2] = useState(false);
  const [subNav2, setSubNav2] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY >= 300 ? setNav2(true) : setNav2(false);
  });

  return (
    <header className="w-full relative">
      <div className="h-[44px]">
        <nav className="flex justify-between items-center max-w-[1024px] w-full mx-auto px-5 ">
          <img
            src={appleImg}
            alt="apple"
            width={14}
            height={18}
            className="py-[12px] cursor-pointer mb-1"
          />
          {nav1Lists.map((nav, i) => (
            <div key={i} className="group">
              <div className="py-[14px] text-xs cursor-pointer text-[#cccccc] hover:text-white transition-all lg:block hidden">
                {nav.name}
              </div>
              {nav.subLinks && (
                <div className="bg-zinc absolute z-[999] left-0 right-0 top-full hidden animate-[fadeAnimation_500ms_ease-in-out] group-hover:flex-center">
                  <div className="w-full max-w-[1024px] pt-10 pb-20 px-5 flex items-start flex-row gap-20 ">
                    {nav.subLinks.map((links, i) => (
                      <div key={i} className=" ">
                        <ul>
                          <h2 className="text-xs text-gray mb-5">
                            {links.head}
                          </h2>
                          {links.headLink?.map((link, i) => (
                            <li key={i}>
                              <a
                                href=""
                                className="text-2xl font-semibold text-white/80 hover:text-white "
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                          {links.footer?.map((link, i) => (
                            <li key={i}>
                              <a
                                href=""
                                className="text-xs font-semibold text-white/80 hover:text-white "
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                          {links.subLink?.map((link, i) => (
                            <li key={i}>
                              <a
                                href=""
                                className="text-xs text-white/80 hover:text-white"
                              >
                                {link}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-4">
            <div
              onMouseLeave={() => {
                setOpenSearch(false);
              }}
            >
              <div
                className="p-[14px] cursor-pointer"
                onClick={() => setOpenSearch(!openSearch)}
              >
                <img src={searchImg} width={16} height={16} alt="search" />
              </div>
              <div
                className={`bg-zinc absolute z-[999] left-0 right-0 top-full animate-[fadeAnimation_500ms_ease-in-out]  ${
                  openSearch ? "flex-center" : "hidden"
                }`}
              >
                <div className="w-full max-w-[1024px] pt-10 pb-20 px-5 flex items-start flex-row gap-20 ">
                  <div className="w-full">
                    <div className="flex flex-row items-center gap-2">
                      <button className="p-2 -ml-2">
                        <img
                          src={searchImg}
                          width={20}
                          height={20}
                          alt=""
                          className="opacity-80"
                        />
                      </button>
                      <input
                        placeholder="Search apple.com"
                        aria-label="Search apple.com"
                        autoCorrect="off"
                        autoCapitalize="off"
                        autoComplete="off"
                        type="text"
                        className="flex-1 h-[40px] text-2xl font-semibold border-none outline-none bg-transparent color-[#E8E8ED]"
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <button
                        className={`p-2 animate-[fadeAnimation_500ms_ease-in-out] ${
                          inputValue ? "block" : "hidden"
                        }`}
                        onClick={() => {
                          setInputValue("");
                        }}
                      >
                        <img src={xCircleIcon} alt="" />
                      </button>
                    </div>
                    <ul className="pt-6 flex gap-2 flex-col">
                      <h2 className="text-xs text-gray mb-2">Quick Links</h2>
                      {quickLinks.map((link, i) => (
                        <li key={i}>
                          <a
                            href=""
                            className="text-xs font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
                          >
                            <img
                              src={arrowRightIcon}
                              alt=""
                              className="opacity-80 group-hover:opacity-100 transition-all"
                            />

                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              onMouseLeave={() => {
                setOpenCart(false);
              }}
            >
              <div
                className="p-[13px] cursor-pointer"
                onClick={() => setOpenCart(!openCart)}
              >
                <img src={bagImg} alt="bag" width={16} height={16} />
              </div>
              <div
                className={`bg-zinc absolute z-[999] left-0 right-0 top-full animate-[fadeAnimation_500ms_ease-in-out]  ${
                  openCart ? "flex-center" : "hidden"
                }`}
              >
                <div className="w-full max-w-[1024px] pt-10 pb-20 px-5 flex items-start flex-row gap-20 ">
                  <div className="w-full">
                    <div className="flex flex-col items-start gap-4">
                      <h2 className="text-2xl font-semibold">
                        Your Bag is empty.
                      </h2>
                      <div>
                        <a href="">Sign in</a> to see if you have any saved
                        items
                      </div>
                    </div>
                    <ul className="pt-6 flex gap-2 flex-col">
                      <h3 className="text-xs text-gray mb-2">My Profile</h3>

                      <li>
                        <a
                          href=""
                          className="text-xs font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
                        >
                          <img
                            src={orderIcon}
                            alt=""
                            className="opacity-80 group-hover:opacity-100 transition-all"
                          />
                          Orders
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-xs font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
                        >
                          <img
                            src={savesIcon}
                            alt=""
                            className="opacity-80 group-hover:opacity-100 transition-all"
                          />
                          Your Saves
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-xs font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
                        >
                          <img
                            src={accountIcon}
                            alt=""
                            className="opacity-80 group-hover:opacity-100 transition-all"
                          />
                          Account
                        </a>
                      </li>
                      <li>
                        <a
                          href=""
                          className="text-xs font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
                        >
                          <img
                            src={signinIcon}
                            alt=""
                            className="opacity-80 group-hover:opacity-100 transition-all"
                          />
                          SignIn
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`absolute z-[900] top-full left-0 right-0 h-[200vh] backdrop-blur-lg transition-all animate-[fadeAnimation_500ms_ease-in-out] ${
                openCart ? "block" : "hidden"
              }`}
            ></div>
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
