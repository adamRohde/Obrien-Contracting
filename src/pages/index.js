import * as React from "react";
import "../styles/main.scss";
import "react-slideshow-image/dist/styles.css";
import NavBar from "../components/navbar/navbar";
import About from "../components/about/about";
import Services from "../components/services/services";
import Gallery from "../components/gallery/gallery";
import Reviews from "../components/reviews/reviews";
import Contact from "../components/contact/contact";
import Hero from "../components/hero/hero";

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Obrien Contracting</title>
      <section id="main-container">
        <NavBar></NavBar>
        <Hero></Hero>
        <section id="about">
          <About></About>
        </section>
        <section id="services">
          <Services></Services>
        </section>
        <section id="gallery">
          <Gallery></Gallery>
        </section>
        <section id="reviews">
          <Reviews></Reviews>
        </section>
        <section id="contact">
          <Contact></Contact>
        </section>
      </section>
    </main>
  );
};

export default IndexPage;
