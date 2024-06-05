import { useRef } from "react";
import "./works.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Alliance Subscription Monitoring",
    img: "/project/alliance.png",
    desc: "Alliance Subscription Monitoring provides the insights and control needed to keep your operations running smoothly and efficiently. Enhance your subscription management process with our intuitive and powerful solution.",
  },
  {
    id: 2,
    title: "BarangayMed",
    img: "/project/brgymed.png",
    desc: "Barangay Med is a community-focused medical appointment platform designed to provide free healthcare access to residents within their barangay.",
  },
  {
    id: 3,
    title: "EalyNexus",
    img: "/project/ealynexus.png",
    desc: "Discover, connect, and collaborate within the crypto gaming ecosystem on EalyNexus, where the future of gaming and professional networking converge.",
  },
  {
    id: 4,
    title: "Worlash",
    img: "/project/worlash.png",
    desc: "Worlash is an exciting crypto-based word-combining game that challenges players to test their vocabulary and creativity. Dive into the world of Worlash and unleash your word power while earning valuable crypto assets!",
  },
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
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p className="madeThin">{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Works = () => {
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
        <div className="titleWrapper">
          <div className="titleContainer">
            <h2 className="grifter text2">FEATURED</h2>
            <h2 className="grifter text">WORK</h2>
          </div>
          <div className="subTitleContainer">
            <p className="madeOuter text uiText">UI Design</p>
            {/* <hr /> */}
          </div>
        </div>
        {/* <motion.div style={{ scaleX }} className="progressBar"></motion.div> */}
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Works;
