import React from "react";
import {
  audioImg,
  heroImg1,
  heroVideo1,
  shotOnIphoneImg,
  shotOnIphoneVideo,
  videoHeroEndFrameImg,
} from "../utils";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";

const VideoAndAudio = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.to("#headingVideoAndAudio", {
      opacity: 0,
      y: -100,
      duration: 4,
      scrollTrigger: {
        trigger: "#headingVideoAndAudio",
        start: "50% 50%",
        end: "50% 25%",
        scrub: 2,
        // markers: true,
      },
    });

    gsap.to("#heroVideoAndAudio", {
      scale: 1,
      opacity: 1,
      duration: 4,
      scrollTrigger: {
        trigger: "#heroVideoAndAudio",
        start: "50% 75%",
        end: "50% 50%",
        scrub: 2,
        // markers: true,
      },
    });
    gsap.to("#videoCurrent", {
      scrollTrigger: {
        trigger: "#videoCurrent",
        toggleActions: "play reverse restart restart",
        start: "10% top",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
  }, []);
  return (
    <section className="section-pb">
      <div className="w-full h-[100vh] relative overflow-hidden items-center justify-center md:flex hidden">
        <div
          id="headingVideoAndAudio"
          className="screen-max-width absolute z-[2] top-0 h-full flex-center"
        >
          <h4 className="section-heading-2 text-center">
            4K 120 fps
            <br className="lg:hidden block" /> Dolby Vision.
            <br /> Cinemasterful.
          </h4>
        </div>
        <div
          id="heroVideoAndAudio"
          className="w-[80%] lg:screen-max-width absolute z-[1] bottom-0 opacity-70 scale-[5]"
        >
          <div className="relative overflow-hidden z-[2] w-full">
            <img src={heroImg1} alt="" />
          </div>
          <div className="absolute top-[4%] left-[2%] rounded-[5%/10%] z-[1] w-[96.5%] overflow-hidden">
            <video
              id="videoCurrent"
              ref={videoRef}
              className="pointer-events-none"
              preload="none"
              playsInline
              muted
              autoPlay
            >
              <source src={heroVideo1} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="w-full items-center justify-center flex sm:hidden flex-col">
        <div
          className="w-full min-h-[480px] flex-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${videoHeroEndFrameImg})` }}
        >
          <h4 className="text-5xl font-semibold">
            4K 120 fps
            <br className="lg:hidden block" /> Dolby Vision.
            <br /> Cinemasterful.
          </h4>
        </div>
        <div className="w-[85%] relative min-h-[180px] mt-10">
          <div className="absolute z-[2] top-0 w-full">
            <img src={heroImg1} alt="" />
          </div>
          <div className="absolute top-[3%] left-[2%] rounded-[5%/10%] z-[1] w-[97%] overflow-hidden">
            <img src={videoHeroEndFrameImg} alt="" />
          </div>
        </div>
      </div>
      <div className="viewport-content">
        <p className="text-gray text-center text-sm mt-5">
          A herd of Icelandic horses, captured in stunning 4K 120 fps Dolby
          Vision
        </p>
        <div className="screen-max-width">
          <div className="text-container">
            <div className="flex-1 flex gap-6 lg:gap-10 flex-col w-full">
              <p className="text-content">
                iPhone 16 Pro takes video capture to a whole new level with{" "}
                <span className="text-white">4K 120 fps Dolby Vision</span> —
                our highest resolution and frame rate combo yet. Enabled by the
                new 48MP Fusion camera with second-generation quad-pixel sensor
                and our powerful A18 Pro chip, iPhone 16 Pro lets you record 4K
                120 fps Dolby Vision in video mode or slo-mo.
              </p>
              <p className="text-content">
                And now you can{" "}
                <span className="text-white">
                  adjust the playback speed after capture{" "}
                </span>{" "}
                in the redesigned Photos app, giving you greater editing
                capabilities. To add a dreamy quality to your shot, try out the
                new half-speed option. Or for a cinematic effect, slow it right
                down to 24 fps playback.
              </p>
            </div>
            <div className="flex-1 flex gap-6  lg:gap-10 w-full flex-col">
              <p className="text-3xl sm:text-4xl lg:text-5xl text-gray font-semibold md:min-h-[230px] max-w-64 md:max-w-full">
                <span className="text-white">Highest-quality video</span> in a
                smartphone
              </p>
              <p className="text-content">
                iPhone 16 Pro also provides{" "}
                <span className="text-white">
                  a big leap in audio performance
                </span>{" "}
                with four studio-quality mics for higher-quality recording. They
                provide a lower noise floor so you get more true-to-life sounds.
                New Spatial Audio capture makes your videos sound more immersive
                when listening with AirPods. And thanks to wind noise reduction,
                the audio quality is even clearer.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="viewport-content">
        <div className="flex-center flex-col">
          <h4 className="section-heading-3 text-left lg:text-center mt-16 lg:mt-32 w-full">
            Audio Mix.
            <br /> Make your voice heard.
          </h4>
          <p className="text-content mt-8 lg:mt-16 lg:max-w-[66.66%] text-left lg:text-center">
            Powered by advanced intelligence and Spatial Audio capture, Audio
            Mix lets you{" "}
            <span className="text-white">
              {" "}
              adjust the way voices sound in your videos{" "}
            </span>
            using three different voice options. Want to decrease background
            sound? Or just focus on the voices that are in frame? Simply select
            the mix and adjust intensity to get the sound you want after video
            capture.
          </p>
          <div className="screen-max-width">
            <div className="my-16">
              <img src={audioImg} alt="audio" />
            </div>
            <div className="flex items-start gap-10 flex-col md:flex-row">
              <div className="flex-1">
                <h4 className="text-white text-xl font-semibold py-2 border-b-[1px] border-[#979797]">
                  In-frame
                </h4>
                <p className="text-gray mt-4 text-sm lg:text-lg font-semibold">
                  Only captures the voices of the people on camera, even if
                  people off-camera are talking during the recording.
                </p>
              </div>
              <div className="flex-1">
                <h4 className="text-white text-xl font-semibold py-2 border-b-[1px] border-[#979797]">
                  Studio
                </h4>
                <p className="text-gray mt-4 text-sm lg:text-lg font-semibold">
                  Makes voices sound like you’re recording in a professional
                  studio equipped with sound-dampening walls. Great for vloggers
                  or podcasters because the recording will sound like the mic is
                  close to the subject’s mouth, even if it’s a few feet away.
                </p>
              </div>
              <div className="flex-1">
                <h4 className="text-white text-xl font-semibold py-2 border-b-[1px] border-[#979797]">
                  Cinematic
                </h4>
                <p className="text-gray mt-4 text-sm lg:text-lg font-semibold">
                  Captures all of the voices around you and consolidates them
                  toward the front of the screen — just like sound is formatted
                  for the movies.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-center flex-col">
          <h4 className="section-heading-3 text-center lg:mt-40 mt-24">
            Shot on iPhone 16 Pro.
          </h4>
          <p className="text-content mt-4 lg:max-w-[66.66%] text-center">
            Go behind the scenes of{" "}
            <span className="text-white">
              The Weeknd’s groundbreaking music video
            </span>{" "}
            to learn how the powerful camera features on iPhone 16 Pro deliver
            more creative freedom and flexibility than ever before. The “Dancing
            in the Flames” cinematographer Erik Henriksson films the video in
            dreamlike slow motion using 4K 120 fps Dolby Vision on iPhone 16
            Pro. Thanks to Camera Control, he could make technical decisions by
            simply sliding a finger to adjust camera functions like exposure or
            focal length — all without missing a beat.
          </p>
        </div>
        <div className="flex-center">
          <div className="mt-16 lg:w-[83.33%]">
            <video
              preload="auto"
              playsInline
              controls
              width="100%"
              poster={shotOnIphoneImg}
            >
              <source src={shotOnIphoneVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      <Button text="Nerd out on Pro video" />
    </section>
  );
};

export default VideoAndAudio;
