"use client";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { VideoBg } from "../VideoBg";

export const AppSlider = () => {
  const sliderRef = useRef<any>(null);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    swipeToSlide: true,
    vertical: true,
    verticalSwiping: true,
  };

  const handleScroll = (event: any) => {
    console.log("🚀 ~ handleScroll ~ event:", event);
    console.log("🚀 ~ handleScroll ~ sliderRef.current:", sliderRef.current);
    if (event.deltaY > 0) {
      sliderRef?.current?.slickNext(); // Go to the next slide
    } else if (event.deltaY < 0) {
      sliderRef?.current?.slickPrev(); // Go to the previous slide
    }
  };

  return (
    <div className="sliderContainer" onWheel={handleScroll}>
      <Slider {...settings} ref={sliderRef}>
        <div className="content">
          <div className="videoCard">
            <VideoBg />
          </div>
        </div>
        <div className="content">hello every one</div>
        <div className="content">hello every one</div>
        <div className="content">hello every one</div>
        <div className="content">hello every one</div>
        <div className="content">hello every one</div>
      </Slider>
    </div>
  );
};
