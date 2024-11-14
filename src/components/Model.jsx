import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ModelView from "./ModelView";
import { useEffect, useRef, useState } from "react";
import { allColorsImg, yellowImg } from "../utils";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, modelsFM, sizes } from "../constants";
import { animateWithGsapTimeLine } from "../utils/animations";

const Model = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title1: "6.3” iPhone 16 Pro in Natural Titanium",
    title2: "6.9” iPhone 16 Pro Max in Natural Titanium",

    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });
  const [modelFM, setModelFM] = useState({
    id: 0,
    title: "6.3” iPhone 16 Pro in four colors",
    color: "#977e6b",
    img: allColorsImg,
  });

  //Camera control for model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  //Model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  //Rotarion
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const timeline = gsap.timeline();
  useEffect(() => {
    if (size === "large") {
      animateWithGsapTimeLine(
        timeline,
        small,
        smallRotation,
        "#view1",
        "#view2",
        {
          transform: "translateX(-100%)",
          duration: 2,
        }
      );
    }
    if (size === "small") {
      animateWithGsapTimeLine(
        timeline,
        large,
        largeRotation,
        "#view2",
        "#view1",
        {
          transform: "translateX(0%)",
          duration: 2,
        }
      );
    }
  }, [size]);

  useGSAP(() => {
    gsap.to("#heading", {
      y: 0,
      opacity: 1,
    });
  });

  return (
    <section className="section overflow-hidden">
      <div className="viewport-content">
        <h2 id="heading" className="section-heading mb-12 sm:mb-16 lg:mb-20">
          Take a closer look
        </h2>
        <div className="flex flex-col items-center">
          <div className="hidden lg:block w-full h-[75vh] md:h[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="view1"
              controlRef={cameraControlSmall}
              setRotationState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="view2"
              controlRef={cameraControlLarge}
              setRotationState={setLargeRotation}
              item={model}
              size={size}
            />

            <Canvas
              className="w-full h-full"
              style={{
                position: "fixed",
                top: "0",
                bottom: "0",
                right: "0",
                left: "0",
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="lg:hidden block w-full h-[60vh] sm:h-[80vh] overflow-hidden">
            <div className={`h-full flex items-center justify-center `}>
              {modelsFM.map((model, index) => (
                <img
                  key={index}
                  src={model.img}
                  alt=""
                  className={`items-center justify-center max-w-[130%] sm:max-w-[110%] first:max-w-full ${
                    model.title === modelFM.title
                      ? "block animate-[fadeAnimation_400ms_ease-in-out]"
                      : "hidden"
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="mx-auto w-full lg:block hidden">
            <p className="text-sm font-light text-center mb-5">
              {size === "small" ? model.title1 : model.title2}
            </p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li
                    key={i}
                    className={`w-7 h-7 rounded-full mx-2 cursor-pointer ${
                      model.title1 === item.title1
                        ? "border-white border-[2px]"
                        : ""
                    }`}
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className="size-btn-container relative">
                {sizes.map(({ label, value }) => (
                  <span
                    key={label}
                    className="size-btn z-[2]"
                    style={{
                      // backgroundColor: size === value ? "white" : "transparent",
                      color: size == value ? "black" : "white",
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
                <div
                  className={`absolute top-[5px] left-[5px] z-[1] w-12 h-12 bg-white rounded-full transition-all duration-300 ${
                    size === "small" ? "translate-x-0" : "translate-x-[100%]"
                  }`}
                ></div>
              </button>
            </div>
          </div>
          <div className="mx-auto w-full lg:hidden block">
            <p className="text-xs font-light text-center mb-5">
              {modelFM.title}
            </p>
            <div className="flex-center">
              <ul className="color-container">
                {modelsFM.map((item, i) => (
                  <li
                    key={i}
                    className={`w-7 h-7 rounded-full mx-2 cursor-pointer first:bg-gradient-to-r from-[#000] to-[#977e6b] ${
                      modelFM.title === item.title
                        ? "border-white border-[2px]"
                        : ""
                    }`}
                    style={{ backgroundColor: item.color }}
                    onClick={() => setModelFM(item)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
