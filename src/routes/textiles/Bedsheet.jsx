import React, { useCallback, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import ImageViewer from "react-simple-image-viewer";
import { Blurhash } from "react-blurhash";

export default function Bedsheet() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [imageLoaded, setImageloaded] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    let img = [];
    for (let i = 0; i < 19; i++) {
      img.push(`/product/${i + 1}.png`);
    }
    setImages(img);
  }, []);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isViewerOpen]);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageloaded(true);
    };
    images.forEach((src) => {
      img.src = src;
    });
  }, [images]);

  const handleMouseEnter = () => {
    swiperRef.current.swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
  };

  return (
    <>
      <section data-aos="fade-down-right" className="bedsheet" id="bedsheet">
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Swiper
            ref={swiperRef}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper headtext"
          >
            <SwiperSlide
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)), url(/product/bedsheet/3.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="slide"
            >
              <div className="text">
                <h1>BEDSHEETS</h1>
                <div className="first">
                  <div>
                    <p id="highloghtedText">
                      Choose from hundreds of exquisite designs, each crafted to
                      elevate your sleeping experience to new heights of luxury
                      and comfort.
                    </p>
                    <p>
                      Each set comes complete with one bedsheet and two
                      coordinate pillow covers, ensuring a cohesive and stylish
                      bedding ensemble for your ultimate comfort.
                    </p>
                  </div>
                  <p>
                    We prioritize your personal touch, offering customization in
                    design, set preferences, and sizes, allowing you to create a
                    bedding experience that truly matches your taste and
                    comfort.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)), url(/product/bedsheet/2.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="text">
                <h1>BEDSHEETS</h1>
                <div className="first">
                  <div>
                    <p>
                      Our portfolio offers a variety of{" "}
                      <b>high-quality bed linen</b>, expertly designed to blend
                      comfort and sophistication for both residential and
                      hospitality settings.
                    </p>
                    <p id="highloghtedText">
                      <b>
                        Floral, geometric, digital, or solid - provide us your
                        vision, and we'll materialize it.
                      </b>
                    </p>
                  </div>
                  <p>
                    Our catalogue showcases an impressive selection of premium
                    bed linen, which includes luxuriant bed sheets crafted from
                    100% cotton and glace cotton, sophisticated duvet covers,
                    pillowcases, and stylish bed runners and throws.
                  </p>
                  <p>
                    This range, available in an array of hues and striking
                    designs, is supplemented by our offering of quilts,
                    comforters, chic bed skirts, top-quality mattress
                    protectors, all-season blankets, bedspreads, and snug fitted
                    sheets.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="imageGal">
          <div className="imgContainer" style={{ marginBottom: "3rem" }}>
            {images.map((src, index) => (
              <>
                {!imageLoaded && (
                  <Blurhash
                    key={index}
                    hash="L4DI?;00ngDi00X8M|xt00_Nb{bx"
                    width={300}
                    height={300}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                  />
                )}
                {imageLoaded && (
                  <img
                    loading="lazy"
                    src={src}
                    onClick={() => openImageViewer(index)}
                    width="300"
                    key={index}
                    alt="Bedsheet"
                  />
                )}
              </>
            ))}
          </div>
        </div>
      </section>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={true}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)",
          }}
          closeOnClickOutside={true}
        />
      )}
    </>
  );
}
