import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Marquee from "react-fast-marquee";
import { artists as items } from '../data/artists';
import { isMobile } from "react-device-detect";

const Player = () => {
  // const video = isMobile ? 'videos/player.mp4' : 'videos/player.mp4';
  return (
    <>
      <section id="player" className="full-height section-video py-5 d-flex align-items-center">
        <video
          autoPlay={true}
          controls={false}
          loop
          muted
          playsInline
          src='videos/player.mp4'
          type="video/mp4"
        />
        <div className="container px-5 px-sm-0">
          <div className="row">
            <div className="col-12 col-md-5"></div>
            <div className="col-12 col-md-7">
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
        <div className='container-fluid'>
          <div className='row'>
            <h3 className="text-black py-5">Artists of the week</h3>
          </div>
          <div className='row'>
            <Marquee
              gradient={false}
              className="marquee-artists"
            >
              {items.map((item, index) => {
                return (
                  <div className="marquee-artists-item" key={index}>
                    <img src={item.src}/>
                  </div>
                )
              })}
            </Marquee>
          </div>
          <div className='row my-5 '>
            <div className='col-6 mx-auto'>
              <button className='btn btn-outline-dark btn-lg rounded-pill'>
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Player