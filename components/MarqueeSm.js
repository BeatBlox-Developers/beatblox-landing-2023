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
          <div className="marquee-data-item d-flex align-items-center justify-content-center px-1 py-3" key={index}>
            <img src="/images/beatblox-logo-iso.svg" alt=""/>
            <h5 className="my-0 ms-3 text-black">{item}</h5>
          </div>
        )
      })}
    </Marquee>
  );
};
export default MarqueeSm;
