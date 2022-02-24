import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Benefits = () => {
  return (
    <div className="container h-100">
      <div className="row section h-100 p-5">
        <div className="col-md-6 offset-md-6 d-flex flex-column justify-content-center">
          <div className="row">
            <div className='col'>
              <h1 className='p-0'>
                Beatblox<br />
                Early Supporters NFT
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className='bg-dark rounded-3 p-5'>
                <h4 className="text-uppercase mb-3">
                  Benefits
                </h4>
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  spaceBetween={20}
                  slidesPerView={1}
                  navigation
                  className="benefits-swiper"
                >
                  <SwiperSlide>
                    <h4 className="m-0">
                      Early access to Closed Beta Auction House.
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      BeatBlox Collectable Credential Artwork.
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      BeatBlox Wearable for Decentraland.
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      Voting power for future governance system over platform catalog and activities.
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      BeatBlox Airdrops. 
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      Membership for BeatBlox Decentraland District Mountain Club.
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      Access to early supporters only virtual events and meet & greets.
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      Preferential access to future BeatBlox products.
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      Participate on physical packs raffles (containing brand book, t shirt and souvenirs)
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      1 out of 1000 will randomly receive an extremely rare Credential.  
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      Decentraland District Games and Installations credits. 
                    </h4>
                  </SwiperSlide>
                  <SwiperSlide>
                    <h4 className="m-0">
                      Token compatible with every major marketplace for secondary sales, no commission added. 
                    </h4>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col-md-4'>
              <button className="mt-5 btn btn-lg btn-light rounded-pill d-block">
                Mint Early Supporter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Benefits