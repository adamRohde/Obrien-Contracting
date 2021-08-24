import React from "react";
import heropic from "../../images/project-pic2.jpg";
import scrollTo from "gatsby-plugin-smoothscroll";

// import mepic from "../../images/rory.jpg";

function hero() {
  return (
    <div className="hero-container">
      <div
        className="hero-picture"
        style={{ backgroundImage: `url(${heropic})` }}
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
