import React from "react";
import styles from "./Marquee.module.css";

const Marquee = (props) => {
  const { rtl, items } = props;
  return (
    <div className={styles.marquee}>
      <div
        className={rtl ? styles.marqueeContentLeft : styles.marqueeContentRight}
      >
        {items.map((item, index) => {
          return (
            <div className={`col-2 `+styles.marqueeItem} key={index}>
              <img src={item.src}/>
            </div>
          )
        })}
      </div>
    </div>
  );
};
export default Marquee;
