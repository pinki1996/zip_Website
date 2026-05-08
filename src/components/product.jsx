import React, { useEffect, useState } from "react";
import { Image } from "./image";
import { Navigation } from "./navigation";

export const Product = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const totalPages = Math.ceil(
    (props.data ? props.data.length : 0) / itemsPerPage,
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedProducts = props.data?.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

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
              {selectedProducts
                ? selectedProducts.map((d, i) => (
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

          {/* Pagination Buttons */}
          <div className="pagination-container">
            <button
              className="pagination-btn"
              disabled={currentPage === 1}
              onClick={() => {
                setCurrentPage(currentPage - 1);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                className={`pagination-btn ${
                  currentPage === index + 1 ? "active-page" : ""
                }`}
                onClick={() => {
                  setCurrentPage(index + 1);
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                {index + 1}
              </button>
            ))}

            <button
              className="pagination-btn"
              disabled={currentPage === totalPages}
              onClick={() => {
                setCurrentPage(currentPage + 1);
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
