import React, { useState } from "react";
import scrollTo from "gatsby-plugin-smoothscroll";
import data from "../../Data/data";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
    console.log("sidebar clicked");
  };

  return (
    <>
      <div className="heading">
        <h1>{data.home.companyname}</h1>

        <h3>Mobile: {data.home.mobilenumber}</h3>
      </div>
      <nav>
        <div className="in-nav-logo">
          <h4>{data.home.companyname}</h4>
        </div>
        <ul className={sidebar ? "nav-links nav-active" : "nav-links"}>
          <li
            href="#"
            onClick={() => {
              setSidebar(!sidebar);
              scrollTo("#main-container");
            }}
          >
            <a>Home</a>
          </li>
          <li
            href="#"
            onClick={() => {
              setSidebar(!sidebar);
              scrollTo("#about");
            }}
          >
            <a>About</a>
          </li>
          <li
            href="#"
            onClick={() => {
              setSidebar(!sidebar);
              scrollTo("#services");
            }}
          >
            <a>Services</a>
          </li>
          <li
            href="#"
            onClick={() => {
              setSidebar(!sidebar);
              scrollTo("#reviews");
            }}
          >
            <a>Reviews</a>
          </li>
          <li
            href="#"
            onClick={() => {
              setSidebar(!sidebar);
              scrollTo("#gallery");
            }}
          >
            <a>Gallery</a>
          </li>
          <li
            href="#"
            onClick={() => {
              setSidebar(!sidebar);
              scrollTo("#contact");
            }}
          >
            <a>Contact</a>
          </li>
        </ul>
        <div
          className={sidebar ? "burger toggle" : "burger"}
          onClick={showSidebar}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
