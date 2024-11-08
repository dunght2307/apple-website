import React, { useRef, useState } from "react";
import {
  heroCameraImg,
  heroCameraMbImg,
  heroCameraScreenMbImg,
  heroCameraScreenZoomImg,
  heroCameraScreenZoomMbImg,
  lensVideo,
  macroImg,
  nextImg,
  prevImg,
} from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ZommGalleryList } from "../constants";
import Button from "./Button";

const ZoomGallery = () => {
  useGSAP(() => {
    gsap.to("#headingZoomGallery", {
      opacity: 0,
      y: -100,
      duration: 4,
      scrollTrigger: {
        trigger: "#headingZoomGallery",
        start: "50% 50%",
        end: "50% 25%",
        scrub: 2,
        // markers: true,
      },
    });

    gsap.to("#heroZoomGallery", {
      scale: 1,
      opacity: 1,
      duration: 4,
      scrollTrigger: {
        trigger: "#heroZoomGallery",
        start: "50% 75%",
        end: "50% 50%",
        scrub: 2,
        // markers: true,
      },
    });
  }, []);

  const [current, setCurrent] = useState(2);
  const containerRef = useRef(null);
  const itemRef = useRef(null);
  const nextRef = useRef(null);
  const prevRef = useRef(null);

  const handleIcons = (width) => {
    const maxScrollWidth =
      containerRef.current.scrollWidth - containerRef.current.clientWidth;
    nextRef.current.style.display =
      maxScrollWidth - width <= 1 ? "none" : "block";
    prevRef.current.style.display = width <= 0 ? "none" : "block";
  };

  const handleNext = () => {
    const nextScrollLeft =
      containerRef.current.scrollLeft + itemRef.current.offsetWidth;
    handleIcons(nextScrollLeft);
    containerRef.current.scrollTo({
      left: nextScrollLeft,
    });
    current < ZommGalleryList.length
      ? setCurrent(current + 1)
      : setCurrent(ZommGalleryList.length);
  };
  const handlePrev = () => {
    const nextScrollLeft =
      containerRef.current.scrollLeft - itemRef.current.offsetWidth;
    handleIcons(nextScrollLeft);
    containerRef.current.scrollTo({
      left: nextScrollLeft,
    });
    current > 1 ? setCurrent(current - 1) : setCurrent(1);
  };

  window.onload = () => {
    nextRef.current.style.display =
      containerRef.current.scrollWidth > containerRef.current.clientWidth ||
      containerRef.current.scrollWidth >= window.innerWidth
        ? "block"
        : "none";
  };

  window.onresize = () => {
    nextRef.current.style.display =
      containerRef.current.scrollWidth > containerRef.current.clientWidth ||
      containerRef.current.scrollWidth >= window.innerWidth
        ? "block"
        : "none";
  };
  return (
    <section className="section">
      <div className="w-full h-[100vh] relative overflow-hidden items-center justify-center md:flex hidden">
        <div
          id="headingZoomGallery"
          className="screen-max-width absolute z-[2] top-0 h-full flex-center"
        >
          <h4 className="section-heading-2 text-center">
            New 48MP
            <br /> Ultra Wide camera.
            <br /> Viva la resolution.
          </h4>
        </div>
        <div
          id="heroZoomGallery"
          className="w-[80%] lg:screen-max-width absolute z-[1] bottom-0 opacity-70 scale-[5]"
        >
          <div className="relative overflow-hidden z-[2] w-full">
            <img src={heroCameraImg} alt="" />
          </div>
          <div className="absolute top-[4%] left-[2%] rounded-[5%/10%] z-[1] w-[96.5%] overflow-hidden">
            <img src={heroCameraScreenZoomImg} alt="" />
          </div>
        </div>
      </div>

      <div className="w-full items-center justify-center flex sm:hidden flex-col">
        <div
          className="w-full min-h-[480px] flex-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroCameraMbImg})` }}
        >
          <h4 className="section-heading-2 text-center">
            4K 120 fps
            <br className="lg:hidden block" /> Dolby Vision.
            <br /> Cinemasterful.
          </h4>
        </div>
        <div className="w-[50%] relative min-h-[420px] mt-10">
          <div className="absolute z-[2] top-0 w-full">
            <img src={heroCameraScreenMbImg} alt="" />
          </div>
          <div className="absolute top-0 left-[3%] rounded-[5%/10%] z-[1] w-[94.5%] overflow-hidden">
            <img src={heroCameraScreenZoomMbImg} alt="" />
          </div>
        </div>
      </div>
      <div className="viewport-content">
        <div className="screen-max-width">
          <div className="text-container lg:my-28 sm:my-20 my-16">
            <div className="flex-1">
              <p className="text-content">
                iPhone 16 Pro adds a second 48MP camera to the Pro camera
                system. The new 48MP Ultra Wide camera has a more advanced
                quad-pixel sensor for super-high-resolution 48MP ProRAW and HEIF
                photos with autofocus.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-content">
                So you can{" "}
                <span className="text-white">
                  capture a mesmerizing new level of detail
                </span>{" "}
                in macro photos and sweeping, wide-angle shots.
              </p>
            </div>
          </div>

          <div className="flex-center flex-col">
            {ZommGalleryList.map((item, index) => (
              <div
                key={index}
                className={`${
                  current === item.id
                    ? "block animate-[fadeAnimation_400ms_ease-in-out]"
                    : "hidden"
                }`}
              >
                <img src={item.img} alt="" />
              </div>
            ))}
            <div className="p-[6px] bg-[#333336] rounded-[999px] mt-10 max-w-full relative">
              <div
                className={`absolute z-[2] top-[6px] right-[5px] p-[10px] bg-[#333336] cursor-pointer rounded-[999px]
                }`}
                onClick={() => handleNext()}
                ref={nextRef}
              >
                <img src={nextImg} width={24} height={24} alt="" />
              </div>
              <div
                className={`hidden absolute z-[2] top-[6px] left-[5px] p-[10px] bg-[#333336] cursor-pointer rounded-[999px]
                }`}
                onClick={() => handlePrev()}
                ref={prevRef}
              >
                <img src={prevImg} width={24} height={24} alt="" />
              </div>
              <ul
                className="flex item-center relative z-[1] scroll-smooth overflow-x-auto 
            snap-x snap-mandatory no-scrollbar"
                ref={containerRef}
                onScroll={(e) => handleIcons(e.target.scrollLeft)}
              >
                {ZommGalleryList.map((item, index) => (
                  <li
                    key={index}
                    className={`flex-center min-w-[80px] md:min-w-[100px] h-[44px] px-3 text-sm md:text-lg opacity-80 hover:opacity-100 z-[2] cursor-pointer transition-all duration-500 ${
                      current === item.id ? "text-black" : "text-white"
                    }`}
                    onClick={() => setCurrent(item.id)}
                    ref={itemRef}
                  >
                    {item.title}
                  </li>
                ))}
                <div
                  className="absolute z-[1] top-0 left-0 w-[80px] md:w-[100px] h-[44px] bg-[#f5f5f7] rounded-[999px] transition-all duration-500"
                  style={{ transform: `translateX(${100 * (current - 1)}%)` }}
                ></div>
              </ul>
            </div>
            <div className="lg:mt-8 mt-4">
              {ZommGalleryList.map((item, index) => (
                <p
                  key={index}
                  className={`text-gray text-sm md:text-lg font-semibold ${
                    current === item.id
                      ? "block animate-[fadeAnimation_400ms_ease-in-out]"
                      : "hidden"
                  }`}
                >
                  <span className="text-white">{item.des[0]}</span>{" "}
                  {item.des[1]}
                </p>
              ))}
            </div>
          </div>

          <div className="w-full text-container mt-32">
            <div className="flex-1 my-auto">
              <p className="text-content">
                More zoom? Boom. Now you can shoot in 120 mm with the 5x
                Telephoto camera on both Pro models and get{" "}
                <span className="text-white">
                  sharper close-ups from farther away
                </span>
                . With multiple framing options, it’s like having seven pro
                lenses in your pocket, everywhere you go.
              </p>
            </div>
            <div className="flex-1">
              <video
                className="pointer-events-none"
                preload="none"
                playsInline
                muted
                autoPlay
              >
                <source src={lensVideo} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </div>

      <Button text="Zoom in on 5x Telephoto" />
    </section>
  );
};

export default ZoomGallery;
