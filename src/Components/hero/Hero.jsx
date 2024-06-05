import React from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const onButtonClick = () => {
  const pdfUrl = "Gonzalve_Resume.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.download = "/Gonzalve_Resume.pdf"; // specify the filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="grifter text">
            RUSSELL
          </motion.h2>
          <motion.h2 variants={textVariants} className="grifter text2">
            RUSSELL
          </motion.h2>
          <motion.h1 variants={textVariants}>CREATIVE DEVELOPER</motion.h1>
          {/* <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1> */}
          <motion.div variants={textVariants} className="buttons">
            {/* <a href="#Portfolio"> */}
            {/* <motion.button variants={textVariants}>
                SEE THE LATEST WORKS
              </motion.button> */}
            <motion.button variants={textVariants} onClick={onButtonClick}>
              RESUME
            </motion.button>
            {/* </a> */}
            <a href="#Contact">
              <motion.button variants={textVariants}>CONTACT ME</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Dev Designer Editor
      </motion.div>
      <div className="imageContainer">
        <img src="/Digital-Portfolio/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
