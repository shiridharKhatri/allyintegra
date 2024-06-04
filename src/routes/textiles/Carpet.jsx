import React, { useCallback, useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import ImageViewer from "react-simple-image-viewer";
import { Blurhash } from "react-blurhash";

export default function CarpetRugs() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [totalImage, setTotalImage] = useState(15);
  const [realImage, setRealImage] = useState([]);
  const [imageLoaded, setImageloaded] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    let img = [];
    for (let i = 0; i < 71; i++) {
      img.push(`/product/CARPETS_RUGS/carpet_rugs (${i + 1}).jpg`);
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
      img.push(`/product/CARPETS_RUGS/carpet_rugs (${i + 1}).jpg`);
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
      <section data-aos="fade-down-right" className="bedsheet carpet" id="carpet">
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
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)), url(/product/caHead.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="slide"
            >
              <div className="text">
                <h1>CARPETS & RUGS</h1>
                <div className="first">
                  <div>
                    <p className="firstPagra">
                      <b>
                        Natural Elegance: Embrace the Charm of <span> Jute</span>, <span> Cotton</span>,<span> Macrame</span>, and <span>Velvet Rugs & Carpets</span>
                      </b>
                    </p>
                    <p>
                      Welcome to our magnificent selection of carpets and rugs, meticulously created to transform your living spaces. Each piece is a symphony of texture and design, offering an unparalleled tactile experience and an infusion of visual delight. They serve as more than just floor coverings; they are the canvas upon which the ambiance of your home is crafted.
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide
              style={{
                background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)), url(/product/caHeadTwo.png)`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="slide"
            >
              <div className="text">
                <h1>CARPETS & RUGS</h1>
                <div className="first">
                  <p className="firstPagra">
                    <b>
                      Explore our collection and discover the unique blend of <span> Quality</span>, <span>Style</span>, and <span>Sustainability</span>.
                    </b>
                  </p>
                  <p>
                    From patterns that echo the charm of bygone eras to designs that resonate with today's sophisticated tastes, our carpets and rugs are here to enhance your interiors. They create a sense of warmth, welcome, and individuality, defining the essence of a home that is truly reflective of you.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="imageGal">
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
                    alt="CARPETS & RUGS"
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
