import React from "react";
import data from "../../Data/data";

function contact() {
  return (
    <div className="contact-container">
      <div className="h2-container">
        <h2>Contact</h2>
      </div>
      <div className="spacer-container">
        <div className="contact-info">
          <h3>Mobile - {data.contact.mobile}</h3>
          <h3>
            Email -<a href={data.contact.email}>{data.contact.email}</a>
          </h3>
          <h3>
            <a href={data.contact.linkedin}>LinkedIn</a>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default contact;
