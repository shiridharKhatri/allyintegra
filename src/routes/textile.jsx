import React from "react";
import Nav from "../components/Nav";
import Head from "../components/Head";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
export default function Textile() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="textile">
      <Head
        imgBg={"../product/18.png"}
        display={"none"}
        headText={"Home textiles & Handicrafts"}
        belowtextFirst=" Blending"
        keyPoint=" Comfort"
        belowtextSecond=" with elegance"
        remove="none"
        top="0"
        transform="rotate(180deg)"
        height="65vh"
        data="flip-up"
      />
      <section className="productItem">
        <div className="productDetails">
          <p>
            With our rich experience and prowess, we're set to make waves on the
            global stage, specifically catering to bulk requirements of
            importers and distributors worldwide. Our mission is to deliver
            original, high-quality products that impeccably mirror the
            deep-rooted traditions of our craft, while simultaneously reflecting
            modern style and taste.Our curated collections of home textiles and
            handicrafts are designed to infuse a blend of comfort, style, and
            authenticity into your spaces.
          </p>
          <p>
            {" "}
            Be it the soft allure of our textiles aimed to enhance your living
            areas, or the distinctive allure of our handcrafted items – each
            product is a perfect amalgamation of tradition and modernity. As
            experienced professionals in the industry, we've refined our skills
            to create pieces that harmoniously balance ageless appeal and
            current trends.
          </p>
        </div>
        <div className="categories">
          <div className="cardSection">
            <div
              className="items"
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
        url(/title/bedsheet.png`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#ffffff",
              }}
            >
              <h2>Bedsheet</h2>
              <p>Tailored Tranquility: Designing Your Dream Sleep Sanctuary</p>

              <button onClick={() => scrollToSection("bedsheet")}>
                View more&nbsp;
                <FaChevronRight />
              </button>
            </div>
            <div
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
        url(/title/cushion.png`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#ffffff",
              }}
              className="items"
            >
              <h2>Cushions</h2>
              <p>Cozy and Classy, Soft and Sassy</p>

              <button onClick={() => scrollToSection("cushions")}>
                View more&nbsp;
                <FaChevronRight />
              </button>
            </div>
            <div
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
        url(/title/stool.png`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#ffffff",
              }}
              className="items"
            >
              <h2>Pouffe Stools</h2>
              <p>Seating with Substance: Pouffe Stools that Echo Elegance</p>

              <button onClick={() => scrollToSection("stool")}>
                View more&nbsp;
                <FaChevronRight />
              </button>
            </div>

            <div
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .9)),
        url(/title/cotton.png`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#ffffff",
              }}
              className="items"
            >
              <h2>Jute & Cotton Bags</h2>
              <p>Sustainably stylish: Carry your world in jute & cotton</p>
              <button onClick={() => scrollToSection("handbags")}>
                View more&nbsp;
                <FaChevronRight />
              </button>
            </div>

            <div
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, .6)),
        url(/title/carpet.png`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                color: "#ffffff",
              }}
              className="items"
            >
              <h2>Carpets & Rugs</h2>
              <p>Woven Wonders: Weaving Luxurious Stories Under Your Feet</p>

              <button onClick={() => scrollToSection("carpet")}>
                View more&nbsp;
                <FaChevronRight />
              </button>
            </div>

            <div className="items">
              <h2>Curtains</h2>
              <p>Curtain Call: Setting the Stage for Your Home's Story</p>
              <Link to="">
                <button>
                  View more&nbsp;
                  <FaChevronRight />
                </button>
              </Link>
            </div>
            <div className="items">
              <h2>Wall Hangings</h2>
              <p>Wall Wonders: Walls That Speak Volumes.</p>
              <Link to="">
                <button>
                  View more&nbsp;
                  <FaChevronRight />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
