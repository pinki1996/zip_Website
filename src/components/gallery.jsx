import { Image } from "./image";
import React, { useEffect } from "react";
import { Navigation } from "./navigation";
import { Link } from "react-router-dom";

export const Gallery = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navigation />
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Products</h2>
            <p>
              The 2CC Concealed Zipper is designed to provide a seamless and
              invisible finish, making it ideal for garments where aesthetics
              matter. Crafted with fine nylon coil teeth, this zipper blends
              perfectly into the fabric, ensuring a clean and elegant look.
            </p>
          </div>

          <div className="see-more-container">
            <Link to="/product" className="see-more-btn">
              See More
            </Link>
          </div>
          <div className="row">
            <div className="portfolio-items">
              {props.data
                ? props.data.slice(0, 6).map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-sm-6 col-md-4 col-lg-4"
                    >
                      <Image
                        id={d.id}
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
                        className="product-img"
                      />
                    </div>
                  ))
                : "Loading..."}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};
