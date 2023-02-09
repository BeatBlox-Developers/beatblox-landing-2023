import React, { useRef, useEffect, useState} from 'react';

const Footer = () => {
  return (
    <footer className="py-5 d-flex align-items-center">
      <div className='container py-5'>
        <div className='row'>
          <div className='col-2 text-left d-flex flex-column justify-content-between'>
            <h2 className='mb-1'>
              <img src="/images/beatblox-logo-footer.svg"/>
            </h2>
            <p className='mb-1 small'>
              All rights reserved <br/>
              2022 © BeatBlox 
            </p>
          </div>
          <div className='col-4 offset-6 text-left'>
            <div className='row'>
              <div className='col-6'>
                <p className='mb-1'>Instagram</p>
                <p className='mb-1'>Discord</p>
                <p className='mb-1'>Twitter</p>
                <p className='mb-1'>Linkedin</p>
                <p className='mb-1'>YouTube</p>
              </div>
              <div className='col-6'>
                <p className='mb-1'>Contact</p>
                <p className='mb-1'>FAQs</p>
                <p className='mb-1'>Terms & Conditions</p>
                <p className='mb-1'>Privacy Policy</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer