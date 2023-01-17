
import React from 'react';
// import { isMobile } from "react-device-detect";
// import RenderVideo from '../components/RenderVideo'

const About = () => {
  return (
    <section className="section-video py-5 d-flex align-items-center">
      <video
        autoPlay={true}
        controls={false}
        loop
        muted
        playsInline
        src='videos/about.mp4'
        type="video/mp4"
      />
      <div className="container">
        <div className="row">
          <div className='col text-center'>
            <h1>
              A new musical<br />
              ecosystem
            </h1>
            <h4>
              Empowering music creators and their audiences through blockchain technology,
              interactive experiences and the power of communities
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About