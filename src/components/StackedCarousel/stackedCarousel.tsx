import React, { useState } from "react";
import "./stackedCarousel.scss";

interface StackedCarouselProps {
  images: string[];
}

export default function StackedCarousel({ images }: StackedCarouselProps) {
  const [carousel, setCarousel] = useState({
    animate: false,
    index: 0,
  });

  const getImageIndex = (imageNumber: number) =>
    (((carousel.index + imageNumber) % images.length) + images.length) %
    images.length;

  const handleImageClick = () =>
    setCarousel((prevCarousel) => {
      return { ...prevCarousel, animate: true };
    });

  const handleAnimationEnd = () => {
    setCarousel((prevCarousel) => {
      return {
        ...prevCarousel,
        animate: false,
        index:
          prevCarousel.index === images.length - 1 ? 0 : prevCarousel.index + 1,
      };
    });
  };

  return (
    <div className="stacked-carousel-container">
      <div className="stack-4" data-animate={carousel.animate}>
        <img
          className="stack-image"
          alt="ceva"
          src={images[getImageIndex(3)]}
        />
      </div>

      <div className="stack-3">
        <img
          className="stack-image"
          alt="image"
          src={images[getImageIndex(2)]}
        />
      </div>
      <div className="stack-2" data-animate={carousel.animate}>
        <img
          className="stack-image"
          alt="image"
          src={images[getImageIndex(1)]}
        />
      </div>
      <div
        className="stack-1"
        onAnimationEnd={handleAnimationEnd}
        data-animate={carousel.animate}
      >
        <img
          className="stack-image"
          alt="image"
          src={images[getImageIndex(0)]}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}
