import React from 'react';
import Link from 'next/link'

const Marketplace = () => {
  return (
    <section className="section-video py-5 d-flex align-items-center">
      <video
        autoPlay={true}
        controls={false}
        loop
        muted
        playsInline
        src='videos/onboarding.mp4'
        type="video/mp4"
      />
      <div className="container">
        <div className="row text-center">
          <div className="col-12">
            <h3>Be part of BeatBlox</h3>
          </div>
        </div>
        <div className="row px-5 px-md-0 mt-5">
          <div className="col-md-4 text-center">
            <img className="img-fluid w-50 d-block mx-auto" src="/images/onboarding/icon-perform.svg"></img>
            <Link href="/onboarding/perform-in-the-metaverse">
              <a className="btn btn-lg btn-outline-light rounded-pill mt-1 py-3 px-5">
                Perform in the metaverse
              </a>
            </Link>
            <h5 className="pt-5 text-muted">
              Bring your sound into virtuality.
            </h5>
          </div>
          <div className="col-md-4 text-center">
            <img className="img-fluid w-50 d-block mx-auto" src="/images/onboarding/icon-catalog.svg"></img>
            <Link href="/onboarding/join-our-catalog">
              <a className="btn btn-lg btn-outline-light rounded-pill mt-1 py-3 px-5">
                Join our catalog
              </a>
            </Link>
            <h5 className="pt-5 text-muted">
              Make your content unique and collectible.
            </h5>
          </div>
          <div className="col-md-4 text-center">
            <img className="img-fluid w-50 d-block mx-auto" src="/images/onboarding/icon-huts.svg"></img>
            <Link href="/onboarding/have-your-spot-in-our-district">
              <a className="btn btn-lg btn-outline-light rounded-pill mt-1 py-3 px-5">
                Have your spot in our district
              </a>
            </Link>
            <h5 className="pt-5 text-muted">
              Build your presence in the Metaverse.
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Marketplace