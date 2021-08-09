import React from "react";
import StackedLayoutCarousel from "../../components/StackedLayoutCarousel/stackedLayoutCarousel";
import styles from "./stackedLayoutCarouselContainer.module.scss";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import img3 from "../../assets/images/img3.jpg";
import img4 from "../../assets/images/img4.jpg";
import img5 from "../../assets/images/img5.jpg";
import useWindowSize from "../../hooks/useResizeHook";
const DEVICE_BREAKPOINT = 1024;

export default function StackedLayoutCarouselContainer() {
  const windowSize = useWindowSize();

  return (
    <div className={styles.content}>
      {windowSize.width < DEVICE_BREAKPOINT && (
        <div className={styles.container}>
          <h1 className={styles.stackedLayoutDescriptionTitle}>Wildlife</h1>
          <StackedLayoutCarousel images={[img1, img2, img3, img4, img5]} />
          <p className={styles.stackedLayoutCarouselDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      )}
      {windowSize.width >= DEVICE_BREAKPOINT && (
        <div className={styles.container}>
          <StackedLayoutCarousel images={[img1, img2, img3, img4, img5]} />
          <div className={styles.stackedLayoutDescriptionContainer}>
            <h1 className={styles.stackedLayoutDescriptionTitle}>Wildlife</h1>
            <p className={styles.stackedLayoutCarouselDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
