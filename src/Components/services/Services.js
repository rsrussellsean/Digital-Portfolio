import { useRef, useState } from "react";
import "./services.scss";
import {
  color,
  motion,
  useInView,
  useTransform,
  useScroll,
} from "framer-motion";

// const variants = {
//   initial: {
//     x: -500,
//     y: 100,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  // });
  // const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
      ref={ref}
    >
      <motion.div className="textContainer" variants={variants}>
        <div className="introContainer">
          <h3>Hello!</h3>
          <div className="intro">
            <p>I'm Russell, based in Philippines. </p>
            <p>I am a passionate and creative</p>
            <p>web developer with experience</p>
            <p>in creating highly polished interfaces</p>
            <p>and web applications.</p>
          </div>
          <div className="job">
            <p className="madeThin">FULL STACK WEB DEVELOPER</p>
            <p className="madeThin">UI DESIGNER</p>
          </div>
        </div>

        <div className="skillsContainer">
          <hr
            className="hrVertical"
            style={{
              width: "1px",
              height: "56%",
              display: "inlineBlock",
              position: "absolute",
            }}
          />
          <div style={{ paddingLeft: "10px" }}>
            <motion.h2
              variants={variants}
              animate={"closed"}
              className="grifter text2"
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              style={
                isHovered
                  ? { WebkitTextFillColor: "white" }
                  : {
                      WebkitTextStroke: "0.5px rgb(255, 255, 255)",
                      WebkitTextFillColor: "rgba(255, 255, 255, 0)",
                    }
              }
            >
              SKILLS
            </motion.h2>
            <motion.h2
              className="grifter text"
              whileHover={{ duration: 5 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              style={
                isHovered
                  ? {
                      WebkitTextStroke: "0.5px rgb(255, 255, 255)",
                      WebkitTextFillColor: "rgba(255, 255, 255, 0)",
                    }
                  : {
                      WebkitTextFillColor: "white",
                    }
              }
            >
              SKILLS
            </motion.h2>
            <motion.h2
              className="grifter text3"
              whileHover={{ duration: 5 }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              style={
                isHovered
                  ? { WebkitTextFillColor: "white" }
                  : {
                      WebkitTextStroke: "0.5px rgb(255, 255, 255)",
                      WebkitTextFillColor: "rgba(255, 255, 255, 0)",
                    }
              }
            >
              SKILLS
            </motion.h2>

            <div>
              <p className="desc1 boldText">WEB DEVELOPMENT</p>
              <p className="desc2 madeThin">MERN</p>
              <p className="desc2 madeThin">MEAN</p>
              <p className="desc2 madeThin">NEXT JS</p>
              <p className="desc2 madeThin">DJANGO</p>
              <p className="desc2 madeThin">.NET</p>
              <p className="desc2 madeThin">Laravel</p>
            </div>

            {/* <div>
              <img src="/logo/mongo.png" alt="" />
              <img src="/logo/express.png" alt="" />
              <img src="/logo/react.png" alt="" />
              <img src="/logo/node.png" alt="" />
              <img src="/logo/angular.png" alt="" />
              <img src="/logo/next.png" alt="" />
              <img src="/logo/django.png" alt="" />
              <img src="/logo/net.png" alt="" />
              <img src="/logo/laravel.png" alt="" />
            </div> */}

            <div className="editContainer">
              <p className="desc1">UI DESIGN</p>
              <p className="desc2 madeThin">FIGMA PHOTOSHOP</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
