import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroAiImg, videoHero, smallVideoHero } from "../utils";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallVideoHero : videoHero
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 760) {
      setVideoSrc(smallVideoHero);
    } else {
      setVideoSrc(videoHero);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  });

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 3,
      scale: 1,
      duration: 1,
    });

    gsap.to("#cta", {
      opacity: 1,
      y: 0,
      delay: 3,
      duration: 1,
    });
  }, []);

  return (
    <section className="w-full xl:h-[120vh] lg:h-[110vh] h-[100vh] relative overflow-hidden">
      <div className="w-full h-full flex items-center justify-between flex-col gap-8 absolute z-[2] top-0 xl:py-40 lg:py-36 py-40 pb-10">
        <div
          id="hero"
          className="flex flex-col items-center xl:gap-8 opacity-0 scale-110"
        >
          <h1 className="hero-title">iPhone 16 Pro</h1>
          <div className="h-[41px] flex-center w-[110%] sm:w-[60%] xl:w-full ">
            <img src={heroAiImg} alt="" />
          </div>
        </div>
        <div
          id="cta"
          className="viewport-content flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#hightlights" className="btn">
            Buy
          </a>
          <p className="font-semibold text-gray relative">
            From $999 or $41.62/mo. for 24 mo.{" "}
            <a
              href=""
              className="absolute text-[10px] -top-[1px] -right-2 border-b-[1px]"
            >
              1
            </a>
          </p>
          <p className="font-normal text-gray relative">
            Apple Intelligence coming this fall{" "}
            <a
              href=""
              className="absolute text-[10px] -top-[1px] -right-2 border-b-[1px]"
            >
              2
            </a>
          </p>
        </div>
      </div>
      <div className="w-screen absolute z-[1] top-0 max-sm:top-[136px] left-0 flex-center">
        <video
          className="pointer-events-none max-w-[130%] sm:max-w-[145%] lg:max-w-[110%] xl:max-w-full"
          autoPlay
          muted
          playsInline={true}
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
