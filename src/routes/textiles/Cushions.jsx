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
  const [totalImage, setTotalImage] = useState(15);
  const [realImage, setRealImage] = useState([]);
  const [imageLoaded, setImageloaded] = useState(false);
  const swiperRef = useRef(null);
  useEffect(() => {
    let img = [];
    for (let i = 0; i < 80; i++) {
      img.push(`/product/CUSHION/cushion (${i + 1}).jpg`);
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
  const viewMore = (id) => {
    if (totalImage > images.length) {
      setTotalImage(images.length);
    } else {
      setTotalImage(images.length);
    }
  
  };
  useEffect(() => {
    if (isViewerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isViewerOpen]);
  useEffect(() => {
    let img = [];
    for (let i = 0; i < totalImage; i++) {
      img.push(`/product/CUSHION/cushion (${i + 1}).jpg`);
    }
    setRealImage(img);
  }, [totalImage]);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageloaded(true);
    };
    realImage.forEach((src) => {
      img.src = src;
    });
  }, [realImage]);
  
  const handleMouseEnter = () => {
    swiperRef.current.swiper.autoplay.stop();
  };

  const handleMouseLeave = () => {
    swiperRef.current.swiper.autoplay.start();
  };

  return (
    <>
      <section
        data-aos="fade-down-right"
        className="bedsheet cushions"
        id="cushions"
      >
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
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
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .8)),
        url(/product/cus/1.png`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
          >
            <div className="text">
              <h1>CUSHIONS</h1>
              <div className="first">
                <div>
                  <p>
                    Step into the world of our cushion covers, where comfort
                    meets style and personal design. {" "}
                    <b>
                      These aren't just simple accessories for your sofas and
                      chairs, but an extension of your unique taste and
                      personality.. our 5-piece set of 16"*16" cushion covers
                      the perfect blend of luxury and coziness for your living
                      space.
                    </b>
                  </p>
                </div>
                <p>
                  With a captivating blend of color, pattern, and texture, our
                  cushion covers are meticulously designed to transform any
                  space. Moreover, they offer an impressive degree of
                  customization, granting you the freedom to tailor designs to
                  your exact preferences.
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .8)),
        url(/product/cus/2.png`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="text">
              <h1>CUSHIONS</h1>
              <div className="first">
                <div>
                  <p>
                    <b style={{ color: "#FFDE59" }}>
                      Our macramé style cushions are a craft lover's delight.
                      Hand-knotted by skilled artisans, these cushions are a
                      symbol of intricate artistry, bringing a bohemian touch to
                      your décor
                    </b>
                  </p>
                  <p>
                    For eco-conscious individuals, our soft and breathable
                    cotton cushions, along with our robust, rustic charm jute
                    cushions, provide a natural and high-quality choice. If
                    you're an enthusiast of contemporary design, our digital
                    print cushions are the perfect choice. Imprinted with
                    vibrant patterns and colors, these cushions are a statement
                    piece that can enhance any room's aesthetic.
                  </p>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="imageGal">
          {/* <h1>Pictures of Bedsheet </h1> */}
          <div className="imgContainer" style={{ marginBottom: "3rem" }}>
          {realImage.map((src, index) => (
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
                    alt="CUSHIONS"
                  />
                )}
              </>
            ))}
          </div>
        </div>
        <div className="btnViewMore">
          <button
            id="viewAll"
            onClick={() => {
              viewMore(viewAll);
            }}
          >
            View More
          </button>
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
