import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import { Slide } from "react-slideshow-image";
import data from "../../Data/data";

function gallery() {
  return (
    <div className="gallery-container">
      <div className="h2-container">
        <h2>Gallery</h2>
      </div>
      <div className="gallery">
        <Slide easing="ease">
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${data.gallery.gallery_picture1})`,
              }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${data.gallery.gallery_picture2})`,
              }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${data.gallery.gallery_picture3})`,
              }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${data.gallery.gallery_picture4})`,
              }}
            ></div>
          </div>
          <div className="each-slide">
            <div
              style={{
                backgroundImage: `url(${data.gallery.gallery_picture5})`,
              }}
            ></div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default gallery;
