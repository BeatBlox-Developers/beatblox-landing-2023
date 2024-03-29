import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { sections as items } from "../data/district";
import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";

const District = () => {
  const districtSwiper = useRef(null);
  const previous = () => {
    districtSwiper.current.slidePrev();
  };

  const next = () => {
    districtSwiper.current.slideNext();
  };
  return (
    <>
      <section id="district" className="py-5 d-flex align-items-center">
        <div className="container px-5 px-sm-0">
          <div className="row">
            <div className="col-8 col-md-4">
              <h3 className="mb-0">Experience the next musical landscape</h3>
            </div>
            <div className="d-flex mt-5 mt-md-0 col-12 col-md-6 offset-md-2 align-items-end">
              <div className="w-100 d-flex justify-content-between">
                <div
                  className="rounded-pill border border-color-white px-3 py-2"
                  style={{ cursor: "pointer" }}
                  onClick={() =>
                    window.open(
                      "https://play.decentraland.org/?realm=dg&position=40%2C40"
                    )
                  }
                >
                  Decentraland
                </div>
                <div className="">
                  <button
                    className="btn btn-outline-light rounded-circle"
                    onClick={previous}
                  >
                    <ArrowLeft />
                  </button>
                  <button
                    className="btn btn-outline-light rounded-circle ms-2"
                    onClick={next}
                  >
                    <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-black">
        <div className="container-fluid pb-5">
          <div className="row pt-3">
            <div className="col px-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                onSwiper={(swiper) => {
                  districtSwiper.current = swiper;
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  480: {
                    slidesPerView: 1,
                  },
                }}
                className="swiper-district"
                // autoplay={{
                //   delay: 5200,
                //   disableOnInteraction: true,
                // }}
                // speed={800}
                loop={true}
              >
                {items.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="district-box">
                        <video
                          poster={item.poster}
                          onMouseOver={(event) => event.target.play()}
                          onMouseOut={(event) => {
                            event.target.pause();
                          }}
                          src={item.src}
                          loop
                        ></video>
                        <h5 className="pt-3 text-white">{item.name}</h5>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default District;
