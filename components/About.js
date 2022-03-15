
import React from 'react';

const About = (mainSwiper) => {
  return (
    <div className="container">
      <div className="row px-5 px-md-0 h-100">
        <div className="col-12 col-md-6 d-flex flex-column justify-content-md-between">
          <div className="row">
            <div className='col'>
              <h1>
                Explore, own<br />
                and trade music
              </h1>
            </div>
          </div>
          <div className="row mt-3 mt-md-0">
            <div className='col-11 col-md-9'>
              <h4>
                BeatBlox is a new musical landscape. A platform that allows artists and audiences to connect through the implementation of Blockchain Technology. It is a vehicle to explore new dynamics of interaction and commercialization empowering independent creativity.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 pt-3 pt-md-0 d-flex flex-column justify-content-md-end">
          <div className="row mt-3 mt-md-0">
            <div className='col'>
              <div className='p-5 col-md-9 offset-md-3 border border-white rounded-3 bg-dark-30'>
                <h3>
                  Be among the first supporters and unlock exclusive benefits with our Early Supporter NFT.
                </h3>
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