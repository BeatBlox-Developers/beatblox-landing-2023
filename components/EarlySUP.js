import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const EarlySUP = () => {
  return (
    <>
      <section
        id="earlysup"
        className="d-md-none section-video py-5 d-flex align-items-center"
      >
        <video
          autoPlay={true}
          controls={false}
          loop
          muted
          playsInline
          src="images/earlysupporters/nft.mp4"
          type="video/mp4"
        />
        <div className="container-fluid content">
          <div className="row align-items-center py-5 text-center">
            <div className="col-12 mb-5">
              <h2 className="nft-early-supporter">
                NFT Early
                <br />
                Supporter
              </h2>
            </div>
            <div className="col-12 offset-md-0 text-left mt-3">
              <h4 className="mt-5">
                Support us by getting our
                <br />
                Early Supporter
              </h4>
            </div>
            <div className="col-12 mt-3">
              <button className="btn btn-light rounded-pill">Get it now</button>
            </div>
          </div>
        </div>
      </section>
      <section id="earlysup" className="d-none d-md-block py-5">
        <div className="container-fluid">
          <div className="row blur align-items-center py-5">
            <div className="col-3 offset-1 d-none d-md-block">
              <h2>
                NFT Early
                <br />
                Supporter
              </h2>
            </div>
            <div className="col-2 d-none d-md-block">
              <BsArrowRight size={60} />
            </div>
            <div className="col-9 offset-1 col-md-5 offset-md-0 text-left">
              <h4>
                Support us by getting our
                <br />
                Early Supporter
              </h4>
              <button className="btn btn-light rounded-pill">
                <Link href="/early-supporter-nft">Get it now</Link>
              </button>
            </div>
            <div className="nft">
              <video
                autoPlay={true}
                controls={false}
                loop
                muted
                playsInline
                src="images/earlysupporters/nft.mp4"
                type="video/mp4"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default EarlySUP;
