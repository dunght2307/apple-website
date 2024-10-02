import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25 });
  }, []);

  return (
    <section
      id="highlights"
      className="section w-screen overflow-hidden h-full bg-zinc"
    >
      <div className="viewport-content">
        <div className="mb-12 w-full lg:flex items-baseline justify-between">
          <h2 id="title" className="section-heading">
            Get the highlights.
          </h2>

          <div className="flex flex-wrap items-center gap-5">
            <p className="link">
              Watch The Film
              <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              Watch The Event
              <img src={rightImg} alt="watch" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
