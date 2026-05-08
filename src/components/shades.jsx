import React from "react";
import color from "../images/color.jpeg";

export const Shades = () => {
  return (
    <div id="portfolio" className="text-center shades-section">

      <div className="container">

        {/* Heading */}
        <div className="section-title">
          <h2 className="shade-heading">
            Shades Available
          </h2>

          <p className="shade-subtitle">
            Explore our wide range of premium zipper shades designed to match
            every fabric and style perfectly.
          </p>
        </div>

        {/* Full Screen Image */}
        <div className="shade-image-wrapper">

          <img
            src={color}
            alt="Color Chart"
            className="full-screen-shade-image"
            onError={(e) => {
              e.target.src = "https://via.placeholder.com/1200x600";
            }}
          />

        </div>

      </div>
    </div>
  );
};