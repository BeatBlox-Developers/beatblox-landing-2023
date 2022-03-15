import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Roadmap = () => {
  return (
    <div className="container-fluid px-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5200,
          disableOnInteraction: true,
        }}
        speed={800}
        loop={true}
        pagination={{ clickable: true }}
        className="roadmap-swiper"
      >
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      Early supporter<br />
                      NFT drop
                    </h2>
                    <p className="pt-3">
                      Be a part of the initial BeatBlox community, we will mint 10.000 Full Access Pass to our platform. Get your Pass!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      Closed Beta<br/>
                      Auction House
                    </h2>
                    <p className="pt-3">
                      Our initial Supporters will gain access to our Auction House. They will be able to dig through our catalog and discover premium content before everyone else.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      BeatBlox Open Air venue pre-launch<br />
                    </h2>
                    <p className="pt-3">
                      Our first show in the Metaverse, we will be announcing the artists who will be 
                      performing in the grand opening soon.
                      Stay on the beat! 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      BeatBlox Auction <br />
                      House public launch
                    </h2>
                    <p className="pt-3">
                      The marketplace will now be available for everyone, the full initial catalog will be online with lots of tracks for you to enjoy & collect! 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      BeatBlox Auction <br />
                      House Collectors <br />
                      feature
                    </h2>
                    <p className="pt-3">
                      Enhanced social features for collecting and sharing tokenized music. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      BeatBlox first <br />
                      Wearable Collection
                    </h2>
                    <p className="pt-3">
                      Custom made Decentraland Wearable 
                      Collection will be dropped!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      BeatBlox Music District<br />
                      public launch
                    </h2>
                    <p className="pt-3">
                      The district and all its areas will be available for you to enjoy.
                      Discover, trade, interact and play! 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      BeatBlox <br />
                      Academy launch    
                    </h2>
                    <p className="pt-3">
                      Our academy will now be online for users to learn by entering our specific educational channel where all our resources about blockchain technologies will be available. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      Future Tokenized Music <br/>
                      holders benefits
                    </h2>
                    <p className="pt-3">
                      We will present expanded utility features for tokenized music holders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container h-100 d-flex align-items-center">
            <div className="row section w-100">
              <div className="col-10 col-md-6">
                <div className='row'>
                  <div className='col'>
                    <h4>
                      <u>Our Roadmap</u>
                    </h4>
                    <h2 className="pt-3">
                      Governance <br />
                      System proposal
                    </h2>
                    <p className="pt-3">
                      We will gradually delegate decision making to the BeatBlox community. Users will be able to participate in our catalog curation process, the district´s agenda and further features of the platform. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Roadmap