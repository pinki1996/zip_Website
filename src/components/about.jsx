import React, { useEffect } from "react";
// import { Navigation } from "./navigation";

export const About = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* <Navigation /> */}
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>About Us</h2>
                <p>
                  At D.A ENTERPRISES, based in Delhi NCR, we specialize in
                  delivering high-quality concealed zippers that combine
                  durability, precision, and smooth performance. With a strong
                  presence in the industry, we cater to garment manufacturers,
                  exporters, and fashion brands across India.
                </p>
                <p>
                  We are committed to maintaining superior quality standards
                  while ensuring timely delivery and competitive pricing. Our
                  goal is to build long-term relationships with our clients by
                  providing dependable service and customized solutions tailored
                  to their needs. Today, D.A ENTERPRISES proudly serves clients
                  all over India, ensuring consistent supply and customer
                  satisfaction.
                </p>
                <h3>Why Choose Us?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul><i className="fa fa-check"></i>
                      High-quality concealed zippers
                    </ul>
                    <ul><i className="fa fa-check"></i>Reliable supply across India</ul>
                    <ul><i className="fa fa-check"></i>Competitive pricing structure</ul>
                    <ul><i className="fa fa-check"></i>Timely delivery & efficient logistics</ul>
                    <ul><i className="fa fa-check"></i>Strong customer support</ul>
                    <ul><i className="fa fa-check"></i>Trusted by manufacturers & exporters</ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
