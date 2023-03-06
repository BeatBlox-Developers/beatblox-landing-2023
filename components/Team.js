import React from 'react';
import Marquee from "react-fast-marquee";
import { members as items } from '../data/team';

const Team = () => {
  return (
    <section id="team" className='text-center py-5'>
      <div className='row align-items-center py-5'>
        <div className='col-12 pb-5'>
          <h2 className='d-block d-md-none text-dark m-0 p-0'>Team</h2>
        </div>
        <div className='col-md-4 d-none d-md-block'>
          <h1 className='text-dark m-0 p-0'>Team.</h1>
        </div>
        <div className='col-12 col-md-8'>
          <Marquee
            className="marquee-team"
            gradientColor={[217,216,221]}
            gradientWidth={100}
          >
            {items.map((item, index) => {
              return (
                <div className="marquee-team-item text-black" key={index}>
                  <img src={item.src}/>
                  <p className="border-top border-dark pt-3 mt-3 mb-0 text-uppercase">{item.name}</p>
                  <p className='text-muted'>{item.position}</p>
                </div>
              )
            })}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
export default Team