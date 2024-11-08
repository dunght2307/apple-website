import { useGSAP } from "@gsap/react";
import React, { useRef, useState } from "react";
import {
  aNewEraForSiriVideo,
  appleIntelligence1Img,
  appleIntelligence1Video,
  appleIntelligenceImg,
  appleIntelligenceVideo,
  boostYourProductivityImg,
  boostYourProductivityVideo,
  cleanUpImg,
  expressYourselfVisuallyImg,
  iconPrivacyImg,
  instructionsImg,
  iphoneImg,
  languageImg,
  messagesImg,
  playgroundAppImg,
  recordImg,
  rightImg,
} from "../utils";
import gsap from "gsap";
import { appleIntelligenceGallery } from "../constants";

const AppleIntelligence = () => {
  const videoRef = useRef();
  const video2Ref = useRef();
  const [current, setCurrent] = useState("Boost your productivity");

  useGSAP(() => {
    gsap.to("#aiVideo", {
      scrollTrigger: {
        trigger: "#aiVideo",
        toggleActions: "play reverse restart restart",
        start: "-10% 85%",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });

    gsap.to("#aiVideo", {
      scrollTrigger: {
        trigger: "#ai2Video",
        toggleActions: "play reverse restart restart",
        start: "0 85%",
      },
      onComplete: () => {
        video2Ref.current.play();
      },
    });
  }, []);
  return (
    <section className="section-pt">
      <div className="flex-center flex-col ">
        <div className="h-full w-full flex-center overflow-hidden">
          <video
            id="aiVideo"
            className="lg:max-w-full sm:max-w-[140%] md:block hidden"
            preload="none"
            muted
            autoPlay
            playsInline
            ref={videoRef}
          >
            <source src={appleIntelligenceVideo} type="video/mp4" />
          </video>
          <img
            src={appleIntelligenceImg}
            alt=""
            className="md:hidden block max-w-[150%]"
          />
        </div>
        <p className="mt-4 text-sm lg:text-lg text-gray">
          Coming this fall{" "}
          <a href="" className="font-feature-settings">
            2
          </a>
        </p>
        <div className="screen-max-width flex-center overflow-hidden pt-8">
          <video
            id="ai2Video"
            className="lg:max-w-full sm:max-w-[100%] lg:block hidden"
            preload="none"
            muted
            autoPlay
            playsInline
            ref={video2Ref}
          >
            <source src={appleIntelligence1Video} type="video/mp4" />
          </video>
          <img
            src={appleIntelligence1Img}
            alt=""
            className="lg:hidden block sm:max-w-[90%] max-w-[150%]"
          />
        </div>
      </div>
      <div className="black-bg-gradient pb-20 lg:pb-40">
        <div className="viewport-content">
          <div className="screen-max-width">
            <div className="flex-center">
              <p className="lg:w-[60%] w-full text-content text-center lg:mt-28 mt-14">
                iPhone 16 Pro is built for Apple Intelligence, the personal
                intelligence system that helps you{" "}
                <span className="text-white">
                  write, express yourself, and get things done effortlessly
                </span>
                . With groundbreaking privacy protections, it gives you peace of
                mind that no one else can access your data — not even Apple.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center lg:mt-36 mt-16 gap-8">
              <ul className="lg:flex flex-row gap-6 hidden">
                {appleIntelligenceGallery.map((item, index) => (
                  <li
                    key={index}
                    className={`block text-lg text-gray font-semibold py-4 px-8 border-b-[1px] border-[#424245] cursor-pointer ${
                      item.title === current
                        ? "border-b-[1px] border-[#fff] text-white"
                        : "border-b-[1px] border-[#424245]"
                    }`}
                    onClick={() => setCurrent(item.title)}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
              <div className="w-full lg:min-h-[880px] flex-center lg:flex-row flex-col  gap-8 relative overflow-hidden">
                {appleIntelligenceGallery.map((gallery, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-500 flex-center flex-col lg:absolute relative overflow-hidden top-0 left-0 ${
                      current === gallery.title
                        ? "z-[2] opacity-100"
                        : "z-[1] lg:opacity-0"
                    }`}
                  >
                    <div className="lg:hidden block text-sm">
                      {gallery.title}
                    </div>
                    <div className="min-h-[60px]">
                      <h4
                        className={`text-center text-lg lg:text-xl font-semibold ${
                          current === gallery.title
                            ? "block animate-[fadeAnimation_400ms_ease-in-out]"
                            : "lg:hidden"
                        }`}
                      >
                        {gallery.heading}
                      </h4>
                    </div>
                    <div className="w-full h-full flex-col lg:flex-row flex gap-6">
                      <div className="flex-1 flex-center flex-col overflow-hidden bg-black rounded-3xl">
                        <div className="lg:w-full lg:max-w-[250px] max-w-[200px] flex-1 flex-center relative overflow-hidden z-[1] mt-10 rounded-[48px]">
                          <img src={iphoneImg} alt="" className="h-full" />
                          {gallery.item1.video && (
                            <video
                              className="lg:max-w-[91.32948%] lg:block hidden absolute top-[2.10084%] left-[4.62428%] z-[-1]"
                              preload="none"
                              muted
                              autoPlay
                              playsInline
                            >
                              <source
                                src={gallery.item1.video}
                                type="video/mp4"
                              />
                            </video>
                          )}
                          {gallery.item1.img && (
                            <img
                              src={gallery.item1.img}
                              alt=""
                              className="max-w-[91.32948%] absolute top-[2.10084%] left-[4.62428%] z-[-1]"
                            />
                          )}
                        </div>

                        <div className="lg:py-10 py-6 lg:w-[65%] w-[85%]">
                          <p className="text-gray text-sm text-center">
                            {gallery.item1.des[0]}
                            <span className="text-white">
                              {gallery.item1.des[1]}
                            </span>{" "}
                            {gallery.item1.des[2]}
                          </p>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col gap-6">
                        <div className="flex-center flex-col bg-black rounded-3xl flex-1 relative z-[1] overflow-hidden">
                          <div className="lg:mt-10 mt-6 wlg:w-[65%] w-[85%]">
                            <p className="text-gray text-sm text-center">
                              {gallery.item2.des[0]}
                              <span className="text-white">
                                {gallery.item2.des[1]}
                              </span>{" "}
                              {gallery.item2.des[2]}
                            </p>
                          </div>
                          <div className="flex-1 w-full flex-center py-6">
                            <img
                              src={gallery.item2.img}
                              alt=""
                              className="max-w-[140%]"
                            />
                          </div>
                        </div>

                        <div className="flex-center flex-col bg-black rounded-3xl flex-1 relative z-[1] overflow-hidden">
                          <div className="lg:py-10 py-6 lg:w-[65%] w-[85%]">
                            <p className="text-gray text-sm text-center">
                              {gallery.item3.des[0]}
                              <span className="text-white">
                                {gallery.item3.des[1]}
                              </span>{" "}
                              {gallery.item3.des[2]}
                            </p>
                          </div>
                          <div className="flex-1 w-full flex relative overflow-hidden min-h-[200px]">
                            <img
                              src={gallery.item3.img}
                              alt=""
                              className="absolute z-[1] left-[50%] translate-x-[-50%] top-0 h-[200%]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-center flex-col lg:mt-8 mt-20">
              <div className="flex-center flex-col gap-10 lg:max-w-[50%] max-w-full">
                <img src={iconPrivacyImg} alt="" />
                <h3 className="lg:text-6xl sm:text-5xl text-4xl font-semibold text-center">
                  Great powers come with great privacy.
                </h3>
              </div>
              <div className="lg:w-[65%] w-full flex justify-center items-start flex-col md:flex-row lg:my-10 my-6 lg:gap-10 gap-6">
                <div className="flex-1">
                  <p className="text-content">
                    Apple Intelligence is designed to{" "}
                    <span className="text-white">
                      protect your privacy at every step
                    </span>
                    . It’s integrated into the core of iPhone through on-device
                    processing. So it’s aware of your personal information
                    without collecting your personal information.
                  </p>
                </div>
                <div className="flex-1">
                  <p className="text-content">
                    And with
                    <span className="text-white">
                      groundbreaking Private Cloud Compute
                    </span>{" "}
                    , Apple Intelligence can draw on larger Apple-designed
                    server-based models, running on Apple silicon, to handle
                    more complex requests for you while protecting your privacy.
                  </p>
                </div>
              </div>
              <a className="link lg:mt-16 mt-12">
                Learn more about Apple Intelligence
                <img src={rightImg} alt="watch" className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppleIntelligence;
