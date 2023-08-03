import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { milestones as items } from "../data/roadmap";

const Roadmap = () => {
  return (
    <section className="section-video py-5 d-flex align-items-center">
      <video
        autoPlay={true}
        controls={false}
        loop
        muted
        playsInline
        src="videos/roadmap.mp4"
        type="video/mp4"
      />
      <div className="milestones-container container py-5 px-5 px-sm-0">
        <div className="row text-center">
          <div className="col-12">
            <h2 className="text-black">Our future at a glance</h2>
          </div>
        </div>
        <div className="milestones row justify-content-center pt-3">
          {items.map((item, index) => {
            return (
              <div
                className="col-12 col-md-6 text-center my-1"
                key={index}
                style={{ width: "fit-content" }}
              >
                <AnimationOnScroll animateIn="animate__fadeInUp">
                  <div className="btn btn-light rounded-pill p-3">
                    {item.title}
                  </div>
                </AnimationOnScroll>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default Roadmap;
