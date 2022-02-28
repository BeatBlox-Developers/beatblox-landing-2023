
import React from 'react';

const About = (mainSwiper) => {
  return (
    <div className="container h-100 d-flex align-items-center">
      <div className="row section px-5 px-md-0">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-md-between">
          <div className="row">
            <div className='col'>
              <h1>
                Explore, own<br />
                and trade music
              </h1>
            </div>
          </div>
          <div className="row">
            <div className='col-md-9'>
              <h4>
                BeatBlox is a new musical landscape. A platform that allows artists and audiences to connect through the implementation of Blockchain Technology. It is a vehicle to explore new dynamics of interaction and commercialization empowering independent creativity.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-md-end">
          <div className="row">
            <div className='col'>
              <div className='p-5 col-md-8 offset-md-4 border border-white rounded-3 bg-dark-30'>
                <h3>
                  Be among the first supporters and unlock exclusive benefits with our Early Supporter NFT.
                </h3>
                <h4 className="pt-3">We are launching our first Early Supporter NFT drop. Discover now and become a part of our ecosystem.</h4>
                <button className="btn btn-lg btn-light rounded-pill mt-3" onClick={() => mainSwiper.mainSwiper.slideTo(2)}>Early Supporters NFT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About