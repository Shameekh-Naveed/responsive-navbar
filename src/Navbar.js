import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav>
      <span className="" id="logo">
        <img src="https://img.icons8.com/external-kosonicon-flat-kosonicon/50/000000/external-weather-news-weather-kosonicon-flat-kosonicon-5.png" />
      </span>
      <span className="" id="hamburger">
        <img
          src="https://img.icons8.com/fluency/32/000000/menu-rounded.png"
          onClick={() => setActive(!active)}
        />
      </span>
      <ul className={`${active ? "active" : ""}`}>
        {/* <div className="push"> */}
        <li className={`nav-item`}>
          <a href="#">Home</a>
        </li>
        {/* </div> */}
        <li className="nav-item">
          <a href="#">About Us</a>
        </li>
        <li className="nav-item">
          <a href="#">Login</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
