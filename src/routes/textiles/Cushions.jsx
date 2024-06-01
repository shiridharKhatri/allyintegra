import React, { useCallback, useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import ImageViewer from "react-simple-image-viewer";
import { FaWhatsapp } from "react-icons/fa";

export default function Bedsheet() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);
  useEffect(() => {
    let img = [];
    for (let i = 0; i < 2; i++) {
      img.push(`/product/cus/${i + 1}.png`);
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

  return (
    <>
      <Nav position="absolute" bg={"transparent"} />
      <section className="bedsheet cushions">
        <Swiper
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
                    meets style and personal design. Indulge in comfort and
                    style with{" "}
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
                    <b style={{color:"#FFDE59"}}>
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
        <div className="imageGal">
          {/* <h1>Pictures of Bedsheet </h1> */}
          <div className="imgContainer" style={{ marginBottom: "3rem" }}>
            {images.map((src, index) => (
              <img
                src={src}
                onClick={() => openImageViewer(index)}
                width="300"
                key={index}
                alt=""
              />
            ))}

            {isViewerOpen && (
              <ImageViewer
                src={images}
                currentIndex={currentImage}
                onClose={closeImageViewer}
                disableScroll={false}
                backgroundStyle={{
                  backgroundColor: "rgba(0,0,0,0.9)",
                }}
                closeOnClickOutside={true}
              />
            )}
          </div>
        </div>
        <div className="callToAction">
            <a href="https://wa.me/+919779775469"><button><FaWhatsapp/>&nbsp;Inquire now</button></a>
        </div>
      </section>
    </>
  );
}
