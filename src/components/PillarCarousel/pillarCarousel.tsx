import React, { useState } from "react";
import "./pillarCarousel.scss";

interface PillarCarouselProps {
  images: string[];
}

export default function PillarCarousel({ images }: PillarCarouselProps) {
  const [carouselAnimation, setCarouselAnimation] = useState({
    isLeftAnimationActive: false,
    isRightAnimationActive: false,
    imageIndex: 0,
  });

  const getImageIndex = (index: number) =>
    (((carouselAnimation.imageIndex + index) % images.length) + images.length) %
    images.length;

  const leftClickEndAnimation = () => {
    if (
      carouselAnimation.isLeftAnimationActive ||
      carouselAnimation.isRightAnimationActive
    ) {
      setCarouselAnimation((prevState) => {
        return {
          ...prevState,
          isLeftAnimationActive: false,
          imageIndex:
            prevState.imageIndex === 0
              ? images.length - 1
              : prevState.imageIndex - 1,
        };
      });
    }
  };

  const rightClickEndAnimation = () => {
    if (
      carouselAnimation.isLeftAnimationActive ||
      carouselAnimation.isRightAnimationActive
    ) {
      setCarouselAnimation((prevState) => {
        return {
          ...prevState,
          isRightAnimationActive: false,
          imageIndex:
            prevState.imageIndex === images.length - 1
              ? 0
              : prevState.imageIndex + 1,
        };
      });
    }
  };

  const animate = () =>
    setCarouselAnimation((prevState) => {
      return { ...prevState, isLeftAnimationActive: true };
    });

  const animateRight = () =>
    setCarouselAnimation((prevState) => {
      return { ...prevState, isRightAnimationActive: true };
    });

  return (
    <>
      <div
        className="helping-container"
        data-animate={carouselAnimation.isLeftAnimationActive}
      >
        <img src={images[getImageIndex(-2)]} alt="image" className="image" />
      </div>

      <div
        className={`left`}
        onAnimationEnd={() => {
          if (carouselAnimation.isLeftAnimationActive) {
            leftClickEndAnimation();
          }
        }}
        data-animate={carouselAnimation.isLeftAnimationActive}
        data-animate-to-left={carouselAnimation.isRightAnimationActive}
      >
        <img
          src={images[getImageIndex(-1)]}
          alt="image"
          className="image"
          onClick={animate}
        />
      </div>

      <div
        className={`center`}
        data-animate={carouselAnimation.isLeftAnimationActive}
        data-animate-to-left={carouselAnimation.isRightAnimationActive}
      >
        <img src={images[getImageIndex(0)]} className="image" alt="image" />
      </div>

      <div
        className={`right`}
        data-animate={carouselAnimation.isLeftAnimationActive}
        data-animate-to-left={carouselAnimation.isRightAnimationActive}
        onAnimationEnd={() => {
          if (carouselAnimation.isRightAnimationActive) {
            rightClickEndAnimation();
          }
        }}
      >
        <img
          src={images[getImageIndex(1)]}
          className="image"
          alt="image"
          onClick={animateRight}
        />
      </div>

      <div
        className="helping-right-container"
        data-animate-to-left={carouselAnimation.isRightAnimationActive}
      >
        <img src={images[getImageIndex(2)]} className="image" alt="image" />
      </div>
    </>
  );
}
