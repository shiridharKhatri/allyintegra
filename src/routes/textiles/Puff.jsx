import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import ImageViewer from "react-simple-image-viewer";
import { Blurhash } from "react-blurhash";
export default function Puff() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [totalImage, setTotalImage] = useState(15);
  const [realImage, setRealImage] = useState([]);
  const [imageLoaded, setImageloaded] = useState(false);
  const swiperRef = useRef(null);
  useEffect(() => {
    let img = [];
    for (let i = 0; i < 56; i++) {
      img.push(`/product/POUFFE _STOOLS/${i + 1}.jpg`);
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
      img.push(`/product/POUFFE _STOOLS/${i + 1}.jpg`);
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
      <section data-aos="fade-down-right" className="bedsheet Puff" id="stool">
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
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)),url(/product/pHead.png`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
          >
            <div className="text">
              <h1>POUFFE STOOLS</h1>
              <div className="first">
                <div>
                  <p>
                    Transforming the Mundane into Marvelous: Explore the{" "}
                    <span>Diversity</span> of Our <span>Pouffe Stools</span>{" "}
                    Collection.
                  </p>
                  <p>
                    Welcome to a realm where the ordinary transforms into the
                    extraordinary with our varied collection of Pouffe Stools.
                    Every stitch tells a story, every fabric a testament to the
                    melding of comfort and style
                  </p>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>

          <SwiperSlide
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)),url(/product/pHeadTwo.png`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
          >
            <div className="text">
              <h1>POUFFE STOOLS</h1>
              <div className="first firstHead ">
                <div>
                  <p>
                    Step into this captivating world of design and functionality
                    today!
                  </p>
                  <p>
                    These multifaceted marvels serve as seating, footrest, or
                    even a chic side table - they adapt as freely as your
                    imagination With our Pouffe Stools, invite a touch of
                    glamour and comfort to your space that's truly a reflection
                    of you With a myriad of designs and fabrics, each pouffe
                    stool carries its unique signature, waiting to become a part
                    of your home's story. Immerse yourself in the symphony of
                    luxury and comfort we offer.
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
                    alt="POUFFE STOOLS"
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
