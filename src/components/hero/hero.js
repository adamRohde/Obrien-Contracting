import React from "react";
import heropic from "../../images/project-pic2.jpg";
import scrollTo from "gatsby-plugin-smoothscroll";
import data from "../../Data/data";

function hero() {
  return (
    <div className="hero-container">
      <div
        className="hero-picture"
        style={{ backgroundImage: `url(${data.home.hero_picture})` }}
      ></div>

      <button
        className="learn-more"
        onClick={() => {
          scrollTo("#about");
        }}
      >
        Learn More
      </button>
    </div>
  );
}

export default hero;
