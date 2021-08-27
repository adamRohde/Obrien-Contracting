import React from "react";
import mepic from "../../images/rory.jpg";
import data from "../../Data/data";

function about() {
  return (
    <div className="about-container">
      <div className="h2-container">
        <h2>About</h2>
      </div>
      <p>{data.about.intro}</p>

      <div
        className="picture-of-me"
        style={{ backgroundImage: `url(${data.about.about_picture})` }}
      ></div>
    </div>
  );
}

export default about;
