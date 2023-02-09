import React from "react";
import styles from "./MarqueeSm.module.css";

const renderItems = () => {
  items.map((item, index) => {
    return (
      <div className={`d-flex align-items-center justify-content-center px-1 py-3 `+styles.marqueeItem} key={index}>
        <img src="/images/beatblox-logo-iso.svg"/>
        <p className="my-0 ms-3 text-black">{item}</p>
      </div>
    )
  })
}
const MarqueeSm = () => {
  const items = ['5 Virtual Spaces', '+ 60 Artists', '+ 90HS Music','5 Virtual Spaces', '+ 60 Artists', '+ 90HS Music','5 Virtual Spaces', '+ 60 Artists', '+ 90HS Music','5 Virtual Spaces', '+ 60 Artists', '+ 90HS Music']
  return (
    <div className={styles.marquee}>
      <div
        className={styles.marqueeContent}
      >
        {items.map((item, index) => {
          return (
            <div className={`d-flex align-items-center justify-content-center px-1 py-3 `+styles.marqueeItem} key={index}>
              <img src="/images/beatblox-logo-iso.svg"/>
              <p className="my-0 ms-3 text-black">{item}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
};
export default MarqueeSm;
