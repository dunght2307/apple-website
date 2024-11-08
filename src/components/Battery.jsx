import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import { animateWithGsap } from "../utils/animations";
import { batteryVideo, heroImg1 } from "../utils";
import { chips } from "../constants";
import gsap from "gsap";

const Battery = () => {
  const batteryVideoRef = useRef();
  const [current, setCurrent] = useState("iPhone 12 Pro");

  useGSAP(() => {
    gsap.to("#batteryVideo", {
      scrollTrigger: {
        trigger: "#batteryVideo",
        toggleActions: "play reverse restart restart",
        start: "-10% 85%",
      },
      onComplete: () => {
        batteryVideoRef.current.play();
      },
    });
    animateWithGsap("#batteryTitle", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="section">
      <div className="viewport-content">
        <div className="screen-max-width">
          <div className="w-full flex-center flex-col">
            <h4
              id="batteryTitle"
              className="section-heading-2 w-full text-orange-100 opacity-0 translate-y-20"
            >
              A <span className="text-glow">huge leap</span>
              in battery life.
              <br className="hidden lg:block" />
              <span className="text-glow">Stellar.</span>
            </h4>
          </div>
          <div className="text-container mt-16">
            <div className="flex-1 flex gap-6 lg:gap-10 flex-col w-full">
              <p className="text-content">
                iPhone 16 Pro gives you longer battery life — and iPhone 16 Pro
                Max delivers{" "}
                <span className="text-white">
                  the best battery life ever on an iPhone
                </span>
                . How? An optimized internal design fits larger batteries, which
                work together with the A18 Pro chip to deliver incredibly
                power-efficient performance. Even with so many new capabilities.
              </p>
              <p className="text-content">
                Snap on a new MagSafe charger for{" "}
                <span className="text-white">
                  even faster wireless charging
                </span>{" "}
                — up to 25W with a 30W power adapter or higher, enabling up to
                50% charge in around 30 minutes.
              </p>
            </div>
            <div className="flex gap-6 lg:gap-10 w-[200px] flex-col">
              <p className="text-lg text-gray font-semibold">
                Up to
                <br />
                <span className="text-white text-5xl">33 hours</span>
                <br /> video playback on iPhone 16 Pro Max
              </p>
              <p className="text-lg text-gray font-semibold">
                Up to
                <br />
                <span className="text-white text-5xl">27 hours</span>
                <br /> video playback on iPhone 16 Pro
              </p>
            </div>
          </div>

          <div className="w-full relative overflow-hidden flex-center my-24">
            <div className="relative overflow-hidden z-[2] w-full">
              <img src={heroImg1} alt="" />
            </div>
            <div className="absolute overflow-hidden top-[4%] left-[2%] rounded-[10%/10%] z-[1] w-[96.5%]">
              <video
                id="batteryVideo"
                ref={batteryVideoRef}
                className="pointer-events-none"
                preload="none"
                playsInline
                muted
                autoPlay
              >
                <source src={batteryVideo} type="video/mp4" />
              </video>
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
                    id="battery-select"
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
                        {item.battery[0]}
                      </span>
                      <br />
                      video playback on
                      <br /> iPhone 16 Pro
                    </p>
                    <p className="text-gray font-semibold text-lg">
                      Upto <br />
                      <span key={i} className="text-3xl text-[#fdc9ae]">
                        {item.battery[1]}
                      </span>
                      <br />
                      video playback on
                      <br /> iPhone 16 Pro
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Battery;
