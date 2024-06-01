import React from "react";

export default function Pricing() {
  return (
    <section className="pricing about" id="pricing">
      <h1>Our pricing</h1>
      <p>
        Our commitment to affordability is reflected in our product pricing. We
        offer a range of high-quality home textiles and handicrafts, with prices
        ranging from just $5 to $25. This pricing strategy is designed to suit
        every budget, without compromising on style or comfort. Importantly,
        this price range includes the option for customization, ensuring that
        our customers can enjoy personalized design within an accessible cost
        framework
      </p>
      <div className="pricingContainer">
        <div className="firstSection cards">
          <h3>Handicrafts</h3>
          <h2>$5 - $25</h2>
          <ul>
            <li>Cushion Covers</li>
            <li>Cotton/Jute/Macrame</li>
            <li>Bags</li>
            <li>Wall Hangings</li>
            <li>Pillow Covers</li>
            <li>Pouffe stools</li>
            <li>Sofa Covers</li>
            <li>Including Customization</li>
          </ul>
        </div>
        <div className="secondSection cards">
          <h3>Hotel and Home textiles</h3>
          <h2>$5 - $25</h2>
          <ul>
            <li>Bedsheets & Home testiles</li>
            <li>Blankets</li>
            <li>Hotel Linen</li>
            <li>Quilts</li>
            <li>Comforters</li>
            <li>Ultrasonic Comforters</li>
            <li>Curtains</li>
            <li>Including Customization</li>
          </ul>
        </div>
        <div className="thirdSection cards">
          <h3>Carpets</h3>
          <h2>$5 - $25</h2>
          <ul>
            <li>Carpets</li>
            <li>Jute Carpets</li>
            <li>Cotton Carpets</li>
            <li>Macrame</li>
            <li>Rugs</li>

            <li>Including Customization</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
