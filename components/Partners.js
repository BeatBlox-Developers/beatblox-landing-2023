import React from "react";
import Marquee from "react-fast-marquee";
import { partners as items } from "../data/partners";

const Partners = () => {
  return (
    <section id="partners" className="text-center py-5">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h3 className="text-dark mb-0">With the support of</h3>
          </div>
        </div>
        <div className="row align-items-center py-5">
          <div className="col-12">
            <Marquee
              className="marquee-partners"
              direction="right"
              gradient={false}
            >
              {items.map((item, index) => {
                return (
                  <div className="marquee-partners-item" key={index}>
                    <img src={item.src} />
                  </div>
                );
              })}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Partners;
