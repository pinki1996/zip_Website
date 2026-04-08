import React from "react";

export const Footer = () => {
  const whatsappMessage = `I want to buy this product: `;
  const whatsappLink = `https://wa.me/919289492133?text=${encodeURIComponent(whatsappMessage)}`;
  return (
    <div id="footer">
      <a
        id="whatsapp-link"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-md custom-btn"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
      <div className="container text-center">
        <p>
          &copy; 2023 Premium Concealed Zippers by Ziphosa. Design by{" "}
          {/* <a href="http://www.templatewire.com" rel="nofollow"> */}A Brand
          of D.A ENTERPRISES
          {/* </a> */}
        </p>
      </div>
    </div>
  );
};
