import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { news as items } from '../data/news';

const News = () => {
  return (
    <>
      <section className="bg-white py-5 d-flex align-items-center">
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <h2 className='text-dark mb-0'>
                News
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-white'>
        <div className='container-fluid pb-5'>
          <div className='row pt-3'>
            <div className='col px-4'>
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={5}
                // autoplay={{
                //   delay: 5200,
                //   disableOnInteraction: true,
                // }}
                // speed={800}
                loop={true}
              >
                {items.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className='bg-light p-5'>
                        <img className="w-100" src={item.src}/>
                      </div>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default News