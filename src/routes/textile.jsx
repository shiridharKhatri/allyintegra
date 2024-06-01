import React from "react";
import Nav from "../components/Nav";
import Head from "../components/Head";
import { FaChevronRight } from "react-icons/fa6";
export default function Textile() {
  return (
    <>
      <Nav position={"fixed"} bg={"transparent"} />
      <Head
        imgBg={"../product/18.png"}
        display={"none"}
        headText={"Home textiles & Handicrafts"}
        belowtextFirst=" Blending"
        keyPoint=" Comfort"
        belowtextSecond=" with elegance"
      />
      <section className="productItem">
        <h1>Introduction</h1>
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
            <div className="items">
              <h2>Bedsheet</h2>
              <p>Tailored Tranquility: Designing Your Dream Sleep Sanctuary</p>
              <a href="/product/Home-textiles-&-Handicrafts/bedsheet">
                <button>
                  View more&nbsp;
                  <FaChevronRight />
                </button>
              </a>
            </div>
            <div className="items">
              <h2>Cushions</h2>
              <p>Cozy and Classy, Soft and Sassy</p>
              <a href="/product/Home-textiles-&-Handicrafts/cushions">
                <button>
                  View more&nbsp;
                  <FaChevronRight />
                </button>
              </a>
            </div>
            <div className="items">
              <h2>Macrame</h2>
              <p>Woven Wonders: Crafting Love, Knot by Knot.</p>
              <a href="">
                <button>
                  View more&nbsp;
                  <FaChevronRight />
                </button>
              </a>
            </div>
            <div className="items">
              <h2>Curtains</h2>
              <p>Curtain Call: Setting the Stage for Your Home's Story</p>
              <a href="">
                <button>
                  View more&nbsp;
                  <FaChevronRight />
                </button>
              </a>
            </div>
            <div className="items">
              <h2>Wall Hangings</h2>
              <p>Wall Wonders: Walls That Speak Volumes.</p>
              <a href="">
                <button>
                  View more&nbsp;
                  <FaChevronRight />
                </button>
              </a>
            </div>
            <div className="items">
              <h2>Carpets & Rugs</h2>
              <p>Woven Wonders: Weaving Luxurious Stories Under Your Feet</p>
              <a href="">
                <button>
                  View more&nbsp;
                  <FaChevronRight />
                </button>
              </a>
            </div>
            <div className="items">
              <h2>Pouffe Stools</h2>
              <p>
              Seating with Substance: Pouffe Stools that Echo Elegance
              </p>
              <a href="">
                <button>
                  View more&nbsp;
                  <FaChevronRight />
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
