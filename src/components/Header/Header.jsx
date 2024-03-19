import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSosial from "./HeaderSosial";
import IMG2 from "../../assets/image/img3.jpg";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Ervin Wijaya</h1>
        <h5 className="text-light">WEB Developer</h5>

        <CTA />
        <HeaderSosial />

        <div className="me">
          <img src={IMG2} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
