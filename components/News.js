import React, { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { ArrowLeft, ArrowRight } from "react-bootstrap-icons";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { news as items } from "../data/news";
import styles from "./News.module.css";

const News = () => {
  const newsSwiper = useRef(null);
  const previous = () => {
    newsSwiper.current.slidePrev();
  };

  const next = () => {
    newsSwiper.current.slideNext();
  };
  return (
    <>
      <section className=" bg-white pt-5 pb-2 py-md-5 d-flex align-items-center">
        <div className="container px-5 px-sm-0">
          <div className="row align-items-center py-5">
            <div className="col-4 offset-md-4 text-center">
              <h2 className="news text-dark mb-0">News</h2>
            </div>
            <div className="col-4 offset-4 offset-md-0">
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-outline-dark rounded-circle"
                  onClick={previous}
                >
                  <ArrowLeft />
                </button>
                <button
                  className="btn btn-outline-dark rounded-circle ms-2"
                  onClick={next}
                >
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container-fluid pb-5">
          <div className="row pt-3">
            <div className="col px-4">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={2}
                onSwiper={(swiper) => {
                  newsSwiper.current = swiper;
                }}
                // autoplay={{
                //   delay: 5200,
                //   disableOnInteraction: true,
                // }}
                // speed={800}
                loop={true}
                breakpoints={{
                  1200: {
                    slidesPerView: 5,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                }}
              >
                {items.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className={styles.item}>
                        <img
                          className="w-100"
                          style={{ cursor: "pointer" }}
                          src={item.src}
                          onClick={() => window.open(item.url)}
                        />
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
export default News;
