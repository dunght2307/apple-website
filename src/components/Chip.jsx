import React, { useRef, useState } from "react";
import { chipA18Img, chipVideo, gamingImg } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import { chips } from "../constants";

const Chip = () => {
  const chipVideoRef = useRef();

  const [current, setCurrent] = useState("iPhone 12 Pro");

  useGSAP(() => {
    gsap.to("#chipVideo", {
      scrollTrigger: {
        trigger: "#chipVideo",
        toggleActions: "play reverse restart restart",
        start: "-10% 85%",
      },
      onComplete: () => {
        chipVideoRef.current.play();
      },
    });
    animateWithGsap("#chipTitle", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="h-full pb-20 lg:pb-40 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="h-full w-full flex-center overflow-hidden">
          <video
            id="chipVideo"
            className="lg:max-w-full sm:max-w-[100%] md:block hidden"
            preload="auto"
            autoPlay
            muted
            playsInline
            ref={chipVideoRef}
          >
            <source src={chipVideo} type="video/mp4" />
          </video>
          <img
            src={chipA18Img}
            alt=""
            className="md:hidden block max-w-[120%]"
          />
        </div>
      </div>
      <div className="viewport-content">
        <div className="screen-max-width">
          <div className="mt-16 w-full flex-center flex-col">
            <h4
              id="chipTitle"
              className="section-heading-2 text-center text-orange-100 opacity-0 translate-y-20"
            >
              <span className="text-glow">A18 Pro chip.</span>
              <br />
              The brains behind
              <br /> Apple Intelligence.
            </h4>
            <p className="text-content w-[80%] mt-10 text-center">
              A <span className="text-white">phenomenally powerful chip</span> ,
              A18 Pro enables Apple Intelligence with a faster Neural Engine, an
              improved CPU and GPU, and a big jump in memory bandwidth. It also
              drives advanced video and photo features like Camera Control, and
              it delivers our best-ever graphics performance for AAA gaming.
            </p>
          </div>
          <div className="flex-center flex-col gap-16 lg:mt-32 mt-16">
            <div className="w-full flex-center flex-col md:flex-row gap-10 md:gap-24 md:items-start">
              <p className="w-[300px] lg:w-[450px] text-xl lg:text-3xl text-gray font-semibold pt-8 border-[#86868b] border-t-2">
                <span className="text-white">New 16-core Neural Engine</span> is
                faster and more efficient, supercharging Apple Intelligence
              </p>

              <p className="w-[300px] lg:w-[450px] text-xl lg:text-3xl text-gray font-semibold pt-8 border-[#86868b] border-t-2">
                <span className="text-white">New 6-core GPU</span> gives you
                enhanced graphics performance
              </p>
            </div>
            <div className="w-full flex-center flex-col md:flex-row gap-10 md:gap-24 md:items-start">
              <p className="w-[300px] lg:w-[450px] text-xl lg:text-3xl text-gray font-semibold pt-8 border-[#86868b] border-t-2">
                <span className="text-white">New 6-core CPU</span>, the fastest
                in a smartphone, runs complex workloads with less power
              </p>

              <p className="w-[300px] lg:w-[450px] text-xl lg:text-3xl text-gray font-semibold pt-8 border-[#86868b] border-t-2">
                <span className="text-white">
                  17% increase in total system memory bandwidth
                </span>
                , the highest ever in iPhone, for outstanding performance
              </p>
            </div>
          </div>

          <div className="pt-14 lg:pt-16 black-bg-gradient-1 rounded-2xl mt-24 lg:mt-32">
            <div className="flex-center">
              <div className="w-[80%]">
                <div className="flex items-start md:items-center flex-col md:flex-row gap-5">
                  <span className="text-xl lg:text-2xl font-semibold mr-5">
                    Compare with
                  </span>
                  <select
                    id="chip-select"
                    className="bg-transparent h-[42px] border border-[#86868b] rounded-full text-2xl font-semibold px-5"
                    onChange={(e) => setCurrent(e.target.value)}
                    value={current}
                  >
                    {chips.map((chip, i) => (
                      <option key={i} value={chip.device} className="text-gray">
                        {chip.device}
                      </option>
                    ))}
                  </select>
                </div>

                {chips.map((item, i) => (
                  <div
                    key={i}
                    className={`items-start md:items-center flex-col md:flex-row gap-10 md:gap-60 mt-14 ${
                      current === item.device ? "flex" : "hidden"
                    }`}
                  >
                    <p className="text-gray font-semibold text-lg">
                      Upto <br />
                      <span key={i} className="text-3xl text-[#fdc9ae]">
                        {item.cpu[0]}
                      </span>
                      <br />
                      6‑core CPU
                    </p>
                    <p className="text-gray font-semibold text-lg">
                      Upto <br />
                      <span key={i} className="text-3xl text-[#fdc9ae]">
                        {item.cpu[1]}
                      </span>
                      <br />
                      6‑core CPU
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-center flex-col pt-40">
            <p className="text-xs text-gray">DEATH STRANDING DIRECTOR’S CUT</p>
            <div className="lg:w-full w-[150%] flex-center">
              <img src={gamingImg} alt="" />
            </div>
            <div className="flex-center flex-col mt-[-75px] md:mt-[-150px]">
              <h4 className="section-heading-3 text-center">
                <span className="shadow">Gaming.</span>
                <br />
                In a whole new light.
              </h4>
              <div className="w-[80%] lg:w-[60%] text-container lg:my-10 my-16">
                <div className="flex-1">
                  <p className="text-content">
                    With up to two times faster hardware-accelerated ray
                    tracing, A18 Pro{" "}
                    <span className="text-white">
                      makes games look and feel beautifully lifelike
                    </span>
                    — with more fluid graphics and realistic lighting.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-content">
                    And with Game Mode in iOS 18, you’ll get better sustained
                    frame rates for continuous play and improved responsiveness
                    if you’re using wireless controllers and AirPods.
                  </p>
                </div>
              </div>
              <p className="max-w-[80%] lg:w-[50%] text-gray text-center font-semibold text-3xl md:text-5xl">
                <span className="text-white">
                  Up to 2x faster hardware-accelerated ray tracing{" "}
                </span>{" "}
                than A17 Pro
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chip;
