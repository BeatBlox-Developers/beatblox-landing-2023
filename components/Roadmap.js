import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { milestones as items } from '../data/roadmap';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Roadmap = () => {
  return (
    <section className="section-video py-5 d-flex align-items-center">
      <video
        autoPlay={true}
        controls={false}
        loop
        muted
        playsInline
        src='videos/roadmap.mp4'
        type="video/mp4"
      />
      <div className="container py-5 px-5 px-sm-0">
        <div className="row text-center">
          <div className="col-12">
            <h2 className='text-black'>Our future at a glance</h2>
          </div>
        </div>
        <div className="row justify-content-center pt-5">
          {items.map((item, index) => {
          return (
            <div className='col-12 col-md-3 text-center my-1' key={index}>
              <AnimationOnScroll animateIn="animate__fadeInUp">
                <div className='btn btn-light rounded-pill p-3'>
                  {item.title}
                </div>
              </AnimationOnScroll>
              
            </div>
          )
        })}
        </div>
      </div>
    </section>
  );
}
export default Roadmap