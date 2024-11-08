import React from "react";
import {
  appleIntelligenceIcon,
  cameraButtonIcon,
  chipA18Icon,
  chipA18ProIcon,
  icon2Camera,
  icon3Camera,
  iconA16,
  iconA17,
  iconBattery,
  iphone15Img,
  iphone15proImg,
  iphone16Img,
  iphone16ProImg,
  rightImg,
} from "../utils";
import { animateWithGsap } from "../utils/animations";
import { useGSAP } from "@gsap/react";
import Button from "./Button";

const Contract = () => {
  useGSAP(() => {
    // gsap.to("#title", { opacity: 1, y: 0 });
    animateWithGsap("#titleContract", {
      opacity: 1,
      y: 0,
    });
    // gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
    animateWithGsap(".linkContract", {
      opacity: 1,
      y: 0,
      duration: 1,
      delay: 0.25,
    });
  }, []);

  return (
    <section className="section bg-zinc">
      <div className="viewport-content">
        <div className="mb-12 sm:mb-16 lg:mb-20 w-full lg:flex items-end justify-between">
          <h2 id="titleContract" className="section-heading">
            Keep exploring iPhone.
          </h2>
          <div className="flex flex-wrap items-end mt-5 lg:mt-0">
            <p className="link linkContract opacity-0 translate-y-20">
              Explore all iPhone
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <div className="w-full bg-black rounded-3xl py-16 px-4 flex-center flex-col">
          <div className="w-full flex justify-center items-start gap-5 pb-14">
            <div className="flex-center gap-8 flex-col">
              <img src={iphone16ProImg} alt="" />
              <div className="flex gap-2">
                <div className="w-[12px] h-[12px] rounded-full bg-[#8e8a82]" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#202630]" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#c9c8c3]" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#242526]" />
              </div>
              <h2 className="text-xl lg:text-3xl font-semibold">
                iPhone 16 Pro
              </h2>
              <p className="text-xs text-[#ff791b]">New</p>
              <p className="text-sm lg:text-lg font-semibold">
                From $999 or $41.62/mo. for 24 mo.*
              </p>
              <div className="flex flex-col items-center gap-10">
                <span className="text-sm lg:text-lg py-3">
                  Currently viewing
                </span>
                <p className="text-sm lg:text-lg text-blue hover:underline cursor-pointer flex items-center">
                  Buy
                  <img src={rightImg} alt="watch" className="ml-2" />
                </p>
              </div>
            </div>
            <div className="flex-center gap-8 flex-col">
              <img src={iphone16Img} alt="" />
              <div className="flex gap-2">
                <div className="w-[12px] h-[12px] rounded-full bg-[#e3c8ca]" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#e4e0c4]" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#ccd4c6]" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#cfd5d8]" />
                <div className="w-[12px] h-[12px] rounded-full bg-[#242526]" />
              </div>
              <h2 className="text-xl lg:text-3xl font-semibold">iPhone 16</h2>
              <p className="text-xs text-[#ff791b]">New</p>
              <p className="text-sm lg:text-lg font-semibold">
                From $799 or $33.29/mo. for 24 mo.*
              </p>
              <div className="flex flex-col items-center gap-10">
                <span className="text-sm lg:text-lg px-5 py-3 rounded-3xl bg-blue opacity-90 hover:opacity-100">
                  Learn more
                </span>
                <p className="text-sm lg:text-lg text-blue hover:underline cursor-pointer flex items-center">
                  Buy
                  <img src={rightImg} alt="watch" className="ml-2" />
                </p>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[600px] flex justify-center items-start flex-row gap-5 pt-14 border-solid border-t-[1px] border-[#424245]">
            <div className="flex-center flex-col gap-10 flex-1">
              <div className="flex-center gap-2 flex-col">
                <img src={appleIntelligenceIcon} alt="" />
                <p className="text-xs font-semibold text-center">
                  Apple Intelligence
                </p>
              </div>
              <div className="flex-center gap-2 flex-col">
                <img src={cameraButtonIcon} alt="" />
                <p className="text-xs font-semibold text-center">
                  Camera Control
                </p>
              </div>
              <div className="flex-center gap-2 flex-col">
                <img src={chipA18ProIcon} alt="" />
                <p className="text-xs font-semibold text-center">
                  A17 Pro chip
                  <br /> with 6-core GPU
                </p>
              </div>
              <div className="flex-center gap-2 flex-col">
                <img src={icon3Camera} alt="" />
                <p className="text-xs font-semibold text-center">
                  Pro camera <br className="block sm:hidden" /> system
                </p>
                <p className="text-xs font-semibold text-center">
                  Our most advanced 48MP Fusion camera
                </p>
                <p className="text-xs font-semibold text-center">
                  5x Telephoto camera
                </p>
                <p className="text-xs font-semibold text-center">
                  48MP Ultra Wide camera
                </p>
              </div>
              <div className="flex-center gap-2 flex-col">
                <img src={iconBattery} alt="" />
                <p className="text-xs font-semibold text-center">
                  Up to 29 hours video
                  <br /> playback
                </p>
              </div>
            </div>
            <div className="flex-center flex-col gap-10 flex-1">
              <div className="flex-center gap-2 flex-col">
                <img src={appleIntelligenceIcon} alt="" />
                <p className="text-xs font-semibold text-center">
                  Apple Intelligence
                </p>
              </div>
              <div className="flex-center gap-2 flex-col">
                <img src={cameraButtonIcon} alt="" />
                <p className="text-xs font-semibold text-center">
                  Camera Control
                </p>
              </div>
              <div className="flex-center gap-2 flex-col">
                <img src={chipA18Icon} alt="" />
                <p className="text-xs font-semibold text-center">
                  A16 Bionic chip
                  <br /> with 5-core GPU
                </p>
              </div>
              <div className="flex-center gap-2 flex-col">
                <img src={icon2Camera} alt="" />
                <p className="text-xs font-semibold text-center">
                  Advanced dual‑camera system
                </p>
                <p className="text-xs font-semibold text-center">
                  Advanced 48MP Fusion camera
                </p>
                <p className="text-xs font-semibold text-center">
                  2x Telephoto 12MP
                </p>
                <p className="text-xs font-semibold text-center">
                  Ultra Wide camera
                </p>
              </div>
              <div className="flex-center gap-2 flex-col">
                <img src={iconBattery} alt="" />
                <p className="text-xs font-semibold text-center">
                  Up to 26 hours video
                  <br /> playback
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button text="Compare all iPhone models" />
      </div>
    </section>
  );
};

export default Contract;
