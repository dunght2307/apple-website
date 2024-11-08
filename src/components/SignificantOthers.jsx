import React, { useState } from "react";
import { downImg } from "../utils";
import { SignificantOthersList } from "../constants";
import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";

const SignificantOthers = () => {
  useGSAP(() => {
    animateWithGsap("#significantOthersTitle", {
      y: 0,
      opacity: 1,
    });
  }, []);
  const [current, setCurrent] = useState(1);
  const handleClick = (item) => {
    setCurrent(item.id);
  };
  return (
    <section className="section-pt bg-zinc">
      <div className="viewport-content">
        <div className="flex flex-col items-start mb-12 sm:mb-16 lg:mb-20">
          <h2 id="significantOthersTitle" className="section-heading">
            Significant others.
          </h2>
        </div>
        <div className="w-full bg-black rounded-3xl py-16 p-5 lg:px-[10%]">
          <div className="flex items-center gap-10">
            <ul className="w-full lg:max-w-[350px] flex-center flex-col border_list gap-4">
              {SignificantOthersList.map((item, index) => (
                <li key={index} className="flex flex-col overflow-hidden">
                  <div
                    className="flex justify-between items-center pt-8 pb-4"
                    onClick={() => handleClick(item)}
                  >
                    <h3 className="text-2xl lg:text-3xl font-semibold">
                      {item.title}
                    </h3>

                    <img
                      src={downImg}
                      alt="prev"
                      className={`max-w-[25px] h-[25px] transition-all ease-in-out duration-500 ${
                        current === index + 1
                          ? "[transform:rotateX(180deg)]"
                          : ""
                      }`}
                    />
                  </div>
                  <div
                    className={`transition-all ease-in-out duration-700 ${
                      current === index + 1 ? "max-h-[800px]" : "max-h-0"
                    }`}
                  >
                    <p
                      id="description"
                      className={`text-gray text-sm lg:text-lg pr-[25px] transition-all ease-in-out duration-500`}
                    >
                      {item.desc}
                    </p>
                    <div className="lg:hidden flex-center mt-4">
                      <img
                        src={item.img}
                        className={`${
                          current === index + 1 ? "max-h-[300px]" : "max-h-0"
                        }`}
                        alt=""
                      />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="hidden lg:flex-center flex-1 ">
              {SignificantOthersList.map((item, index) => (
                <img
                  key={index}
                  src={item.img}
                  alt=""
                  className={`${
                    current === index + 1
                      ? "block animate-[fadeAnimation_1s_ease-in-out] "
                      : "hidden"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignificantOthers;
