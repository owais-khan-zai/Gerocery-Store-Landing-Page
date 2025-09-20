import React, { useEffect, useRef, useState } from "react";
import slider1 from "../assets/HomePageAssets/slider-1.png";
import slider2 from "../assets/HomePageAssets/slider-2.png";
import gsap from "gsap";
const HeroSection = () => {
  let firstSlider = useRef();
  let secondSlider = useRef();

  let btn1 = useRef();
  let btn2 = useRef();

  const [active, setactive] = useState(1);

  const [Switch, setSwitch] = useState(false);

  const sliderAni = useRef(null); 

  const sliderAniFunction = () => {
    sliderAni.current = setInterval(() => {
      setSwitch((prev) => !prev);
    }, 3000);
  };

  useEffect(() => {
    sliderAniFunction(); // 🟡 Mount pe chalu
    return () => clearInterval(sliderAni.current);
  }, []);

  const mouseEnterHandler = () =>{
    clearInterval(sliderAni.current);
  }

  const mouseLeaveHandler = () =>{
    sliderAniFunction();
  } 

//   ye mouse enter and leave slider par hover krny par animation ko rokny ky lie banaya gaya hy
  useEffect(() => {
    if (Switch) {
      gsap.set(firstSlider.current, { display: "flex" }); // manually set display
      gsap.set(secondSlider.current, { display: "none" });
      gsap.to(firstSlider.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(secondSlider.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      setactive(1);
    } else {
      gsap.set(firstSlider.current, { display: "none" });
      gsap.set(secondSlider.current, { display: "flex" });
      gsap.to(firstSlider.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
      gsap.to(secondSlider.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.inOut",
      });

      setactive(2);
    }
  }, [Switch]);

  // ye upper animation ky lie use effect banaya hy is mn animation ka code hy jo slider par chal rhi hy

  const clickHandle = (val) => {
    setactive(val);
    if (val == 1) {
      firstSlider.current.style.display = "flex";
      secondSlider.current.style.display = "none";
      gsap.to(firstSlider.current, {
        opacity: 1,
        duration: 0.3,
        ease: "ease-in-out",
      });
      gsap.to(secondSlider.current, {
        opacity: 0,
        duration: 0.3,
        ease: "ease-in-out",
      });
    } else {
      firstSlider.current.style.display = "none";
      secondSlider.current.style.display = "flex";
      gsap.to(firstSlider.current, {
        opacity: 0,
        duration: 0.2,
        ease: "ease-in-out",
      });
      gsap.to(secondSlider.current, {
        opacity: 1,
        duration: 0.2,
        ease: "ease-in-out",
      });
    }
  };
  //  upper ka code mobile device ky lie hy
  const [arrow, setarrow] = useState(1);
  const arrowHandle = () => {
    const ActiveArrow = arrow == 1 ? 2 : 1;
    setarrow(ActiveArrow);

    if (ActiveArrow == 1) {
      (firstSlider.current.style.display = "flex"),
        (secondSlider.current.style.display = "none"),
        gsap.to(firstSlider.current, {
          opacity: 1,
          duration: 0.3,
          ease: "ease-in-out",
        });
      gsap.to(secondSlider.current, {
        opacity: 0,
        duration: 0.3,
        ease: "ease-in-out",
      });
    } else {
      (firstSlider.current.style.display = "none"),
        (secondSlider.current.style.display = "flex"),
        gsap.to(firstSlider.current, {
          opacity: 0,
          duration: 0.2,
          ease: "ease-in-out",
        });
      gsap.to(secondSlider.current, {
        opacity: 1,
        duration: 0.2,
        ease: "ease-in-out",
      });
    }
  };

  return (
    <div onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler} className="px-4 lg:px-6 mt-10 relative">
      <div className="hidden md:flex absolute top-1/2 left-0 w-full z-10 justify-between px-6 -translate-y-1/2">
        <div
          onClick={() => arrowHandle()}
          className=" relative right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer"
        >
          <i className="ri-arrow-left-s-line text-2xl"></i>
        </div>
        <div
          onClick={() => arrowHandle()}
          className="relative left-4 w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md cursor-pointer"
        >
          <i className="ri-arrow-right-s-line text-2xl"></i>
        </div>
      </div>
      {/* ye upper ka code arrow ka hy  */}

      <div
        ref={firstSlider}
        className=" w-full h-[25rem] lg:h-[32rem] flex relative rounded-3xl overflow-hidden  bg-cover bg-no-repeat bg-center  flex-col justify-center "
        style={{ backgroundImage: `url(${slider1})` }}
      >
        <div className="relative z-2 p-4 flex flex-col sm:w-[37rem] sm:p-10 lg:px-12  gap-6 text-[#253D4E]">
          <h1 className="heroHead text-[3.2rem] w-[80%] lg:text-[4rem] lg:w-[100%] leading-none font-semibold">
            Don't miss amazing grocery deals
          </h1>
          <h4 className="heroHead2 text-[1.5rem] text-zinc-600 lg:text-[1.6rem]">
            Sign up for daily newsletter
          </h4>
          <div className="mt-1 bg-white flex justify-between items-center rounded-full h-15 lg:mt-5">
            <div className=" ml-4 flex gap-2 items-center w-[60%]">
              <i className="ri-send-plane-line text-xl "></i>
              <input
                type="text"
                placeholder="Your email address "
                className="w-[130%] outline-none"
              />
            </div>
            <button className="heroButton bg-[#3BB77E] text-lg text-white h-full w-34 cursor-pointer rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div
        ref={secondSlider}
        className=" w-full h-[25rem] lg:h-[32rem] relative rounded-3xl overflow-hidden bg-cover  opacity-0 bg-no-repeat bg-center flex-col justify-center hidden"
        style={{ backgroundImage: `url(${slider2})` }}
      >
        <div className="relative z-2 p-4 lg:px-12 flex flex-col gap-6 text-[#253D4E] sm:w-[37rem] sm:p-10 ">
          <h1 className="heroHead text-[3.2rem] lg:text-[4rem] lg:w-[100%] leading-none font-semibold">
            Fresh Vegetables Big Discount
          </h1>
          <h4 className="heroHead2 text-[1.5rem] text-zinc-600 lg:text-[1.7rem]">
            Save up to 50% off on your first order
          </h4>
          <div className="mt-1 bg-white flex justify-between items-center rounded-full h-15 lg:mt-5">
            <div className=" ml-4 flex gap-2 items-center w-[60%]">
              <i className="ri-send-plane-line text-xl "></i>
              <input
                type="text"
                placeholder="Your email address "
                className="w-[130%] outline-none"
              />
            </div>
            <button className="heroButton bg-[#3BB77E] text-lg text-white h-full w-34 cursor-pointer rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="slideButtons w-full absolute z-2 bottom-3 left-[48%] flex gap-2 md:hidden">
        <div
          onClick={() => {
            clickHandle(1);
          }}
          ref={btn1}
          className={`rounded-full w-4 h-4 ${
            active == 1 ? "bg-[#3BB77E]" : "border-2 border-zinc-600"
          } cursor-pointer`}
        ></div>
        <div
          onClick={() => {
            clickHandle(2);
          }}
          ref={btn2}
          className={`rounded-full w-4 h-4 ${
            active == 2 ? "bg-[#3BB77E]" : "border-2 border-zinc-600"
          } cursor-pointer`}
        ></div>
      </div>
    </div>
  );
};

export default HeroSection;
