import React from "react";
import { Link } from "react-router-dom";

export const Image = ({ title, largeImage, smallImage, id }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        {" "}
        <Link
          to={`/productId/${id}`}
          title={title}
          largeImage={largeImage}
          smallImage={smallImage}
          data-lightbox-gallery="gallery1"
        >
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <img src={smallImage} className="img-responsive" alt={title} />{" "}  
        
        


        </Link>{" "}
        
      </div>
    </div>
  );
};
