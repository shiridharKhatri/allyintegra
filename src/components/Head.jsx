import React from "react";

export default function Head(props) {
  const handleScrollDown = () => {
    const section = document.getElementById("footer");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header
    data-aos={props.data}
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)),
        url(${props.imgBg})`,
        height:props.height
      }}
    >
      <div className="headText" id="headText">
        <h1 style={{ pointerEvents: "none", display: props.display }}>
          {" "}
          Welcome to
        </h1>
        <img loading="lazy"
          style={{ pointerEvents: "none", display: props.display }}
          src="/name.png"
          alt="name"
        />
        <h3 style={{ pointerEvents: "none", display: props.display }}>
          Where <span>Collaboration</span> Meets Integration
        </h3>
        <h1>{props.headText}</h1>
        <h3>
          {props.belowtextFirst}
          <span>
            {props.keyPoint}
            </span>
            {props.belowtextSecond}
        
        </h3>
      </div>
      <div className="image"></div>
      <svg
      style={{top:props.top, transform:props.transform, bottom:props.bottom,display: props.display}}
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
          <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
      <div style={{display:props.remove}} className="scroll" onClick={handleScrollDown}>
        <div className="scrolldown" style={{ color: "skyblue" }}>
          <div className="chevrons">
            <div className="chevrondown"></div>
            <div className="chevrondown"></div>
          </div>
        </div>
      </div>
    </header>
  );
}
