import React from "react";
import StackedLayoutCarousel from "../../components/StackedLayoutCarousel/stackedLayoutCarousel";
import styles from "./stackedLayoutCarouselContainer.module.scss";
import img1 from "../../assets/_MG_3954-min.jpg";
import img2 from "../../assets/_MG_3821-min.jpg";
import img3 from "../../assets/_MG_3815-min.jpg";
import img4 from "../../assets/_MG_3964-min.jpg";
import img5 from "../../assets/_MG_3847-min.jpg";
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
