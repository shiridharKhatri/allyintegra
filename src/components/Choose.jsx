import React from "react";

export default function Choose() {
  return (
    <section className="about" id="choose">
      <h1>WHY CHOOSE US?</h1>
      <div className="chooseUs">
        <div data-aos="fade-up-right" className="specialized flexItems">
          <img src="/1.png" alt="spfocus" />
          <div className="detail">
            <h2>Tailored Services</h2>
            <p>
              We're exclusively dedicated to artfully exporting Indian products,
              while offering a uniquely personalized import experience. Every
              product carries its own narrative, unique needs, and
              characteristics, which we commit to understanding and
              encapsulating. We move beyond conventional website listings,
              customizing our services to meet your specific requirements. Our
              ultimate goal is to present each product in its best light for a
              global debut that resonates powerfully with its target audience.
            </p>
          </div>
        </div>

        <div data-aos="fade-up-left" className="partnership flexItems">
          <div className="detail">
            <h2>Partnership Focus</h2>
            <p>
              Our commitment extends beyond transactions; we believe in
              fostering enduring partnerships. Your success is paramount, and we
              are dedicated to providing unwavering support at every step of
              your journey. We view our collaboration as a shared pathway to
              success, where your achievements are integral to our own.
            </p>
          </div>

          <img src="/2.png" alt="parfocus" />
        </div>

        <div data-aos="fade-left" className="reliability flexItems">
          <img src="/4.png" alt="rel" />
          <div className="detail">
            <h2>Reliability and Transparency</h2>
            <p>
              At Ally Integra, trust forms the cornerstone of our operations. We
              are unwaveringly committed to providing services that embody
              reliability and transparency, surpassing your expectations. Our
              dedication to reliability ensures that you can depend on us
              consistently, while our commitment to transparency means you'll
              have a clear understanding of our processes, fostering a
              relationship built on trust and delivering a level of service that
              goes beyond mere satisfaction.
            </p>
          </div>
        </div>

        <div data-aos="fade-left" className="reliability flexItems flexItemsPricing">
          <div className="detail">
            <h2>Pricing</h2>
            <p>
              Our commitment to affordability is reflected in our product
              pricing. We offer a range of high-quality home textiles and
              handicrafts, with prices ranging from just $5 to $25. This pricing
              strategy is designed to suit every budget, without compromising on
              style or comfort. Importantly, this price range includes the
              option for customization, ensuring that our customers can enjoy
              personalized design within an accessible cost framework
            </p>
          </div>
          <img src="/3.png" alt="rel" />
        </div>
      </div>
      <img className="whyChooseUs" src="/whyChooseUs.png" alt="why choose us image" />
    </section>
  );
}
