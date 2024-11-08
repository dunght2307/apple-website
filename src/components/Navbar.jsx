import {
  accountIcon,
  appleImg,
  arrowRightIcon,
  bagImg,
  bars2Icon,
  chevronDownIcon,
  chevronLeftIcon,
  orderIcon,
  saveIcon,
  savesIcon,
  searchImg,
  signinIcon,
  xCircleIcon,
  xMarkIcon,
} from "../utils";
import { nav1Lists, nav2Lists, quickLinks } from "../constants";
import { useState } from "react";

const Navbar = () => {
  const [subNavLink, setSubNavLink] = useState(false);
  const [nav2, setNav2] = useState(false);
  const [subNav2, setSubNav2] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openSubNav, setOpenSubNav] = useState(false);
  const [subNav, setSubNav] = useState();
  const [openSubLink, setOpenSubLink] = useState(false);

  window.addEventListener("scroll", () => {
    window.scrollY >= 300 ? setNav2(true) : setNav2(false);
  });

  return (
    <header className="w-full absolute z-[2000] top-0 left-0">
      {/* Navbar 1 */}
      <div
        className={`w-full h-[44px] transition-all duration-200 ${
          subNavLink || openSearch || openCart ? "bg-zinc" : "bg-transparent"
        }`}
      >
        <nav className="flex justify-between items-center max-w-[1024px] w-full h-[44px] mx-auto px-4 lg:px-5  ">
          <div className="p-[12px] -ml-[12px] cursor-pointer mb-1">
            <img src={appleImg} alt="apple" width={14} height={18} />
          </div>
          {nav1Lists.map((nav, i) => (
            <div
              key={i}
              className="group"
              onMouseOver={() => setSubNavLink(true)}
              onMouseOut={() => setSubNavLink(false)}
            >
              <div className="py-[14px] text-xs cursor-pointer text-[#cccccc] hover:text-white transition-all lg:block hidden">
                {nav.name}
              </div>
              {nav.subLinks && (
                <div className="bg-zinc absolute z-[999] left-0 right-0 top-full hidden animate-[fadeAnimation_500ms_ease-in-out] group-hover:flex-center">
                  <div className="w-full max-w-[1024px] pt-10 pb-20 px-5 flex items-start flex-row gap-20 ">
                    {nav.subLinks.map((links, i) => (
                      <div key={i} className=" ">
                        <h2 className="text-xs text-gray mb-5">{links.head}</h2>
                        <ul className="flex gap-2 flex-col">
                          {links.headLink?.map((link, i) => (
                            <li key={i}>
                              <a
                                href=""
                                className="text-2xl font-semibold text-white/80 hover:text-white"
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
          <div className="flex items-center -mr-3">
            <div
              onMouseLeave={() => {
                setOpenSearch(false);
              }}
            >
              <div
                className="h-[44px] px-3 cursor-pointer"
                onClick={() => setOpenSearch(!openSearch)}
              >
                <img
                  src={searchImg}
                  width={14}
                  height={14}
                  alt="search"
                  className="h-full"
                />
              </div>
              <div
                className={`bg-zinc absolute z-[999] left-0 right-0 lg:top-full top-0 animate-[fadeAnimation_500ms_ease-in-out]  ${
                  openSearch ? "flex-center" : "hidden"
                }`}
              >
                <div
                  className="absolute top-3 right-4 opacity-90 lg:hidden"
                  onClick={() => {
                    setOpenSearch(false);
                  }}
                >
                  <img src={xMarkIcon} width={25} height={25} alt="" />
                </div>
                <div className="w-full max-w-[1024px] pt-10 pb-20 lg:px-5 flex items-start flex-row gap-20 px-12 lg:h-full h-screen">
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
                        id="search"
                        placeholder="Search"
                        autoCorrect="off"
                        autoCapitalize="off"
                        autoComplete="off"
                        type="text"
                        className="w-full flex-1 h-[40px] text-2xl font-semibold border-none outline-none bg-transparent color-[#E8E8ED]"
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
                    <h2 className="lg:text-xs text-gray mb-3 pt-6">
                      Quick Links
                    </h2>
                    <ul className="flex gap-3 flex-col">
                      {quickLinks.map((link, i) => (
                        <li key={i}>
                          <a
                            href=""
                            className="lg:text-xs font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
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
                className="h-[44px] px-3 cursor-pointer ml-3"
                onClick={() => setOpenCart(!openCart)}
              >
                <img
                  src={bagImg}
                  alt="bag"
                  width={15}
                  height={15}
                  className="h-full"
                />
              </div>

              <div
                className={`bg-zinc absolute z-[999] left-0 right-0 lg:top-full top-0 animate-[fadeAnimation_500ms_ease-in-out]  ${
                  openCart ? "flex-center" : "hidden"
                }`}
              >
                <div
                  className="absolute top-3 right-4 opacity-90 lg:hidden"
                  onClick={() => {
                    setOpenCart(false);
                  }}
                >
                  <img src={xMarkIcon} width={25} height={25} alt="" />
                </div>
                <div className="w-full max-w-[1024px] pt-10 pb-20 lg:px-5 flex items-start flex-row gap-20 px-12 lg:h-full h-screen">
                  <div className="w-full">
                    <div className="flex flex-col items-start">
                      <h2 className="text-2xl font-semibold">
                        Your Bag is empty.
                      </h2>
                      <div className="my-8">
                        <a href="" className="text-blue underline lg:text-xs ">
                          Sign in
                        </a>{" "}
                        to see if you have any saved items
                      </div>
                    </div>
                    <h3 className="lg:text-xs text-gray mb-3">My Profile</h3>
                    <ul className="flex gap-2 flex-col">
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
              onMouseLeave={() => {
                setOpenSubNav(false);
              }}
            >
              <div
                className="px-3 h-[44px] cursor-pointer lg:hidden ml-3"
                onClick={() => setOpenSubNav(!openSubNav)}
              >
                <img
                  src={bars2Icon}
                  width={19}
                  height={19}
                  alt="bars"
                  className="h-full"
                />
              </div>
              {/* NavBar Mobile */}
              <div
                className={`bg-zinc absolute z-[1001] left-0 right-0 lg:top-full top-0 animate-[fadeAnimation_500ms_ease-in-out] ${
                  openSubNav ? "flex-center" : "hidden"
                }`}
              >
                <div
                  className="absolute top-3 right-4 opacity-90 lg:hidden"
                  onClick={() => {
                    setOpenSubNav(false);
                  }}
                >
                  <img src={xMarkIcon} width={25} height={25} alt="" />
                </div>
                <div className="w-full max-w-[1024px] pt-10 pb-20 lg:px-5 flex items-start flex-row gap-20 px-12 h-full">
                  <div className="w-full">
                    <div className="pt-6 flex gap-3 flex-col">
                      {nav1Lists.map((nav, i) => (
                        <div key={i}>
                          <div
                            href=""
                            className="text-3xl font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
                            onClick={() => setSubNav(nav.id)}
                          >
                            {nav.name}
                          </div>
                          {/* SubNavBar */}
                          <div
                            className={`bg-zinc absolute z-[999] left-0 right-0 top-0 animate-[fadeAnimation_500ms_ease-in-out] ${
                              subNav === i + 1 ? "block" : "hidden"
                            }`}
                          >
                            <div
                              className="absolute top-3 left-4 opacity-90 lg:hidden"
                              onClick={() => {
                                setSubNav(false);
                              }}
                            >
                              <img
                                src={chevronLeftIcon}
                                width={25}
                                height={25}
                                alt=""
                              />
                            </div>
                            <div
                              className="absolute top-3 right-4 opacity-90 lg:hidden"
                              onClick={() => {
                                setOpenSubNav(false);
                                setSubNav("");
                              }}
                            >
                              <img
                                src={xMarkIcon}
                                width={25}
                                height={25}
                                alt=""
                              />
                            </div>
                            <div className="w-full pt-10 pb-20 flex items-start flex-row gap-20 px-12 h-full">
                              <div className="pt-6 flex gap-10 flex-col">
                                {nav.subLinks.map((subLink, i) => (
                                  <div key={i} className="flex flex-col gap-3">
                                    <h2 className="text-gray mb-2">
                                      {subLink.head}
                                    </h2>
                                    {subLink.headLink?.map((link, i) => (
                                      <a
                                        key={i}
                                        href=""
                                        className="text-3xl font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
                                      >
                                        {link}
                                      </a>
                                    ))}
                                    {subLink.subLink?.map((link, i) => (
                                      <a
                                        key={i}
                                        href=""
                                        className="font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
                                      >
                                        {link}
                                      </a>
                                    ))}
                                    {subLink.footer?.map((link, i) => (
                                      <a
                                        key={i}
                                        href=""
                                        className="font-semibold text-white/80 hover:text-white flex items-center gap-3 group transition-all"
                                      >
                                        {link}
                                      </a>
                                    ))}
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`absolute z-[900] top-full left-0 right-0 h-[200vh] backdrop-saturate-100 backdrop-blur-lg transition-all animate-[fadeAnimation_500ms_ease-in-out] ${
                openCart || openSearch || openSubNav ? "block" : "hidden"
              }`}
            ></div>
          </div>
        </nav>
      </div>

      {/* Navbar 2 */}
      <div
        className={`bg-[#161617cc]/80 fixed left-0 right-0 z-[1000] h-[52px] border-b-[1px] border-[#4b4b4b] transition-all ease-linear duration-500 ${
          openSubLink ? "bg-zinc" : "backdrop-saturate-100 backdrop-blur-lg"
        } ${nav2 ? "top-0" : "-top-full"}`}
      >
        <nav className="flex justify-between items-center max-w-[1024px] w-full h-full mx-auto lg:px-5 px-4">
          <div>
            <a href="" className="text-xl font-semibold">
              iPhone 16 Pro
            </a>
          </div>
          <div className="flex items-center gap-6">
            <ul className="items-center gap-6 lg:flex hidden">
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
            <div
              className="lg:hidden"
              onMouseLeave={() => {
                setOpenSubLink(false);
              }}
            >
              <div
                className="h-[51px] px-4 -mr-6"
                onClick={() => setOpenSubLink(!openSubLink)}
              >
                <img
                  src={chevronDownIcon}
                  width={19}
                  height={19}
                  alt=""
                  className="h-full"
                />
              </div>
              <div
                className={`absolute z-[999] top-full left-0 right-0 bg-zinc w-full animate-[fadeAnimation_500ms_ease-in-out] ${
                  openSubLink ? "block" : "hidden"
                }`}
              >
                <ul className="gap-2 flex flex-col px-4 py-5">
                  {nav2Lists.map((nav, i) => (
                    <li key={i} className="w-full">
                      <a
                        href="#"
                        className={`inline-block w-full relative text-sm py-2 px-4  ${
                          subNav2 === i + 1
                            ? "after:content-[''] after:absolute after:top-[11px] after:left-0 after:h-[12px] after:w-[1px] after:bg-white"
                            : ""
                        }`}
                        onClick={() => setSubNav2(i + 1)}
                      >
                        {nav}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className={`absolute z-[900] top-full left-0 right-0 h-[100vh] backdrop-saturate-100 backdrop-blur-lg animate-[fadeAnimation_100ms_ease-in-out] ${
                openSubLink && nav2 ? "block" : "hidden"
              }`}
            ></div>
            <div>
              <a href="" className="text-xs bg-blue py-1 px-3 rounded-3xl">
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
