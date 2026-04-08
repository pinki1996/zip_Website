import React, { useEffect } from "react";
// import { Navigation } from "./navigation";
// import { Footer } from "./footer";

export const Services = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  console.log(props.data)
  return (
    <>
      {/* <Navigation /> */}
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>
              Reliable Zipper Solutions for Garment Manufacturers Across India
            </p>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.name}-${i}`} className="col-md-4">
                    {" "}
                    <i className={d.icon}></i>
                    <div className="service-desc">
                      <h3>{d.name}</h3>
                      <p>{d.text}</p>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};
