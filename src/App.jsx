import React, { useState, useEffect } from "react";
// import { Navigation } from "./components/navigation";
// import { Header } from "./components/header";
// import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import HomePage from "./components/home";
// import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      {/* <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} /> */}
      {/* <Team data={landingPageData.Team} />  */}
      {/* <Contact /> */}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/service"
          element={<Services data={landingPageData.Services} />}
        ></Route>
        <Route
          path="/product"
          element={<Gallery data={landingPageData.Gallery} />}
        ></Route>
        {/*<Route path='cart' element={<CartPage/>}></Route>   */}
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
};

export default App;
