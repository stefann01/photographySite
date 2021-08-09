import React from "react";

import four from "../assets/_MG_4018.jpg";
import one from "../assets/_MG_3815-min.jpg";
import two from "../assets/_MG_3847-min.jpg";
import three from "../assets/_MG_3978.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import "./content.scss";

export default function Content() {
  AOS.init();
  const durationValues = [100, 750, 1000, 2000, 800];
  //   const Math.floor(Math.random() * 5) + 1 = Math.floor(Math.random() * 5) + 1;
  console.log(Math.floor(Math.random() * 5) + 1);
  const duration = 800;
  return (
    <div className="container">
      <img
        src={one}
        alt=""
        data-aos="fade-up"
        data-aos-duration={duration}
        className="image"
      />
      <img
        src={two}
        alt=""
        className="image"
        data-aos="fade-up"
        data-aos-duration={duration}
      />
      <img
        src={three}
        alt=""
        className="image"
        data-aos="fade-up"
        data-aos-duration={duration}
      />
      <img
        src={four}
        alt=""
        className="image"
        data-aos="fade-up"
        data-aos-duration={duration}
      />
    </div>
  );
}
