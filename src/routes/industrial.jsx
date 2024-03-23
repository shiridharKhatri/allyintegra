import React from "react";
import Nav from "../components/Nav";

export default function Industrial() {
  return (
    <>
      <Nav />
      <section class="productItem">
        <h1>Industrial Solutions</h1>
        <div class="underConstruction">
          <img src="/const.png" alt="underConstruction" />
          <p>
            Our website is currently under construction. Please visit again
            later for updates!
          </p>
          <button>Go to home</button>
        </div>
      </section>
    </>
  );
}
