import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Slide } from "react-slideshow-image";
import pic1 from "../../images/project-pic1.jpg";
import pic2 from "../../images/project-pic2.jpg";
import pic3 from "../../images/project-pic3.jpg";
import pic4 from "../../images/project-pic4.jpg";
import pic5 from "../../images/project-pic5.jpg";

function gallery() {
  return (
    <div className="gallery-container">
      <div className="h2-container">
        <h2>Gallery</h2>
      </div>
      <div className="gallery">
        <Slide easing="ease">
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${pic1})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${pic2})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${pic3})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${pic4})` }}></div>
          </div>
          <div className="each-slide">
            <div style={{ backgroundImage: `url(${pic5})` }}></div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default gallery;
