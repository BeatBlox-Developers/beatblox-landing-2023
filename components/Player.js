import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Player = () => {
  return (
    <section className="section-video py-5 d-flex align-items-center">
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
        <div className='row pt-3'>
          <div className='col'>
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={2}
              autoplay={{
                delay: 5200,
                disableOnInteraction: true,
              }}
              speed={800}
              loop={true}
            >
              <SwiperSlide>
                <img className="w-100 rounded" src='images/district/01.jpg'/>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100 rounded" src='images/district/01.jpg'/>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100 rounded" src='images/district/01.jpg'/>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100 rounded" src='images/district/01.jpg'/>
              </SwiperSlide>
              <SwiperSlide>
                <img className="w-100 rounded" src='images/district/01.jpg'/>
              </SwiperSlide>
            </Swiper>
          </div>

        </div>
      </div>
    </section>
  );
}
export default Player