import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { highlightsSlides } from "../constants";
import { useState } from "react";
import { useEffect } from "react";
import { pauseImg, playImg, replayImg } from "../utils";

import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    videoId: 0,
    startPlay: false,
    isEnd: false,
    isLastVideo: false,
    isPlaying: false,
  });

  const { videoId, startPlay, isEnd, isLastVideo, isPlaying } = video;
  const [loadedData, setLoadedData] = useState([]);

  useGSAP(() => {
    // Slider animation to move the video out of the screen and bring the next video in
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    // Video animation to play the video when it is in the view
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        touchActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    if (loadedData.length > 5) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleLoadedMetadata = (i, e) => setLoadedData((prev) => [...prev, e]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      // animate the progress of the video
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          // get the progress of the video
          const progress = Math.ceil(anim.progress() * 100);
          if (progress != currentProgress) {
            // set the width of the progress bar
            currentProgress = progress;
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 760
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            // set the background color of the progress bar
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },

        // when the video is ended, replace the progress bar with the indicator and change the background color
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }
      // update the progress bar
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            highlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        // ticker to update the progress bar
        gsap.ticker.add(animUpdate);
      } else {
        // remove the ticker when the video is paused (progress bar is stopped)
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          isEnd: true,
          videoId: i + 1,
        }));
        break;
      case "video-last":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: true,
        }));
        break;
      case "video-reset":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case "play":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying,
        }));
        break;
      case "pause":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying,
        }));
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {highlightsSlides.map((list, i) => (
          <div id="slider" key={list.id} className="pr-5">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  className="pointer-events-none max-w-[170%] lg:max-w-full"
                  ref={(el) => (videoRef.current[i] = el)}
                  onEnded={() => {
                    i !== 5
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last");
                  }}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo,
                      isPlaying: true,
                    }));
                  }}
                  onLoadedMetadata={(e) => {
                    handleLoadedMetadata(i, e);
                  }}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>
              <div className="absolute top-0 left-0 lg:m-12 m-5 z-10 lg:w-[40%]">
                {list.textLists.map((text) => (
                  <p
                    key={text}
                    className="text-lg sm:text-2xl lg:text-3xl font-semibold text-white"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <button className="control-btn">
          <img
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>

        <div className="flex-center py-[22px] px-4 bg-gray-300 backdrop-blur rounded-full">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
              // onClick={() =>
              //   setVideo({
              //     videoId: i,
              //     startPlay: false,
              //     isEnd: false,
              //     isLastVideo: false,
              //     isPlaying: false,
              //   })
              // }
            >
              <span
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
