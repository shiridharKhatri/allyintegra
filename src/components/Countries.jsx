import React from "react";
import { IoLocation } from "react-icons/io5";
export default function Countries() {
  return (
    <section className="countries">
      <h1>We are exporting to</h1>
      <div className="mainCountriesSection">
        <img loading="lazy" data-aos="zoom-out" src="./map.svg" alt="worldMap" />
        <div className="names">
          <h3 className="usa">
            <span className="countryIcon">
              <IoLocation />
            </span>{" "}
            <span className="countryName">USA</span>
          </h3>
          <h3 className="germany">
            <span className="countryIcon">
              <IoLocation />
            </span>{" "}
            <span className="countryName">Germany & Luxembourg</span>
          </h3>
          <h3 className="uae">
            <span className="countryIcon">
              <IoLocation />
            </span>{" "}
            <span className="countryName">UAE</span>
          </h3>

          <h3 className="australia">
            <span className="countryIcon">
              <IoLocation />
            </span>{" "}
            <span className="countryName">Australia</span>
          </h3>
          <h3 className="netherlands">
            <span className="countryIcon">
              <IoLocation />
            </span>{" "}
            <span className="countryName">Netherlands</span>
          </h3>
          <h3 className="qatar">
            <span className="countryIcon">
              <IoLocation />
            </span>{" "}
            <span className="countryName">Qatar</span>
          </h3>
          <h3 className="kuwait">
            <span className="countryIcon">
              <IoLocation />
            </span>{" "}
            <span className="countryName">Kuwait</span>
          </h3>
          <h3 className="france">
            <span className="countryIcon">
              <IoLocation />
            </span>{" "}
            <span className="countryName">France</span>
          </h3>

          <h3 className="uk">
            <span className="countryIcon">
              <IoLocation />
            </span>{" "}
            <span className="countryName">UK</span>
          </h3>
        </div>
        <div className="index">
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/usa.png" alt="usa" />
            <h4>USA</h4>
          </div>
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/germany.png" alt="germany" />
            <h4>Germany</h4>
          </div>
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/luxembourg.png" alt="luxemburg" />
            <h4>Luxembourg</h4>
          </div>
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/uae.png" alt="uae" />
            <h4>UAE</h4>
          </div>
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/australia.png" alt="australia" />
            <h4>Australia</h4>
          </div>
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/netherlands.png" alt="netherland" />
            <h4>Netherlands</h4>
          </div>
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/qatar.png" alt="qatar" />
            <h4>Qatar</h4>
          </div>
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/kuwait.png" alt="kuwait" />
            <h4>Kuwait</h4>
          </div>
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/uk.png" alt="kuwait" />
            <h4>UK</h4>
          </div>
          <div className="items" data-aos="flip-up">
            <img loading="lazy" src="/flags/france.png" alt="kuwait" />
            <h4>France</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
