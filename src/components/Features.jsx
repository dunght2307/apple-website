import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import {
  explore1Img,
  explore2Img,
  exploreVideo,
  featureImg,
  featureVideo,
  nextImg,
  prevImg,
} from "../utils";
import gsap from "gsap";
import { FeatureList } from "../constants";
import { useState } from "react";

const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "restart reverse restart reverse",
        start: "top 80%",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap("#features_title", {
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
    <section className="section-pt">
      <div className="mb-20 w-full">
        <h2
          id="features_title"
          className="section-heading-2 text-center text-orange-100 opacity-0 translate-y-20"
        >
          Strength. Beauty.
          <br />
          <span className="text-glow">Titanium.</span>
        </h2>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className="h-full w-full flex-center overflow-hidden">
          <video
            id="exploreVideo"
            className="lg:max-w-full sm:max-w-[200%] md:block hidden"
            preload="none"
            muted
            autoPlay
            playsInline
            ref={videoRef}
          >
            <source src={featureVideo} type="video/mp4" />
          </video>
          <img
            src={featureImg}
            alt=""
            className="md:hidden block max-w-[120%]"
          />
        </div>
      </div>
      <div className="bg-gradient">
        <div className="viewport-content">
          <div className="screen-max-width">
            <div className="text-container">
              <div className="flex-1">
                <p className="text-content">
                  iPhone 16 Pro features a Grade 5 titanium design with a new,
                  refined microblasted finish. Titanium has one of the highest
                  strength-to-weight ratios of any metal, making these models{" "}
                  <span className="text-white">
                    incredibly strong and impressively light.
                  </span>{" "}
                  iPhone 16 Pro comes in four stunning colors — including new
                  Desert Titanium.
                </p>
              </div>
              <div className="flex-1">
                <p className="text-content">
                  Internal design improvements — including a 100 percent
                  recycled aluminum thermal substructure and back glass
                  optimizations that further dissipate heat — enable up to 20
                  percent{" "}
                  <span className="text-white">
                    better sustained performance
                  </span>{" "}
                  than iPhone 15 Pro. So you can do all the things you love —
                  like high-intensity gaming — for longer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul
          className="flex gap-6 scroll-smooth overflow-x-auto 
            snap-x snap-mandatory no-scrollbar px-[14%]
          "
          ref={scrollContainerRef}
        >
          {FeatureList.map((item, index) => (
            <li
              key={index}
              className="w-[280px] sm:w-[450px] lg:w-[550px] snap-center cursor-pointer shrink-0"
              ref={scrollItemRef}
            >
              <img src={item.img} alt="" className="w-full rounded-3xl" />

              <p className="p-5 sm:p-8 text-orange-200 text-lg font-semibold">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
        <div className="viewport-content">
          <div className="flex items-center justify-end lg:mt-16 sm:mt-10 mt-8">
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
              disabled={FeatureList.length === current}
              className={`bg-[#333336] rounded-full flex-center ${
                current === FeatureList.length
                  ? "opacity-40"
                  : "opacity-90 hover:opacity-100 "
              }`}
            >
              <img src={nextImg} alt="next" className="max-w-[36px] h-[36px]" />
            </button>
          </div>

          <div className="screen-max-width">
            <div className="text-container">
              <div className="flex-1">
                <p className="text-content">
                  New display technology allows us to route display data under
                  active pixels with no distortion, resulting in thinner borders
                  for larger 6.3-inch and 6.9-inch{" "}
                  <span className="text-white">Super Retina XDR displays</span>{" "}
                  that feel great in the hand.
                </p>
              </div>
              <div className="flex-1">
                <p className="text-content">
                  iPhone 16 Pro is splash, water, and dust resistant.
                  <a href="#footnote-5" className="font-feature-settings">
                    4
                  </a>{" "}
                  It also has our latest-generation Ceramic Shield material
                  that’s{" "}
                  <span className="text-white">
                    two times tougher than any smartphone glass
                  </span>{" "}
                  Talk about durable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
