import * as React from "react";
import "../styles/main.scss";
import "react-slideshow-image/dist/styles.css";
import NavBar from "../components/navbar/navbar";
import SlideShow from "../components/slideshow/slideshow";
import About from "../components/about/about";
import Services from "../components/services/services";
import Reviews from "../components/reviews/reviews";
import Contact from "../components/contact/contact";
import Hero from "../components/hero/hero";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Obrien Contracting</title>
      <NavBar></NavBar>
      <div id="hero">
        <Hero></Hero>
      </div>
      <div id="about">
        <About></About>
      </div>
      <div id="services">
        <Services></Services>
      </div>
      <div id="reviews">
        <Reviews></Reviews>
      </div>
      <div id="gallery">
        <SlideShow></SlideShow>
      </div>
      <div id="contact">
        <Contact></Contact>
      </div>
    </main>
  );
};

export default IndexPage;
