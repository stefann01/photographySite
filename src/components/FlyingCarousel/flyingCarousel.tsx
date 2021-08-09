import React, { useEffect, useState } from "react";
import styles from "./flyingCarousel.module.scss";

interface FlyingCarouselProps {
  images: string[];
  animate: boolean;
}

export default function FlyingCarousel({
  images,
  animate,
}: FlyingCarouselProps) {
  const [carousel, setCarousel] = useState({
    animate: false,
    index: 0,
  });

  useEffect(() => {
    setCarousel((prevCarousel) => {
      return { ...prevCarousel, animate: true };
    });
  }, [animate]);

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
    <div className={styles.container}>
      <div className={styles.firstItem}>
        <img
          className={styles.image}
          alt="test"
          src={images[getImageIndex(3)]}
        />
      </div>
      <div className={styles.secondItem} data-animate={carousel.animate}>
        <img
          className={styles.image}
          alt="test"
          src={images[getImageIndex(2)]}
        />
      </div>
      <div className={styles.thirdItem} data-animate={carousel.animate}>
        <img
          className={styles.image}
          alt="test"
          src={images[getImageIndex(1)]}
        />
      </div>
      <div
        className={styles.fourthItem}
        data-animate={carousel.animate}
        onAnimationEnd={handleAnimationEnd}
      >
        <img
          className={styles.image}
          alt="test"
          src={images[getImageIndex(0)]}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
}
