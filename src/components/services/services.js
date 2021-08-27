import React from "react";
import data from "../../Data/data";

function services() {
  return (
    <div className="services-container">
      <div className="h2-container">
        <h2>Services</h2>
      </div>
      <p>{data.services.intro}</p>

      <ul>
        <li>{data.services.service1}</li>
        <li>{data.services.service2}</li>
        <li>{data.services.service3}</li>
        <li>{data.services.service4}</li>
        <li>{data.services.service5}</li>
      </ul>
    </div>
  );
}

export default services;
