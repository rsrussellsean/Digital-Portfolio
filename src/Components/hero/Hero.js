import { React, useState } from "react";
import "./hero.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ModalResume from "./ModalResume";

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
  const [modalOpen, setModalOpen] = useState(false);
  const image1Src = `${process.env.PUBLIC_URL}/resume/1.png`;
  const image2Src = `${process.env.PUBLIC_URL}/resume/2.png`;

  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);
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
          <div className="devText">
            <motion.p className="change-text" variants={textVariants}>
              CREATIVE DEVELOPER
            </motion.p>
            {/* <motion.h1
              className="change-text"
              style={{ marginLeft: "180px" }}
              variants={textVariants}
            >
              DEVELOPER
            </motion.h1> */}
          </div>
          {/* <motion.h1 variants={textVariants}>
            Web developer and UI designer
          </motion.h1> */}
          <motion.div variants={textVariants} className="buttons">
            <motion.Button
              variants={textVariants}
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              VIEW CV
            </motion.Button>

            {image1Src && image2Src && (
              <ModalResume
                open={modalOpen}
                onClose={handleClose}
                images={[image1Src, image2Src]}
              />
            )}

            {/* <motion.button variants={textVariants} onClick={onButtonClick}>
              RESUME
            </motion.button> */}
            {/* </a> */}
            <a href="#Contact">
              <motion.button variants={textVariants}>CONTACT ME</motion.button>
            </a>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/Digital-Portfolio/scroll.png"
            alt=""
            className="scrollImg"
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
