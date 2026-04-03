import React from "react";
import { useParams } from "react-router";
import { Navigation } from "./navigation";

export const SingleProduct = (props) => {
  const { id } = useParams();

  const item = props.data?.find((d) => String(d.id) === String(id));

  if (!props.data || props.data.length === 0) {
    return <h2>Loading...</h2>;
  }

  if (!item) {
    return <h2>Product not found</h2>;
  }

  const smallImage = item.smallImage
    ? item.smallImage.startsWith("http")
      ? item.smallImage
      : "/" + item.smallImage
    : "/images/default.png";

  const title = item.title || "No Title";

  return (
    <>
      <Navigation />

      <div id="portfolio">
        <div className="container">

          {/* FLEX CONTAINER */}
          <div className="product-flex">

            {/* LEFT: IMAGE */}
            <div className="product-image">
              <img
                src={smallImage}
                alt={title}
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/400";
                }}
              />
            </div>

            {/* RIGHT: DETAILS */}
            <div className="product-details">
              <h1>{title}</h1>
              <h3>Product ID: {id}</h3>

              <h3>Features</h3>
              <ol>
                <li>Invisible finish – Hidden teeth</li>
                <li>Smooth operation – Easy opening</li>
                <li>Lightweight & durable</li>
                <li>Versatile use</li>
                <li>Wide color range</li>
                <li>Fine teeth (2CC)</li>
              </ol>

              <h3>Application</h3>
              <p>Dresses, skirts, blouses, gowns, cushions, etc.</p>

              <h3>Material</h3>
              <p>Nylon</p>

              <h3>Type</h3>
              <p>Concealed / Invisible zipper</p>

              {/* Buttons */}
              <div style={{ marginTop: "20px" }}>
                <button className="btn btn-md custom-btn">
                  <i className="fa fa-shopping-cart"></i>
                  Add to Cart
                </button>

                <button className="btn btn-md custom-btn">
                  <i className="fa fa-bolt"></i>
                  Buy Now
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </>
  );
};