import React, { useState } from "react";
import "./stackedLayoutCarousel.scss";
interface StackedLayoutCarouselProps {
  images: string[];
}
export default function StackedLayoutCarousel({
  images,
}: StackedLayoutCarouselProps) {
  const [carousel, setCarousel] = useState({
    animate: false,
    index: 0,
  });
  const getImageIndex = (imageNumber: number) =>
    (((carousel.index + imageNumber) % images.length) + images.length) %
    images.length;

  const handleClick = () => {
    setCarousel((prevCarousel) => {
      return { ...prevCarousel, animate: true };
    });
  };

  const onAnimationEnd = () => {
    setCarousel((prevCarousel) => {
      return { ...prevCarousel, animate: false, index: carousel.index + 1 };
    });
  };

  return (
    <div className="stacked-layout-container">
      <div className="image-container">
        <div className="fifth" data-animate={carousel.animate}>
          <img
            className="stacked-layout-image"
            alt="image"
            src={images[getImageIndex(4)]}
          />
        </div>
        <div className="forth" data-animate={carousel.animate}>
          <img
            className="stacked-layout-image"
            alt="image"
            src={images[getImageIndex(3)]}
          />
        </div>
        <div className="third" data-animate={carousel.animate}>
          <img
            className="stacked-layout-image"
            alt="image"
            src={images[getImageIndex(2)]}
          />
        </div>
        <div className="second" data-animate={carousel.animate}>
          <img
            className="stacked-layout-image"
            alt="image"
            src={images[getImageIndex(1)]}
          />
        </div>
        <div
          className="first"
          onClick={handleClick}
          onDoubleClick={handleClick}
          data-animate={carousel.animate}
          onAnimationEnd={onAnimationEnd}
        >
          <img
            className="stacked-layout-image"
            alt="image"
            src={images[getImageIndex(0)]}
          />
        </div>
      </div>
    </div>
  );
}
