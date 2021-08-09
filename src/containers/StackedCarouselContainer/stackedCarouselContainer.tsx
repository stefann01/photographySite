import React from "react";
import StackedCarousel from "../../components/StackedCarousel/stackedCarousel";
import img1 from "../../assets/_MG_3954-min.jpg";
import img2 from "../../assets/_MG_3821-min.jpg";
import img3 from "../../assets/_MG_3815-min.jpg";
import img4 from "../../assets/_MG_3964-min.jpg";
import img5 from "../../assets/_MG_3847-min.jpg";

import styles from "./stackedCarouselContainer.module.scss";
import SectionDescription from "../../components/SectionDescription/sectionDescription";
import useWindowSize from "../../hooks/useResizeHook";
const DEVICE_BREAKPOINT = 1024;

export default function StackedCarouselContainer() {
  const windowSize = useWindowSize();
  return (
    <div className={styles.stackedContainer}>
      {windowSize.width < DEVICE_BREAKPOINT && (
        <>
          <h1>City day and night</h1>
          <div className={styles.stackedCarouselContainer}>
            <StackedCarousel images={[img1, img2, img3, img4, img5]} />
          </div>
          <SectionDescription className={"pillarDescription"} />
        </>
      )}

      {windowSize.width >= DEVICE_BREAKPOINT && (
        <>
          <div className={styles.stackedCarouselContainer}>
            <StackedCarousel images={[img1, img2, img3, img4, img5]} />
          </div>
          <div className={styles.stackedCarouselDescription}>
            <h1>City day and night</h1>
            <SectionDescription className={"pillarDescription"} />
          </div>
        </>
      )}
    </div>
  );
}
