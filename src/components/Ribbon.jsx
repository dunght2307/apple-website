import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

const Ribbon = () => {
  useGSAP(() => {
    gsap.to("#ribbon", {
      opacity: 1,
      delay: 2,
      scale: 1,
      duration: 1,
    });
  }, []);
  return (
    <div
      id="ribbon"
      className="w-full py-4 bg-zinc absolute top-[44px] left-0 z-[3] opacity-0 scale-110"
    >
      <div className="text-white text-center text-sm viewport-content">
        <p className="inline-block w-[83.33%]">
          Get $180–$650 in credit toward iPhone 16 or iPhone 16 Pro when you
          trade in iPhone 12 or higher.{" "}
          <a href="#footnote-1" className="font-feature-settings">
            *
          </a>{" "}
          <span>
            <a
              href="#"
              className="text-blue after:content-['>'] after:ml-0.5 hover:underline"
            >
              Buy
            </a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Ribbon;
