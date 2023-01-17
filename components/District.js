import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const District = () => {
  return (
    <section className="py-5 d-flex align-items-center">
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <h3>
              Experience the next 
              musical landscape
            </h3>
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
export default District