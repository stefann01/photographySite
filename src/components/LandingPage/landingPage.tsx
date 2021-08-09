import React from "react";
import img1 from "../../assets/images/img1.jpg";
import img2 from "../../assets/images/img2.jpg";
import cube from "../../assets/products/cube.png";
import SingleRotateCarousel from "../SingleRotateCarousel/SingleRotateCarousel";
import MainPreview from "../MainPreview/mainPreview";
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
      <StackedCarouselContainer />
      {/* Second element */}
      <PillarCarouselContainer />
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
