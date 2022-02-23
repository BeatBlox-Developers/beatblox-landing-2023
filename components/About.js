
import React from 'react';

const About = () => {
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
                BeatBlox is a platform that improves on the bond between artists and their audiences through the implementation of Blockchain Technology. It is a vehicle to explore new dynamics of interaction
                and commercialization, creating a brand new
                musical landscape.
              </h4>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-column justify-content-md-end">
          <div className="row">
            <div className='p-5 col-md-8 offset-md-4 border border-white rounded-3 bg-dark-30'>
              <h3>
                Be the first one to access and get
                exlcusive benefits with our
                Early Supporter NFT.
              </h3>
              <h4 className="pt-3">We are launching our Early Supporter NFT drop. Discover now and become a part of BeatBlox.</h4>
              <button className="btn btn-light rounded-pill mt-3">Early Supporter NF</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About