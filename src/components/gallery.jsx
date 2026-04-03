import { Image } from "./image";
import React from "react";
import { Navigation } from "./navigation";

export const Gallery = (props) => {
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
          <div className="row">
            <div className="portfolio-items">
              {props.data
                ? props.data.map((d, i) => (
                    <div
                      key={`${d.title}-${i}`}
                      className="col-sm-6 col-md-4 col-lg-4"
                    >
                      <p>{d.title}</p>
                      <Image
                        id={d.id}
                        title={d.title}
                        largeImage={d.largeImage}
                        smallImage={d.smallImage}
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
