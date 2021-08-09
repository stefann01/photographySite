import React from "react";
import "./navigator.scss";

export default function Navigator() {
  return (
    <div className="navigator">
      <p>My Work</p>
      <div className="navigator-list">
        <div className="navigator-item-list">
          <p>Portraits</p>
        </div>
        <div className="navigator-item-list">
          <p>Product</p>
        </div>
        <div className="navigator-item-list">
          <p>Landscapes</p>
        </div>
        <div className="navigator-item-list">
          <p>City Night And Day</p>
        </div>
        <div className="navigator-item-list">
          <p>Editing</p>
        </div>
      </div>
    </div>
  );
}
