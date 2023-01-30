import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light py-5 d-flex align-items-center">
      <div className='container py-3'>
        <div className='row'>
          <div className='col-8 text-left d-flex flex-column justify-content-between'>
            <h2 className='text-dark'>
              B
            </h2>
            <p className='text-dark'>
              All rights reserved <br/>
              2022 © BeatBlox 
            </p>
          </div>
          <div className='col-4 text-left'>
            <div className='row'>
              <div className='col-6'>
                <p className='text-dark'>Instagram</p>
                <p className='text-dark'>Discord</p>
                <p className='text-dark'>Twitter</p>
                <p className='text-dark'>Linkedin</p>
                <p className='text-dark'>YouTube</p>
              </div>
              <div className='col-6'>
                <p className='text-dark'>Contact</p>
                <p className='text-dark'>FAQs</p>
                <p className='text-dark'>Terms & Conditions</p>
                <p className='text-dark'>Privacy Policy</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer