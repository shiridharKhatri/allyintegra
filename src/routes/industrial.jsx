import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";

export default function Industrial() {
  return (
    <>
      <Nav />
      <section className="productItem">
        <h1>Industrial Solutions</h1>
        <div className="underConstruction">
          <img loading="lazy" src="/const.png" alt="underConstruction" />
          <p>
            Our website is currently under construction. Please visit again
            later for updates!
          </p>
          <Link to={`/`}>
            {" "}
            <button>Go to home</button>
          </Link>
        
        </div>
      </section>
    </>
  );
}
