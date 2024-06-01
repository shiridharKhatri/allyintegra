import React, { useCallback, useEffect, useState } from "react";
import Nav from "../../components/Nav";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import ImageViewer from "react-simple-image-viewer";

export default function Bedsheet() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [images, setImages] = useState([]);
  useEffect(() => {
    let img = [];
    for (let i = 0; i < 20; i++) {
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

  return (
    <>
      <Nav position="absolute" bg={"transparent"} />
      <section className="bedsheet">
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
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)),
        url(/product/bedsheet/3.png`,
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
                  <p>
                    Choose from hundreds of exquisite designs, each crafted to
                    elevate your sleeping experience to new heights of luxury
                    and comfort.
                  </p>
                  <p>
                    Each set comes complete with one bedsheet and two coordinate
                    pillow covers, ensuring a cohesive and stylish bedding
                    ensemble for your ultimate comfort
                  </p>
                </div>
                <p>
                  We prioritize your personal touch, offering customization in
                  design, set preferences, and sizes, allowing you to create a
                  bedding experience that truly matches your taste and comfort.
                </p>
              </div>
            </div>{" "}
          </SwiperSlide>
          <SwiperSlide
            style={{
              background: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, .5)),
        url(/product/bedsheet/2.png`,
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
                  <p>
                    <b>
                      Floral, geometric, digital, or solid - provide us your
                      vision, and we'll materialize it.
                    </b>
                  </p>
                </div>
                <p>
                  Our catalogue showcases an impressive selection of premium bed
                  linen, which includes luxuriant bed sheets crafted from 100%
                  cotton and glace cotton, sophisticated duvet covers,
                  pillowcases, and stylish bed runners and throws.
                </p>
                <p>
                  This range, available in an array of hues and striking
                  designs, is supplemented by our offering of quilts,
                  comforters, chic bed skirts, top-quality mattress protectors,
                  all-season blankets, bedspreads, and snug fitted sheets.
                </p>
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
          <a href="https://wa.me/+919779775469">
            <button>
              <FaWhatsapp />
              &nbsp;Inquire now
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
