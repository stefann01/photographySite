import React, { useCallback, useEffect, useRef, useState } from "react";
import Carousel from "../Carousel/carousel";
import Header from "../Header/header";
import img1 from "../../assets/_MG_3954-min.jpg";
import img2 from "../../assets/_MG_3821-min.jpg";
import img3 from "../../assets/_MG_3815-min.jpg";
import img4 from "../../assets/_MG_3964-min.jpg";
import img5 from "../../assets/_MG_3847-min.jpg";
import cube from "../../assets/products/cube.png";
import PillarCarousel from "../PillarCarousel/pillarCarousel";
import StackedCarousel from "../StackedCarousel/stackedCarousel";
import SingleRotateCarousel from "../SingleRotateCarousel/SingleRotateCarousel";
import MainPreview from "../MainPreview/mainPreview";
import DoubleArrowDown from "../../assets/double-arrow-down-thin.svg";
import StackedLayoutCarousel from "../StackedLayoutCarousel/stackedLayoutCarousel";
import PillarCarouselContainer from "../../containers/PillarCarousel/pillarCarousel.container";
import StackedCarouselContainer from "../../containers/StackedCarouselContainer/stackedCarouselContainer";

import styles from "./landingPage.module.scss";
import StackedLayoutCarouselContainer from "../../containers/StackedLayoutCarouselContainer/stackedLayoutCarouselContainer";
import FlyingCarouselContainer from "../../containers/FlyingCarousel/flyingCarousel";

enum PreviewSections {
  Main,
  Pillar,
  Stacked,
}
export default function LandingPage() {
  return (
    <div className={styles.landingPageContainer} id="landingPage">
      {/* <Header /> */}
      <div
        style={{
          position: "relative",
          width: "stretch",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <MainPreview />
      </div>
      {/* First element */}
      <StackedCarouselContainer /> {/* works fine */}
      {/* Second element */}
      <PillarCarouselContainer /> {/* works fine */}
      {/* Third element */}
      <div
        style={{ position: "relative", height: "100vh", overflow: "hidden" }}
      >
        <SingleRotateCarousel images={[img1, img2, cube]} />
      </div>
      {/* Forth element */}
      <StackedLayoutCarouselContainer />
      <FlyingCarouselContainer />
    </div>
  );
}
