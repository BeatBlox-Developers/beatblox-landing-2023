import React from 'react';
import { isMobile } from 'react-device-detect';

const src = isMobile ? 'videos/mobile/marketplace.mp4' : 'videos/marketplace.mp4' 
const Marketplace = () => {
  return (
    <section id="marketplace" className="section-video py-5 d-flex align-items-center">
      <video
        autoPlay={true}
        controls={false}
        loop
        muted
        playsInline
        src={src}
        type="video/mp4"
      />
      <div className="container  px-5 px-sm-0">
        <div className="row">
          <div className="col-10 col-md-6">
            <div className='row'>
              <div className='col'>
                <h1 className="pt-3">
                  Support<br/>
                  & collect
                </h1>
                <h4>
                  Access unique curated content and utility
                  by engaging with your favorite artists
                </h4>
                <button className='mt-5 btn btn-light btn-lg rounded-pill'>
                  BeatBlox Marketplace
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5"></div>
      </div>
    </section>
  );
}
export default Marketplace