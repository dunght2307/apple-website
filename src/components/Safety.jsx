import { useGSAP } from "@gsap/react";
import React from "react";
import { animateWithGsap } from "../utils/animations";
import { esosHeroImg, rightImg } from "../utils";

const Safety = () => {
  useGSAP(() => {
    animateWithGsap("#safetyTitle", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="section-pt">
      <div className="viewport-content">
        <div className="screen-max-width">
          <div className="flex-center flex-col gap-10">
            <h4
              id="safetyTitle"
              className="section-heading-2 text-start lg:text-center opacity-0 translate-y-20"
            >
              <span className="text-white">
                No signal?
                <br />
                There’s a satellite for that.
              </span>
            </h4>
            <p className="text-content w-full lg:w-[80%] text-start lg:text-center">
              When you don’t have cell service or Wi-Fi, iPhone 16 Pro can{" "}
              <span className="text-white"> connect you to a satellite</span>,
              so you can stay in touch or get the assistance you need.
            </p>
          </div>

          <div className="flex-center lg:mt-24 mt-12">
            <div className="w-full lg:w-[80%]">
              <div className="flex items-center justify-between lg:gap-24 gap-10 flex-col md:flex-row">
                <div className="flex-1 flex-center flex-col gap-10">
                  <p className="text-content">
                    <span className="text-white">Messages via satellite</span>{" "}
                    lets you send and receive messages and Tapbacks when you’re
                    off the grid, right from the Messages app. Your iPhone will
                    help you connect to a satellite, so you can text over
                    iMessage or SMS.{" "}
                    <a href="#footnote-10" className="font-feature-settings">
                      9
                    </a>
                  </p>
                  <p className="text-content">
                    <span className="text-white">
                      Roadside Assistance via satellite
                    </span>{" "}
                    can get you help for things like a flat tire or a dead car
                    battery. iPhone will connect you with a roadside assistance
                    provider, who can dispatch help to your exact location —
                    even if you’re off the grid.{" "}
                    <a href="#footnote-11" className="font-feature-settings">
                      10
                    </a>
                  </p>
                  <a className="w-full text-blue transition-all hover:underline lg:text-xl text-lg font-semibold">
                    See how Roadside Assistance works
                    <img src={rightImg} alt="" className="ml-2 inline" />
                  </a>
                  <p className="lg:text-3xl text-xl text-white font-semibold">
                    Roadside Assistance via satellite is included for free for
                    two years with iPhone 16 Pro{" "}
                    <a href="#footnote-10" className="font-feature-settings">
                      9
                    </a>
                  </p>
                </div>
                <div className="flex-1 flex-center w-full">
                  <img src={esosHeroImg} alt="" />
                </div>
              </div>
              <div className="flex items-start justify-between lg:gap-24 gap-20 lg:mt-24 mt-20 pb-10 mb-10 border-b-[1px] flex-col md:flex-row">
                <div className="flex-1 flex-center flex-col gap-10">
                  <p className="text-content">
                    iPhone also has vital safety features that can help save
                    lives. If you try calling 911 for urgent help but don’t have
                    cell service or Wi‑Fi, you can use iPhone to
                    <span className="text-white">
                      text emergency services over satellite{" "}
                      <a href="#footnote-12" className="font-feature-settings">
                        11
                      </a>
                    </span>
                  </p>
                  <a className="w-full text-blue transition-all hover:underline lg:text-xl text-lg font-semibold">
                    See how Emergency SOS via satellite works
                    <img src={rightImg} alt="" className="ml-2 inline" />
                  </a>
                </div>
                <div className="flex-1">
                  <p className="text-content">
                    <span className="text-white">Crash Detection</span> uses
                    hardware sensors and advanced motion algorithms to detect a
                    severe car crash, then call 911 and notify your emergency
                    contacts when you can’t — even when you don’t have service.{" "}
                    <a href="#footnote-13" className="font-feature-settings">
                      12
                    </a>
                  </p>
                </div>
              </div>
              <div className="w-[80%]">
                <p className="text-content">
                  When you’re within range and make a 911 emergency call, iPhone
                  16 Pro gives you the option to start sharing a live feed with
                  911 responders for{" "}
                  <span className="text-white">
                    quick and effective assistance.{" "}
                    <a href="#footnote-10" className="font-feature-settings">
                      9
                    </a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Safety;
