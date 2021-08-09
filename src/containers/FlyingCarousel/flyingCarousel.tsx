import React, { useState } from "react";
import FlyingCarousel from "../../components/FlyingCarousel/flyingCarousel";
import img1 from "../../assets/_MG_3954-min.jpg";
import img2 from "../../assets/_MG_3821-min.jpg";
import img3 from "../../assets/_MG_3815-min.jpg";
import img4 from "../../assets/_MG_3964-min.jpg";
import img5 from "../../assets/_MG_3847-min.jpg";
import styles from "./flyingCarousel.module.scss";
//@ts-ignore
import DoubleArrowRight from "../../assets/double-right-arrow.svg";
import useToggle from "../../hooks/useToggle";
import useWindowSize from "../../hooks/useResizeHook";

const DEVICE_BREAKPOINT = 1024;

export default function FlyingCarouselContainer() {
  const [animate, toggleAnimate] = useToggle();
  const windowSize = useWindowSize();

  return (
    <div className={styles.container}>
      {windowSize.width < DEVICE_BREAKPOINT && (
        <>
          <div className={styles.carouselContent}>
            <FlyingCarousel
              images={[img1, img2, img3, img4, img5]}
              animate={animate}
            />
          </div>
          <div
            role="button"
            className={styles.roundButton}
            onClick={toggleAnimate}
          >
            <img
              src={DoubleArrowRight}
              alt="test"
              className={styles.arrowIcon}
            />
          </div>
          <div className={styles.descriptionContainer}>
            <h1>Landscape</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </>
      )}
      {windowSize.width >= DEVICE_BREAKPOINT && (
        <>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <div style={{ height: "100vh", width: "100%" }}>
              <FlyingCarousel
                images={[img1, img2, img3, img4, img5]}
                animate={animate}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h1>Landscape</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div
                role="button"
                className={styles.roundButton}
                onClick={toggleAnimate}
              >
                <img
                  src={DoubleArrowRight}
                  alt="test"
                  className={styles.arrowIcon}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
