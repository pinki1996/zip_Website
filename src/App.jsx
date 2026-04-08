import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import HomePage from "./components/home";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import { Route, Routes } from "react-router-dom";
import { Login } from "./components/login";
import { Signin } from "./components/signin";
import { SingleProduct } from "./components/singleProduct";
import { Footer } from "./components/footer";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  // ✅ WhatsApp dynamic link
  const whatsappMessage = `I want to buy this product`;
  const whatsappLink = `https://wa.me/919289492133?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route
            path="/productId/:id"
            element={<SingleProduct data={landingPageData.Gallery} />}
          />
          <Route
            path="/service"
            element={<Services data={landingPageData.Services} />}
          />
          <Route
            path="/product"
            element={<Gallery data={landingPageData.Gallery} />}
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>

      {/* ✅ WhatsApp Floating Button (OUTSIDE everything) */}
      <a
        id="whatsapp-link"
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-whatsapp"></i>
      </a>
    </>
  );
};

export default App;