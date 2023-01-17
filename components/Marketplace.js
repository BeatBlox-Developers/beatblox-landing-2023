import React from 'react';

const Marketplace = () => {
  return (
    <section className="section-video py-5 d-flex align-items-center">
      <video
        autoPlay={true}
        controls={false}
        loop
        muted
        playsInline
        src='videos/marketplace.mp4'
        type="video/mp4"
      />
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-7">
            <div className='row'>
              <div className='col'>
                <h1 className="pt-3">
                  Support<br/>
                  & collect
                </h1>
                <h4 className="pt-3">
                  Access unique curated content and utility
                  by engaging with your favorite artists
                </h4>
                <button className='mt-4 btn btn-light btn-lg rounded-pill'>
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