import React from "react";
import Marquee from "react-fast-marquee";

const MarqueeSm = () => {
  const items = ['5 Virtual Spaces', '+ 60 Artists', '+ 90HS Music', '5 Virtual Spaces', '+ 60 Artists', '+ 90HS Music', '5 Virtual Spaces', '+ 60 Artists', '+ 90HS Music', '5 Virtual Spaces', '+ 60 Artists', '+ 90HS Music']
  return (
    <Marquee
      direction="right"
      gradient={false}
      className="marquee-data"
    >
      {items.map((item, index) => {
        return (
          <div className="marquee-data-item d-flex align-items-center justify-content-center px-1 py-2" key={index}>
            <img src="/images/beatblox-logo-iso.svg" alt=""/>
            <h6 className="my-0 ms-3 text-black">{item}</h6>
          </div>
        )
      })}
    </Marquee>
  );
};
export default MarqueeSm;
