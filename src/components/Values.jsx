import React from "react";
import { animateWithGsap } from "../utils/animations";
import { useGSAP } from "@gsap/react";
import { earthIcon, rightImg } from "../utils";
import { valuesList } from "../constants";

const Values = () => {
  useGSAP(() => {
    animateWithGsap("#valuesTitle", {
      y: 0,
      opacity: 1,
    });
  }, []);
  return (
    <section className="section">
      <div className="viewport-content">
        <div className="screen-max-width">
          <div className="w-full">
            <h3
              id="valuesTitle"
              className="section-heading-2 opacity-0 translate-y-20"
            >
              <span className="text-white">
                Designed to make
                <br />a difference.
              </span>
            </h3>
          </div>
          {valuesList.map((list, index) => (
            <div key={index} className="flex flex-col mt-16 sm:mt-20 lg:mt-16">
              <h4 className="lg:text-5xl sm:text-4xl text-3xl font-semibold">
                {list.title}
              </h4>
              <div className="mt-7 flex flex-col md:flex-row justify-between gap-10">
                {list.items.map((item, index) => (
                  <div
                    key={index}
                    className="basis-[80%] max-w-full md:basis-[25%] lg:max-w-[25%]"
                  >
                    <img src={item.icon} alt="" />
                    <p className="text-content mt-5">
                      {item.text[0]}
                      <span className="text-white">{item.text[1]}</span>{" "}
                      {item.text[2]}
                    </p>
                  </div>
                ))}
              </div>
              <a className="link lg:mt-16 mt-10">
                {list.link}
                <img src={rightImg} alt="" className="ml-2 inline" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
