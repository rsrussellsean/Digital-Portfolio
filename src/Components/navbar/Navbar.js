import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar></Sidebar>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Russell
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/russellsean.gonzalve/">
            <img src="/Digital-Portfolio/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/russell-sean-gonzalve/">
            <img src="/Digital-Portfolio/linkedin.png" alt="" />
          </a>
          <a href="https://www.instagram.com/">
            <img src="/Digital-Portfolio/instagram.png" alt="" />
          </a>
          <a href="https://dribbble.com/rsrussellsean">
            <img src="/Digital-Portfolio/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
