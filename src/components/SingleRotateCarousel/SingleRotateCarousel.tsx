import React, { useState } from "react";
import "./singleRotateCarousel.scss";

import LeftArrow from "../../assets/left-arrow.svg";
import RightArrow from "../../assets/right-arrow.svg";

interface SingleRotateCarouselProps {
  images: string[];
}

export default function SingleRotateCarousel({
  images,
}: SingleRotateCarouselProps) {
  const [carousel, setCarousel] = useState({
    animateLeft: false,
    animateRight: false,
    index: 0,
  });

  const getImageIndex = (imageNumber: number) =>
    (((carousel.index + imageNumber) % images.length) + images.length) %
    images.length;

  const handlePrevClick = () => {
    setCarousel((prevCarousel) => {
      return { ...prevCarousel, animateLeft: true };
    });
  };

  const handleNextClick = () => {
    setCarousel((prevCarousel) => {
      return { ...prevCarousel, animateRight: true };
    });
  };

  const onAnimationEnd = () => {
    setCarousel((prevState) => {
      return {
        ...prevState,
        animateLeft: false,
        animateRight: false,
        index: prevState.animateLeft
          ? prevState.index === 0
            ? images.length - 1
            : prevState.index - 1
          : prevState.index === images.length - 1
          ? 0
          : prevState.index + 1,
      };
    });
  };

  return (
    <div className="single-rotate-container">
      <div className="single-rotate-control">
        <img
          src={LeftArrow}
          alt={"Previous"}
          className="btn-image"
          onClick={handlePrevClick}
        />

        <span>Watch</span>

        <img
          src={RightArrow}
          alt="Next"
          className="btn-image"
          onClick={handleNextClick}
        />
      </div>
      {/* Left rectangle */}
      <div
        className="left-rectangle"
        data-animate-right={carousel.animateRight}
      >
        <div className="orbit-element-left">
          <img
            className="single-rotate-image"
            alt="image"
            src={images[getImageIndex(2)]}
          />
        </div>
      </div>
      {/* Main rectangle */}
      <div
        className="rectangle"
        data-animate-left={carousel.animateLeft}
        data-animate-right={carousel.animateRight}
        onAnimationEnd={onAnimationEnd}
      >
        <div className="orbit-element">
          <img
            className="single-rotate-image"
            src={images[getImageIndex(1)]}
            alt="image"
          />
        </div>
      </div>

      {/* Right rectangle */}
      <div className="right-rectangle" data-animate-left={carousel.animateLeft}>
        <div className="orbit-element-right">
          <img
            className="single-rotate-image"
            alt="image"
            src={images[getImageIndex(0)]}
          />
        </div>
      </div>
    </div>
  );
}
