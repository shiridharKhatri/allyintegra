import React, { useCallback, useEffect, useState,useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import ImageViewer from "react-simple-image-viewer";
import { Blurhash } from "react-blurhash";
export default function Handbags() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);
  const [totalImage, setTotalImage] = useState(15);
  const [realImage, setRealImage] = useState([]);
  const [imageLoaded, setImageloaded] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    let img = [];
    for (let i = 0; i < 84; i++) {
      img.push(`/product/HANDBAGS/handbags (${i + 1}).jpg`);
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
      img.push(`/product/HANDBAGS/handbags (${i + 1}).jpg`);
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
      <section data-aos="fade-down-right" className="bedsheet" id="handbags">
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
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)),
        url(/product/bHeadTwo.png`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
          >
            <div className="text pHeadTwo">
              <h1>JUTE & COTTON BAGS</h1>
              <div className="first">
                <div>
                  <p style={{ fontSize: "2.5rem" }}>
                    Discover the allure of organic fashion with our meticulously
                    crafted <span>Jute</span>, <span>Cotton</span>, and{" "}
                    <span>Macrame</span> bags.
                  </p>
                  <p>
                    Our Jute Bags are an ode to <span> rustic elegance</span>,
                    embodying the charm of the rural landscapes and the whisper
                    of winds rustling through the fields. Moving to the soothing
                    rhythm of simplicity, our Cotton Bags offer a harmonious
                    blend of
                    <span> style </span> and <span> sustainability</span>,
                    encapsulating the soft, comforting
                    <span> touch of nature</span>.
                  </p>
                </div>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)),
        url(/product/bHead.png`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
            className="slide"
          >
            <div className="text">
              <h1>JUTE & COTTON BAGS</h1>
              <div className="first">
                <div>
                  <p style={{ fontSize: "2.5rem" }}>
                    Embracing <span>Sustainability</span>, Crafting{" "}
                    <span>Style</span>.
                  </p>
                  <p>
                    And finally, our Macrame Bags stand as a testament to the
                    intricate dance of knots and threads, a beautiful fusion of
                    timeless artistry and contemporary fashion. Each of these
                    bag types offers a unique narrative, an echo of their origin
                    and craftsmanship, and a commitment to green fashion
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
                    alt="JUTE & COTTON BAGS"
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
