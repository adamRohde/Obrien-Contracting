import React from "react";
import mepic from "../../images/rory.jpg";

function about() {
  return (
    <div className="about-container">
      <div className="h2-container">
        <h2>About</h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu
        enim nec est porttitor gravida. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Ut ac nisi sapien. Curabitur at felis
        non tortor sollicitudin rutrum ac nec mauris. Nam purus elit,
        posuere sed sapien non, interdum viverra ipsum. Cras et ipsum
        lacinia, auctor tortor sit amet, luctus tortor. Morbi gravida purus
        nec purus bibendum, vitae facilisis diam laoreet. Pellentesque
        tortor nibh, porta ac laoreet sed, semper quis tortor.{" "}
      </p>

      <div
        className="picture-of-me"
        style={{ backgroundImage: `url(${mepic})` }}
      ></div>
    </div>
  );
}

export default about;
