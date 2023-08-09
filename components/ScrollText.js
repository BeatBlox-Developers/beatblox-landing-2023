import React from "react";

export const ScrollText = ({ phrases }) => {
  const animationDuration = 14; // Animation duration in seconds
  const numLines = phrases.length * 2; // Total number of lines (including transitions)

  const style = {
    animationDuration: `${animationDuration}s`,
    animationIterationCount: "infinite",
  };

  const containerStyle = {
    height: `${40 * numLines}px`,
  };

  return (
    <div className="scroll-text-content">
      <div className="scroll-text-content__container" style={containerStyle}>
        <ul className="scroll-text-content__container__list" style={style}>
          {phrases.map((phrase, index) => (
            <li
              key={index}
              className="scroll-text-content__container__list__item"
              style={style}
            >
              {phrase}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
