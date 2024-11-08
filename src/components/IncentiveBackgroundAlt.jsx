import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { animateWithGsap } from "../utils/animations";
import { nextImg, prevImg, rightImg } from "../utils";
import { IncentiveBackgroundAltList } from "../constants";

const IncentiveBackgroundAlt = () => {
  useGSAP(() => {
    // gsap.to("#title", { opacity: 1, y: 0 });
    animateWithGsap("#titleIncentiveBackgroundAlt", {
      opacity: 1,
      y: 0,
    });
    // gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
    animateWithGsap(".linkIncentiveBackgroundAlt", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.25,
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
    <section className="section-pt bg-zinc">
      <div className="viewport-content">
        <div className="mb-12 sm:mb-16 lg:mb-20 w-full lg:flex items-end justify-between">
          <h2
            id="titleIncentiveBackgroundAlt"
            className="section-heading flex-1"
          >
            Why Apple is the best
            <br /> place to buy iPhone.
          </h2>
          <div className="flex flex-wrap items-end mt-5 lg:mt-0">
            <a className="link linkIncentiveBackgroundAlt opacity-0 translate-y-20">
              Shop iPhone
              <img src={rightImg} alt="watch" className="ml-2 inline" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <ul
          className="flex gap-6 scroll-smooth overflow-x-auto 
            snap-x snap-mandatory no-scrollbar px-[150px]
          "
          ref={scrollContainerRef}
        >
          {IncentiveBackgroundAltList.map((item, index) => (
            <li
              key={index}
              className="w-[280px] lg:w-[380px] bg-black p-8 rounded-3xl relative pb-12 snap-center cursor-pointer shrink-0"
              ref={scrollItemRef}
            >
              <img src={item.icon} alt="" />
              <h3 className="text-xl lg:text-2xl font-semibold py-5">
                {item.title}
              </h3>
              <p>{item.desc}</p>
              <div className="flex-center absolute bottom-5 right-5 w-[36px] h-[36px] bg-[#e8e8ec] rounded-full">
                <img src={item.btn} alt="" />
              </div>
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
            disabled={IncentiveBackgroundAltList.length === current}
            className={`bg-[#333336] rounded-full flex-center ${
              current === IncentiveBackgroundAltList.length
                ? "opacity-40"
                : "opacity-90 hover:opacity-100 "
            }`}
          >
            <img src={nextImg} alt="next" className="max-w-[36px] h-[36px]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default IncentiveBackgroundAlt;
