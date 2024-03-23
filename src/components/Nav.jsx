import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
export default function Nav() {
  const productDropdn = useRef(null);
  const enquiryDropdn = useRef(null);
  const navUnorderList = useRef(null);
  const [active, setActive] = useState({ product: false, enquiry: false });
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const productDropdown = () => {
    productDropdn.current.classList.toggle("activeClass");
    if (productDropdn.current.classList.contains("activeClass")) {
      productDropdn.current.style.display = "flex";
      setActive((prev) => ({ ...prev, product: true }));
    } else {
      productDropdn.current.style.display = "none";
      setActive((prev) => ({ ...prev, product: false }));
    }
  };
  const enquiryDropdown = () => {
    enquiryDropdn.current.classList.toggle("activeClass");
    if (enquiryDropdn.current.classList.contains("activeClass")) {
      enquiryDropdn.current.style.display = "flex";
      setActive((prev) => ({ ...prev, enquiry: true }));
    } else {
      enquiryDropdn.current.style.display = "none";
      setActive((prev) => ({ ...prev, enquiry: false }));
    }
  };
  const showMenu = () => {
    navUnorderList.current.classList.toggle("activeToggle");
    if (navUnorderList.current.classList.contains("activeToggle")) {
      navUnorderList.current.style.top = "10rem";
    } else {
      navUnorderList.current.style.top = "-65rem";
    }
  };
  return (
    <nav id="home">
      <Link to={`/`}>
        <img
          onClick={() => scrollToSection("home")}
          src="/logo2.png"
          alt="logo"
        />
      </Link>
      <ul ref={navUnorderList} id="navUnorderList">
        <Link to={`/`}>
          <li onClick={() => scrollToSection("about")}>Who we are?</li>
        </Link>
        <Link to={`/`}>
          <li onClick={() => scrollToSection("choose")}>Why Choose us?</li>
        </Link>
        <li id="Product" onClick={productDropdown}>
          Product{" "}
          {active.product === true ? (
            <i class="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
          <ul ref={productDropdn} id="productDropdown">
            <li>
              <Link to="/textile">Textile sanctuary</Link>
            </li>
            <li>
              <Link to="/footwear">Footwear Emporium</Link>
            </li>
            <li>
              <Link to="/furniture">Furniture & Home Essentials</Link>
            </li>
            <li>
              <Link to="/art">Art</Link>
            </li>
            <li>
              <Link to="/sanitaryware">Sanitaryware</Link>
            </li>
            <li>
              <Link to="/industrial">Industrial Solutions</Link>
            </li>
          </ul>
        </li>
        <li id="enquiry" onClick={enquiryDropdown}>
          Enquiry{" "}
          {active.enquiry === true ? (
            <i class="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
          <ul ref={enquiryDropdn} id="dropdown">
            <li>
              <Link to="/productEnquiry">Product Enquiry</Link>
            </li>
            <li>
              <Link to="/partnershipEnquiry">Partnership Enquiry</Link>
            </li>
          </ul>
        </li>
        <Link to={"/"}>
          <li onClick={() => scrollToSection("contact")}>Talk to us</li>
        </Link>
      </ul>
      <div id="hiddenMenu" onClick={showMenu}>
        <HiMenuAlt3 />
      </div>
    </nav>
  );
}
