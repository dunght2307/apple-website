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
    <section className="w-full xl:h-[120vh] lg:h-[110vh] h-[100vh] min-h-[800px] relative overflow-hidden">
      <div className="w-full h-full flex items-center justify-between flex-col gap-8 absolute z-[2] top-0 pt-40 lg:pb-40 md:pb-32 pb-24">
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
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <a href="#hightlights" className="btn">
            Buy
          </a>
          <p className="lg:text-lg font-semibold text-gray">
            From $999 or $41.62/mo. for 24 mo.{" "}
            <a href="#footnote-2" className="font-feature-settings">
              1
            </a>
          </p>
          <p className="lg:text-lg font-normal text-gray mt-1">
            Apple Intelligence coming this fall{" "}
            <a href="#footnote-3" className="font-feature-settings">
              2
            </a>
          </p>
        </div>
      </div>
      <div className="w-screen absolute z-[1] top-10 max-sm:top-[120px] left-0 flex-center">
        <video
          className="pointer-events-none max-w-[115%] sm:max-w-[140%] lg:max-w-[110%] xl:max-w-full"
          muted
          autoPlay
          preload="none"
          playsInline
          key={videoSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default Hero;
