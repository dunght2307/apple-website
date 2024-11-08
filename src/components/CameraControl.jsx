import React, { useEffect, useRef, useState } from "react";
import {
  cameraControlImage,
  cameraControlVideo,
  nextImg,
  pauseIcon,
  pauseImg,
  playIcon,
  playImg,
  prevImg,
  replayIcon,
  replayImg,
} from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";
import { CameraControlList } from "../constants";
import Button from "./Button";

const CameraControl = () => {
  const videoCameraControlRef = useRef();
  const [videoPlaying, setVideoPlaying] = useState(true);
  const [videoEnd, setVideoEnd] = useState(false);
  useGSAP(() => {
    gsap.to("#cameraControlVideo", {
      scrollTrigger: {
        trigger: "#cameraControlVideo",
        toggleActions: "play reverse restart restart",
        start: "-10% 85%",
      },
      onComplete: () => {
        videoCameraControlRef.current.play();
      },
    });
    animateWithGsap("#cameraControlTitle", {
      y: 0,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    if (videoPlaying) {
      videoCameraControlRef.current.play();
    } else {
      videoCameraControlRef.current.pause();
    }
  }, [videoPlaying, videoCameraControlRef]);

  const handleControl = (e) => {
    setVideoPlaying(!videoPlaying);
    setVideoEnd(false);
  };
  const scrollContainerRef = useRef(null);
  const scrollItemRef = useRef(null);
  const [current, setCurrent] = useState(1);
  const [isPlaying, setPlaying] = useState(true);
  const [isEnd, setEnd] = useState(false);
  const videoRef = useRef([]);

  useEffect(() => {
    isPlaying
      ? videoRef.current[current - 1].play()
      : videoRef.current[current - 1].pause();
  }, [current, isPlaying]);

  const next = () => {
    const container = scrollContainerRef.current;
    const item = scrollItemRef.current;
    if (container) {
      const nextScrollLeft = container.scrollLeft + item.offsetWidth;
      container.scrollTo({
        left: nextScrollLeft,
      });
      current < CameraControlList.length
        ? setCurrent(current + 1)
        : setCurrent(CameraControlList.length);
      setPlaying(!isPlaying);
      setEnd(false);
    }
  };
  const prev = () => {
    const container = scrollContainerRef.current;
    const item = scrollItemRef.current;
    if (container) {
      const nextScrollLeft = container.scrollLeft - item.offsetWidth;
      container.scrollTo({
        left: nextScrollLeft,
      });
      current > 1 ? setCurrent(current - 1) : setCurrent(1);
      setPlaying(!isPlaying);
      setEnd(false);
    }
  };

  const handleClick = () => {
    setPlaying(!isPlaying);
    setEnd(false);
  };

  return (
    <section className="section-pt">
      <div className="mb-32 w-full">
        <h4
          id="cameraControlTitle"
          className="section-heading-2 text-center text-orange-100  opacity-0 translate-y-20"
        >
          Take total
          <br />
          <span className="text-glow">Camera Control.</span>
        </h4>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
        <button
          className="text-lg hover:underline items-end justify-center gap-1 font-medium text-center mt-3 lg:flex hidden"
          onClick={() => handleControl()}
        >
          {videoEnd ? (
            <p>Replay</p>
          ) : !videoPlaying ? (
            <p>Play</p>
          ) : (
            <p>Pause</p>
          )}
          <img
            src={videoEnd ? replayImg : !videoPlaying ? playImg : pauseImg}
            alt=""
            className="w-[18px] h-[18px]"
          />
        </button>

        <div className="h-full w-full flex-center overflow-hidden">
          <video
            id="cameraControlVideo"
            className="lg:max-w-full sm:max-w-[100%] md:block hidden"
            preload="auto"
            muted
            playsInline
            ref={videoCameraControlRef}
            onEnded={() => {
              setVideoEnd(true);
              setVideoPlaying(false);
            }}
          >
            <source src={cameraControlVideo} type="video/mp4" />
          </video>
          <img
            src={cameraControlImage}
            alt=""
            className="md:hidden block max-w-[120%]"
          />
        </div>
      </div>
      <div className="black-bg-gradient pb-20 lg:pb-40 ">
        <div className="viewport-content">
          <div className="screen-max-width text-container">
            <div className="flex-1">
              <p className="text-content">
                Now you can take the perfect photo or video in record time.
                Camera Control gives you an{" "}
                <span className="text-white">
                  easier way to quickly access camera tools.
                </span>{" "}
                Simply slide your finger to adjust camera functions like
                exposure or depth of field, and toggle through each lens or use
                digital zoom to frame your shot — just how you like it.
              </p>
            </div>
            <div className="flex-1">
              <p className="text-content">
                Later this year, Camera Control will introduce a two-stage
                shutter that lets you{" "}
                <span className="text-white">
                  automatically lock focus and exposure
                </span>{" "}
                with a light press — so you can reframe your shot without losing
                focus on your subject.
              </p>
            </div>
          </div>
        </div>
        <div className="relative">
          <ul
            className="flex gap-6 scroll-smooth overflow-x-auto 
            snap-x snap-mandatory no-scrollbar px-[14%]
          "
            ref={scrollContainerRef}
          >
            {CameraControlList.map((item, i) => (
              <li
                key={i}
                className="w-[280px] sm:w-[450px] lg:w-[550px] snap-center cursor-pointer shrink-0"
                ref={scrollItemRef}
              >
                <img
                  src={item.img}
                  alt=""
                  className="w-full rounded-3xl lg:hidden block"
                />
                <div className="hidden lg:block relative">
                  <video
                    id="cameraControlItemVideo"
                    className="w-full rounded-3xl"
                    playsInline={true}
                    preload="auto"
                    muted
                    ref={(el) => (videoRef.current[i] = el)}
                    onEnded={() => {
                      setPlaying(false);
                      setEnd(true);
                    }}
                  >
                    <source src={item.video} type="video/mp4" />
                  </video>
                  <button
                    className={`bg-[#d2d2d7a3] rounded-full absolute right-5 bottom-5 ${
                      current === i + 1
                        ? "block animate-[fadeAnimation_500ms_ease-in-out]"
                        : "hidden"
                    }`}
                  >
                    <img
                      src={
                        isEnd ? replayIcon : !isPlaying ? playIcon : pauseIcon
                      }
                      alt=""
                      className="h-[36px] max-w-[36px]"
                      onClick={() => handleClick()}
                    />
                  </button>
                </div>

                <p className="p-5 sm:p-8 text-gray text-lg font-semibold">
                  {item.title[0]}
                  <span className="text-white">{item.title[1]}</span>
                  {item.title[2]}
                </p>
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
              disabled={CameraControlList.length === current}
              className={`bg-[#333336] rounded-full flex-center ${
                current === CameraControlList.length
                  ? "opacity-40"
                  : "opacity-90 hover:opacity-100 "
              }`}
            >
              <img src={nextImg} alt="next" className="max-w-[36px] h-[36px]" />
            </button>
          </div>
        </div>

        <Button text="Go deeper on Camera Control" />
      </div>
    </section>
  );
};

export default CameraControl;
