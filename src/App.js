import "./app.scss";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/hero/Hero";
import Parallax from "./Components/parallax/Parallax";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Cursor from "./Components/cursor/Cursor";
import Works from "./Components/works/Works";
const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}
      <section>
        <Services />
      </section>
      {/* <section id="Portfolio">
        <Parallax type="portfolio" />
      </section> */}
      <Portfolio />
      {/* <Works /> */}

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
