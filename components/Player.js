import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Marquee from './Marquee'
import { artists as items } from '../data/artists';

const Player = () => {
  return (
    <>
      <section className="full-height section-video py-5 d-flex align-items-center">
        <video
          autoPlay={true}
          controls={false}
          loop
          muted
          playsInline
          src='videos/player.mp4'
          type="video/mp4"
        />
        <div className="container">
          <div className="row">
            <div className="col-5"></div>
            <div className="col-10 col-md-7">
              <div className='row'>
                <div className='col text-black'>
                  <h1 className="pt-3">
                    Listen &<br />
                    Take Part
                  </h1>
                  <h4 className="pt-3">
                    Earn rewards and unlock features while you 
                    discover and listen to curated music content.
                  </h4>
                  <button className='mt-4 btn btn-dark btn-lg rounded-pill'>
                    Discover
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-light text-center py-5'>
        <h3 className="text-black py-5">Artists of the week</h3>
        <Marquee
          rtl={true}
          items={items}
        />
        <button className='my-5 btn btn-dark btn-lg rounded-pill'>
          Discover More
        </button>
      </section>
    </>
  );
}
export default Player