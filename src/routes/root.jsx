import React from "react";
import Head from "../components/Head";
import About from "../components/About";
import Choose from "../components/Choose";
import Exporting from "../components/Exporting";
import Contact from "../components/Contact";
import Nav from "../components/Nav";

export default function Root() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
    <Nav/>
      <div id="backtoTop">
        <button className="Btn" onClick={() => scrollToSection("home")}>
          <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
            <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
          </svg>
          <p className="text">Back to Top</p>
        </button>
      </div>
      <Head />
      <Exporting />
      <About />
      <Choose />
      <Contact />
    </>
  );
}
