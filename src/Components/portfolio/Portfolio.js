import { useRef, useState, useEffect } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import ImageCarousel from "./ImageCarousel";

const items = [
  {
    id: 1,
    title: "Real Estate Hansen Partners Services Page",
    img: "/project/realestate.png",
    desc: "Hansen Partners is a leading real estate website. As a web designer, I recreated their services with a focus on professionalism and creativity. Feel free to explore the redesigned website to see the enhancements firsthand.",
    link: "https://www.behance.net/gallery/200621129/Real-Estate-Services-Page",
    linkWeb: "https://rsrussellsean.github.io/Real-Estate/",
  },
  {
    id: 2,
    title: "Alliance Subscription Monitoring",
    img: "/project/alliance.png",
    desc: "Alliance Subscription Monitoring provides the insights and control needed to keep your operations running smoothly and efficiently. Enhance your subscription management process with our intuitive and powerful solution.",
    link: "https://www.behance.net/gallery/200255943/Alliance-Subscription-Monitoring",
    linkWeb: "",
  },
  {
    id: 3,
    title: "BarangayMed",
    img: "/project/brgymed.png",
    desc: "Barangay Med is a community-focused medical appointment platform designed to provide free healthcare access to residents within their barangay.",
    link: "https://www.behance.net/gallery/200256313/BarangayMed",
    linkWeb: "",
  },
  {
    id: 4,
    title: "Radiant",
    img: "/project/rd.png",
    desc: "Radiant is a dynamic and engaging app that combines the thrill of gamification with the noble cause of environmental cleanup. GreenGleam turns eco-friendly activities into exciting challenges and rewarding experiences.",
    link: "https://www.behance.net/gallery/200256661/Radiant",
    linkWeb: "",
  },
  {
    id: 5,
    title: "EalyNexus",
    img: "/project/ealynexus.png",
    desc: "Discover, connect, and collaborate within the crypto gaming ecosystem on EalyNexus, where the future of gaming and professional networking converge.",
    link: "https://www.behance.net/gallery/200247263/EalyNexus",
    linkWeb: "",
  },

  // {
  //   id: 4,
  //   title: "Worlash",
  //   img: "/project/worlash.png",
  //   desc: "Worlash is an exciting crypto-based word-combining game that challenges players to test their vocabulary and creativity. Dive into the world of Worlash and unleash your word power while earning valuable crypto assets!",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            {/* <img src={item.img} alt="" /> */}
            <ImageCarousel id={item.id} />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p className="madeThin">{item.desc}</p>
            <div className="logoContainer">
              {item.linkWeb == "" ? (
                <></>
              ) : (
                <div style={{ marginBottom: "20px" }}>
                  <a id="webLink" href={item.linkWeb} target="_blank">
                    Link: {item.linkWeb}
                  </a>
                </div>
              )}

              <div>
                <a href={item.link} target="_blank">
                  <img
                    src="/Digital-Portfolio/logo/behance.png"
                    style={{ width: "40px" }}
                    alt="Behance Logo"
                  />
                </a>
                <a
                  href={item.link2}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  {/* <img
                    src="/Digital-Portfolio/logo/figma.png"
                    style={{ width: "40px" }}
                    alt="Figma Logo"
                  /> */}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <div className="titleContainer">
          <h2 className="grifter text2">FEATURED </h2>
          <h2 className="grifter text">WORK</h2>
        </div>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
