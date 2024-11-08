import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { animateWithGsap } from "../utils/animations";
import { heroIos18Img, nextImg, prevImg, rightImg } from "../utils";
import { iosList } from "../constants";

const Ios18 = () => {
  useGSAP(() => {
    animateWithGsap("#iosTitle", {
      y: 0,
      opacity: 1,
    });
  }, []);
  const scrollContainerRef = useRef(null);
  const scrollItemRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const next = () => {
    const container = scrollContainerRef.current;
    const item = scrollItemRef.current;
    if (container) {
      const nextScrollLeft = container.scrollLeft + item.offsetWidth;
      container.scrollTo({
        left: nextScrollLeft,
      });
    }
    current < FeatureList.length
      ? setCurrent(current + 1)
      : setCurrent(FeatureList.length);
  };
  const prev = () => {
    const container = scrollContainerRef.current;
    const item = scrollItemRef.current;
    if (container) {
      const nextScrollLeft = container.scrollLeft - item.offsetWidth;
      container.scrollTo({
        left: nextScrollLeft,
      });
    }
    current > 1 ? setCurrent(current - 1) : setCurrent(1);
  };

  return (
    <section className="section black-bg-gradient-2">
      <div className="viewport-content">
        <div className="flex-center">
          <h4
            id="iosTitle"
            className="section-heading-2 text-center text-orange-100 opacity-0 translate-y-20"
          >
            <span className="text-glow">iOS 18.</span>
            <br />
            Customize. Stylize.
            <br /> Mesmerize.
          </h4>
        </div>
      </div>
      <div className="mt-28 flex-center w-full">
        <img src={heroIos18Img} alt="" className="lg:max-w-full max-w-[150%]" />
      </div>
      <div className="relative">
        <ul
          className="flex gap-6 scroll-smooth overflow-x-auto 
            snap-x snap-mandatory no-scrollbar px-[12.5%]
          "
          ref={scrollContainerRef}
        >
          {iosList.map((item, index) => (
            <li
              key={index}
              className="w-[280px] sm:w-[450px] lg:w-[550px] snap-center cursor-pointer shrink-0"
              ref={scrollItemRef}
            >
              <img src={item.img} alt="" className="w-full rounded-3xl" />

              <p className="p-5 sm:py-8 sm:px-10 text-gray text-lg font-semibold">
                <span className="text-white">{item.title[0]} </span>
                {item.title[1]}
              </p>
            </li>
          ))}
        </ul>
        <div className="viewport-content flex items-center justify-end lg:mt-16 sm:mt-10 mt-8">
          <button
            onClick={() => prev()}
            disabled={current === 1}
            className={`bg-[#333336] rounded-full flex-center mr-[15px]  ${
              current === 1 ? "opacity-40" : "opacity-90 hover:opacity-100"
            }`}
          >
            <img src={prevImg} alt="prev" className="max-w-[36px] h-[36px]" />
          </button>
          <button
            onClick={() => next()}
            disabled={iosList.length === current}
            className={`bg-[#333336] rounded-full flex-center ${
              current === iosList.length
                ? "opacity-40"
                : "opacity-90 hover:opacity-100 "
            }`}
          >
            <img src={nextImg} alt="next" className="max-w-[36px] h-[36px]" />
          </button>
        </div>
      </div>
      <div className="viewport-content">
        <a className="link lg:mt-16 mt-12 justify-center">
          Learn more about iOS 18
          <img src={rightImg} alt="" className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Ios18;
