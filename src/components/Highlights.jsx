import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/animations";

const Highlights = () => {
  useGSAP(() => {
    animateWithGsap("#title", { opacity: 1, y: 0 });
    animateWithGsap(".highLightsLink", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="section w-screen overflow-hidden h-full bg-zinc"
    >
      <div className="viewport-content">
        <div className="mb-12 sm:mb-16 lg:mb-20 w-full lg:flex items-baseline justify-between">
          <h2 id="title" className="section-heading">
            Get the highlights.
          </h2>

          <div className="flex flex-wrap items-center gap-5 mt-5 lg:mt-0">
            <p className="link highLightsLink opacity-0 translate-y-20">
              Watch The Film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            {/* <p className="link">
              Watch The Event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p> */}
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
