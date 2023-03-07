import React from 'react';
import Link from 'next/link'
import styles from "./Onboarding.module.css";

const Marketplace = () => {
  const items = [
    {
      url: '/onboarding/join-our-catalog',
      title: 'Join our catalog',
      subtitle: 'Make your content unique and collectible',
      src: '/images/onboarding/icon-catalog.svg'
    },
    {
      url: '/onboarding/perform-in-the-metaverse',
      title: 'Perform in the metaverse',
      subtitle: 'Bring your sounds into virtuality',
      src: '/images/onboarding/icon-perform.svg'
    },
    {
      url: '/onboarding/have-your-spot-in-our-district',
      title: 'Have your spot in our district',
      subtitle: 'Build your presence in the Metaverse',
      src: '/images/onboarding/icon-huts.svg'
    }
  ]
  return (
    <section id="onboarding" className="section-video py-5 d-flex align-items-center">
      <video
        autoPlay={true}
        controls={false}
        loop
        muted
        playsInline
        src='videos/onboarding.mp4'
        type="video/mp4"
      />
      <div className="container px-5 px-sm-0">
        <div className="row text-center">
          <div className="col-12">
            <h2 className='mb-0'>Be part of BeatBlox</h2>
          </div>
        </div>
        <div className="row mt-5">
          {items.map((item, index) => {
            return (
              <div className="col-md-4 text-md-center py-3" key={index}>
                <Link href="/onboarding/perform-in-the-metaverse">
                  <a className={`bg-dark-50 d-block rounded-lg ` + styles.item}>
                    <div className='row'>
                      <div className='col-4 col-md-6 mx-auto p-4 p-md-5'>
                        <img className="img-fluid w-100 d-block mx-auto" src={item.src}></img>
                      </div>
                      <div className='col-7 col-md-12 mx-auto d-flex align-items-end justify-content-md-center pb-3 pb-md-2'>
                        <h4 className='mb-0'>{item.title}</h4>
                      </div>
                      <div className='col-12 d-none d-md-block mb-3'>
                        <h6 className="text-small pb-3">
                          {item.subtitle}
                        </h6>
                      </div>
                      </div>
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
export default Marketplace