import React from "react";
import image from "../../assets/_MG_4637.jpg";
import "./mainPreview.scss";
export default function MainPreview() {
  return (
    <div className="main-preview-content">
      <img
        className="main-preview-image"
        width="100%"
        height="100%"
        src={image}
        alt="Main preview cover"
      />
      <div className="text-content">
        <h1 className="text-content-title">Lorem ipsum</h1>
        <p className="text-content-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
}
