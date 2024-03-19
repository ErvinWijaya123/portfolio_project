import React from "react";
import "./Navbar.css";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaRocketchat } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        {<FaHome />}
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <FaUserAlt />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <IoLibrary />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <RiCustomerService2Fill />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <FaRocketchat />
      </a>
    </nav>
  );
};

export default Navbar;
