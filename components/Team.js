import React from 'react';
import Marquee from './Marquee'
import { members as items } from '../data/team';

const Team = () => {
  return (
    <section className='bg-light text-center py-5'>
      <div className='row align-items-center py-5'>
        <div className='col-4'>
          <h1 className='text-dark m-0 p-0'>Team.</h1>
        </div>
        <div className='col-8'>
          <Marquee
            rtl={true}
            items={items}
          />
        </div>
      </div>
    </section>
  )
}
export default Team