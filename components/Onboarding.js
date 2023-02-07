import React from 'react';
import Link from 'next/link'
import styles from "./Onboarding.module.css";

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
            <Link href="/onboarding/perform-in-the-metaverse">
              <a>
                <div className={styles.item}>
                  <img className="img-fluid w-50 d-block mx-auto" src="/images/onboarding/icon-catalog.svg"></img>
                  <h4>Join our<br/>catalog </h4>
                  <h6 className="text-small pt-3">
                    Make your content unique and collectible
                  </h6>
                </div>
              </a>
            </Link>
          </div>
          <div className="col-md-4 text-center">
            <Link href="/onboarding/perform-in-the-metaverse">
              <a>
                <div className={styles.item}>
                  <img className="img-fluid w-50 d-block mx-auto" src="/images/onboarding/icon-perform.svg"></img>
                  <h4>Perform in<br/>the Metaverse</h4>
                  <h6 className="text-small pt-3">
                    Bring your sound into virtuality
                  </h6>
                </div>
              </a>
            </Link>
            
          </div>
          
          <div className="col-md-4 text-center">
            <Link href="/onboarding/perform-in-the-metaverse">
              <a>
                <div className={styles.item}>
                  <img className="img-fluid w-50 d-block mx-auto" src="/images/onboarding/icon-huts.svg"></img>
                  <h4>Have your spot<br/>in our district</h4>
                  <h6 className="text-small pt-3">
                    Build your presence in the Metaverse
                  </h6>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Marketplace