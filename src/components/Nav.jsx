import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";

export default function Nav(props) {
  const productDropdn = useRef(null);
  const enquiryDropdn = useRef(null);
  const productDropdnMobile = useRef(null);
  const enquiryDropdnMobile = useRef(null);
  const navUnorderList = useRef(null);
  const [active, setActive] = useState({ product: false, enquiry: false });
  const [activeMobile, setActiveMobile] = useState({ product: false, enquiry: false });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        productDropdn.current &&
        !productDropdn.current.contains(event.target) &&
        enquiryDropdn.current &&
        !enquiryDropdn.current.contains(event.target)
      ) {
        setActive({ product: false, enquiry: false });
        productDropdn.current.style.transform = "scale(0)";
        enquiryDropdn.current.style.transform = "scale(0)";
        // navUnorderList.current.style.transform = "scale(0)";
        // navUnorderList.current.classList.remove("activeToggle");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handelMouseDown = (e) => {
      if (
        e.target.id === "navUnorderList" ||
        e.target.id === "enquiry" ||
        e.target.id === "Product" ||
        e.target.id === ""
      ) {
        console.log("");
      } else {
        navUnorderList.current.style.transform = "scale(0)";
        navUnorderList.current.classList.remove("activeToggle");
      }
    };
    window.addEventListener("mousedown", handelMouseDown);
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleDropdown = (dropdown) => {
    
    if (dropdown === "product") {
      productDropdnMobile.current.classList.toggle('activeProductDropDown');
      if(productDropdnMobile.current.classList.contains('activeProductDropDown')){
        productDropdnMobile.current.style.display = "flex"
        setActiveMobile((prev) => ({ ...prev, product: true }));
      }else{
        productDropdnMobile.current.style.display = "none"
        setActiveMobile((prev) => ({ ...prev, product: false }));
      }
      setActive((prev) => {
        const newState = { ...prev, product: !prev.product };
        productDropdn.current.style.transform = newState.product
          ? "scale(1)"
          : "scale(0)";
          productDropdnMobile.current.style.transform = newState.product
          ? "scale(1)"
          : "scale(0)";
        return newState;
      });
    } else if (dropdown === "enquiry") {
      
      setActive((prev) => {
        let newState = { ...prev, enquiry: !prev.enquiry };
        enquiryDropdn.current.style.transform = newState.enquiry
          ? "scale(1)"
          : "scale(0)";
          enquiryDropdnMobile.current.style.transform = newState.enquiry
          ? "scale(1)"
          : "scale(0)";
        
        return newState;
      });
      enquiryDropdnMobile.current.classList.toggle('activeEnquiryDropDown');

      if(enquiryDropdnMobile.current.classList.contains('activeEnquiryDropDown')) {
        enquiryDropdnMobile.current.style.display = "flex";
        setActiveMobile((prev) => ({ ...prev, enquiry: true }));
      } else {
        enquiryDropdnMobile.current.style.display = "none";
        setActiveMobile((prev) => ({ ...prev, enquiry: false }));
      }
    }
  };

  const showMenu = () => {
    navUnorderList.current.classList.toggle("activeToggle");
    navUnorderList.current.style.transform =
      navUnorderList.current.classList.contains("activeToggle")
        ? "scale(1)"
        : "scale(0)";
  };

  return (
    <nav
      style={{ background: props.bg, position: props.position }}
      className={scrolled ? "scrolled" : ""}
    >
      <Link to={`/`}>
        <img
          onClick={() => scrollToSection("home")}
          src="/logo2.png"
          alt="logo"
        />
      </Link>
      <ul id="navUnorderList" className="hiddenMobile">
        <Link to={`/`}>
          <li onClick={() => scrollToSection("about")}>Who we are?</li>
        </Link>
        <Link to={`/`}>
          <li onClick={() => scrollToSection("choose")}>Why Choose us?</li>
        </Link>
        <li id="Product" onClick={() => toggleDropdown("product")}>
          Product{" "}
          {active.product ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
          <ul ref={productDropdn} id="productDropdown">
            <li>
              <Link to="/product/Home-textiles-&-Handicrafts">Home textiles & Handicrafts</Link>
            </li>
            <li>
              <Link to="/product/Footwear-Emporium">Footwear Emporium</Link>
            </li>
            <li>
              <Link to="/product/Furniture-&Home_Essentials">Furniture & Home Essentials</Link>
            </li>
          
          
            <li>
              <Link to="/product/Industrial-Solutions">Industrial Solutions</Link>
            </li>
          </ul>
        </li>
        <li onClick={() => scrollToSection("pricing")}>Pricing</li>
        <li id="enquiry" onClick={() => toggleDropdown("enquiry")}>
          Enquiry{" "}
          {active.enquiry ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
          <ul ref={enquiryDropdn} id="dropdown">
            <li>
              <Link to="/enquiry/product-enquiry">Product Enquiry</Link>
            </li>
            <li>
              <Link to="/enquiry/partnership-enquiry">Partnership Enquiry</Link>
            </li>
          </ul>
        </li>
        <Link to={"/"}>
          <li onClick={() => scrollToSection("contact")}>Talk to us</li>
        </Link>
      </ul>

      <ul ref={navUnorderList} id="navUnorderList" className="hiddenDesktop">
        <Link to={`/`}>
          <li onClick={() => scrollToSection("about")}>Who we are?</li>
        </Link>
        <Link to={`/`}>
          <li onClick={() => scrollToSection("choose")}>Why Choose us?</li>
        </Link>
        <li id="Product" onClick={() => toggleDropdown("product")}>
          Product{" "}
          {activeMobile.product === true ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
          <ul ref={productDropdnMobile} id="productDropdown">
            <li>
              <Link to="/product/Home-textiles-&-Handicrafts">Home textiles & Handicrafts</Link>
            </li>
            <li>
              <Link to="/product/Footwear-Emporiumr">Footwear Emporium</Link>
            </li>
            <li>
              <Link to="/product/Furniture-&Home_Essentials">Furniture & Home Essentials</Link>
            </li>
          
          
            <li>
              <Link to="/product/Industrial-Solutions">Industrial Solutions</Link>
            </li>
          </ul>
        </li>
        <li id="enquiry" onClick={() => toggleDropdown("enquiry")}>
          Enquiry{" "}
          {activeMobile.enquiry === true ? (
            <i className="fa-solid fa-chevron-up"></i>
          ) : (
            <i className="fa-solid fa-chevron-down"></i>
          )}
          <ul ref={enquiryDropdnMobile} id="dropdown">
            <li>
              <Link to="/enquiry/product-enquiry">Product Enquiry</Link>
            </li>
            <li>
              <Link to="/enquiry/partnership-enquiry">Partnership Enquiry</Link>
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
