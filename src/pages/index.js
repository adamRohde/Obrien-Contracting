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
      <section id="hero">
        <Hero></Hero>
      </section>
      <section id="about">
        <About></About>
      </section>
      <section id="services">
        <Services></Services>
      </section>
      <section id="reviews">
        <Reviews></Reviews>
      </section>
      <section id="gallery">
        <SlideShow></SlideShow>
      </section>
      <section id="contact">
        <Contact></Contact>
      </section>
    </main>
  );
};

export default IndexPage;
