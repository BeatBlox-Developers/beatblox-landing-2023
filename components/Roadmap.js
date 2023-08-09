import React, { useRef, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { milestones as items } from "../data/roadmap";
import { ScrollText } from "./ScrollText";

const Roadmap = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("visible");
          setIsVisible(true);
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="section-video py-5 d-flex align-items-center"
    >
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
          <ScrollText phrases={items.map((item) => item.title)} />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
