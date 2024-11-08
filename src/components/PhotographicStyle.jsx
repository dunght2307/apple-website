import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { animateWithGsap } from "../utils/animations";
import {
  aestheticImg,
  heroStyle1Img,
  heroStyle2Img,
  heroStyle3Img,
  megapixelsImg,
  toneImg,
} from "../utils";
import gsap from "gsap";

const PhotographicStyle = () => {
  const comparisonRef = useRef();
  useGSAP(() => {
    let mm = gsap.matchMedia();
    animateWithGsap("#photographicStylTitle", {
      y: 0,
      opacity: 1,
    });

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".comparisonSection",
        start: "center center",
        end: () => "+=" + comparisonRef.current.offsetWidth,
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
      defaults: { ease: "none" },
    });
    // animate the container one way...
    tl.fromTo(".afterImage", { xPercent: 100, x: 0 }, { xPercent: 0 }, 0)
      // ...and the image the opposite way (at the same time)
      .fromTo(".afterImage img", { xPercent: -100, x: 0 }, { xPercent: 0 }, 0)
      .fromTo(".thirdImage", { xPercent: 100, x: 0 }, { xPercent: 0 }, 1)
      // ...and the image the opposite way (at the same time)
      .fromTo(".thirdImage img", { xPercent: -100, x: 0 }, { xPercent: 0 }, 1);

    mm.add("(min-width: 639px)", () => {
      gsap.set(".photo:not(:first-child)", { opacity: 0 });
      let animation = gsap.timeline({
        scrollTrigger: {
          trigger: ".gallery",
          start: "top top",
          end: "bottom bottom",
          pin: ".right",
          scrub: true,
          // markers: true,
        },
      });
      animation.to(".photo:not(:first-child)", {
        opacity: 1,
        duration: 1,
        stagger: 2,
      });
    });
  }, []);
  return (
    <section className="section-pb">
      <div className="viewport-content">
        <div className="mb-20 w-full">
          <h4
            id="photographicStylTitle"
            className="section-heading-2 text-center text-orange-100 opacity-0 translate-y-20"
          >
            Choose your
            <br />
            <span className="text-glow">Photographic Style.</span>
            <br />
            Change it up. Change it back.
          </h4>
        </div>
        <div
          className="comparisonSection relative h-[100vh] overflow-hidden flex-center"
          ref={comparisonRef}
        >
          <div className="comparisonImage beforeImage w-full h-full">
            <img
              src={heroStyle1Img}
              alt=""
              className="w-full h-full absolute top-0 object-cover"
            />
          </div>
          <div className="comparisonImage afterImage w-full h-full absolute overflow-hidden top-0 translate-x-[100%]">
            <img
              src={heroStyle2Img}
              alt=""
              className="w-full h-full absolute top-0 object-cover translate-x-[-100%]"
            />
          </div>
          <div className="comparisonImage thirdImage w-full h-full absolute overflow-hidden top-0 translate-x-[100%]">
            <img
              src={heroStyle3Img}
              alt=""
              className="w-full h-full absolute top-0 object-cover translate-x-[-100%]"
            />
          </div>
        </div>
        <div className="screen-max-width flex-center flex-col gap-16 md:gap-32">
          <p className="text-content w-[65%] text-center  mt-16">
            Our latest generation of Photographic Styles gives you greater
            creative flexibility than ever before, so you can{" "}
            <span className="text-white"> make every photo even more you</span>.
            And thanks to advances in our image pipeline, you can now reverse
            any style, anytime.
          </p>

          <div className="gallery flex md:justify-between justify-center w-full">
            <div className="left w-[300px] lg:w-[400px] relative">
              <div className="detailsWrapper mx-auto my-auto">
                <div className="details w-full h-full md:h-[100vh] flex justify-center gap-8 flex-col mt-10 md:mt-0">
                  <div className="flex-center w-full h-full md:hidden">
                    <img src={toneImg} alt="" className="w-[80%]" />
                  </div>
                  <h4 className="text-4xl lg:text-5xl font-semibold">
                    Lock in your look.
                  </h4>
                  <p className="text-content">
                    We’ve created new styles that let you{" "}
                    <span className="text-white">
                      dial in your exact desired look with more advanced
                      skin-tone rendering
                    </span>{" "}
                    and set it across your photos.
                  </p>
                </div>
                <div className="details w-full h-full md:h-[100vh] flex justify-center gap-8 flex-col mt-32 md:mt-0">
                  <div className="flex-center w-full h-full md:hidden">
                    <img src={aestheticImg} alt="" className="w-[80%]" />
                  </div>
                  <h4 className="text-4xl lg:text-5xl font-semibold">
                    Align with your aesthetic.
                  </h4>
                  <p className="text-content">
                    Our improved image pipeline also enables more creative
                    styles, which allow you to{" "}
                    <span className="text-white">
                      customize the different moods of a photo
                    </span>{" "}
                    through color.
                  </p>
                  <p className="text-content">
                    With the power of A18 Pro, you can see the style applied in
                    a live preview — like professional color grading in real
                    time.
                  </p>
                </div>
                <div className="details w-full h-full md:h-[100vh] flex justify-center gap-8 flex-col mt-32 md:mt-0">
                  <div className="flex-center w-full h-full md:hidden">
                    <img src={megapixelsImg} alt="" className="w-[80%]" />
                  </div>
                  <h4 className="text-4xl lg:text-5xl font-semibold">
                    Make the most of your megapixels.
                  </h4>
                  <p className="text-content">
                    Personalize every style even more with the new control pad,
                    which makes it{" "}
                    <span className="text-white">
                      easy to adjust tone and color simultaneously.
                    </span>{" "}
                    You can also use the slider to adjust the intensity of the
                    specific colors, instead of applying a one-size-fits-all
                    approach.
                  </p>
                </div>
              </div>
            </div>
            <div className="right w-[300px] lg:w-[400px] h-[100vh] md:block hidden">
              <div className="photos relative overflow-hidden h-full">
                <div className="photo absolute flex-center w-full h-full">
                  <img src={toneImg} alt="" className="w-[90%]" />
                </div>
                <div className="photo absolute flex-center w-full h-full">
                  <img src={aestheticImg} alt="" className="w-[90%]" />
                </div>
                <div className="photo absolute flex-center w-full h-full">
                  <img src={megapixelsImg} alt="" className="w-[90%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotographicStyle;
