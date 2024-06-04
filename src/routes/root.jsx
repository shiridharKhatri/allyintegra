import React, { useEffect } from "react";
import Head from "../components/Head";
import About from "../components/About";
import Choose from "../components/Choose";
import Contact from "../components/Contact";
import Nav from "../components/Nav";
import Countries from "../components/Countries";
import AOS from "aos";
import "aos/dist/aos.css";
import Pricing from "../components/Pricing";
import Textile from "./textile";
import Bedsheet from "./textiles/Bedsheet";
import Cushions from "./textiles/Cushions";
import { FaWhatsapp } from "react-icons/fa";
import Puff from "./textiles/Puff";
import Handbags from "./textiles/Handbags";
import CarpetRugs from "./textiles/Carpet";
import ProductEn from "./productEn";
export default function Root() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Nav bg="transparent" position="fixed" />
      <div className="FixedBtns" id="backtoTop">
        <div>
          <button
            id="backToTopBtn"
            className="Btn"
            onClick={() => scrollToSection("home")}
          >
            <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
              <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
            </svg>
          </button>
        </div>
        <div id="whatsApp">
          <div className="toolpit">Inquiry now</div>
          <a href="https://wa.me/+919779775469">
            <button className="Btn">
              <FaWhatsapp />
            </button>
          </a>
        </div>
      </div>

      <Head imgBg={"./header.png"} />
      <Countries />
      <About />
      <Choose />
      <Textile />
      <Bedsheet />
      <Cushions />
      <Puff />
      <Handbags />
      <CarpetRugs />
      <Pricing />
      <ProductEn/>
      <Contact />
    </>
  );
}
