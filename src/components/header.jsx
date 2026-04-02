import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import bg1 from "../images/bg/bgimg-1.jpeg";
import bg2 from "../images/bg/bg-2.jpeg";
import bg3 from "../images/bg/bg-3.jpeg";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="">
            <div className="row">
              <div className=" intro-text">
                <Carousel showStatus={false} showThumbs={false}>
                  <div>
                    <img src={bg2}  className=""/>
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  <div>
                    <img src={bg1} />
                    {/* <p className="legend">Legend 2</p> */}
                  </div>
                  <div>
                    <img src={bg3} />
                    {/* <p className="legend">Legend 3</p> */}
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
