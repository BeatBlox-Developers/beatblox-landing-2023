import React from "react";
import { ArrowRight } from "react-bootstrap-icons";

const EarlySUP = () => {
  return (
    <section id="earlysup" className="py-5">
      <div className="row blur align-items-center py-5">
        <div className="col-3 offset-1">
          <h2>NFT Early<br/>Supporter</h2>
        </div>
        <div className="col-2">

        </div>
        <div className="col-5 text-left">
          <h4>Support us by getting our<br/>Early Supporter</h4>
          <button className="btn btn-light rounded-pill">Get it now</button>
        </div>
        <div className="nft">
            <video
              autoPlay={true}
              controls={false}
              loop
              muted
              playsInline
              src='images/earlysupporters/nft.mp4'
              type="video/mp4"
            />
          </div>
      </div>
    </section>
  );
};
export default EarlySUP