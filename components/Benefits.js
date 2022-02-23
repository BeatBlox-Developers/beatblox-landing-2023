import React from 'react';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

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
                <h4 className="text-uppercase">
                  Benefits
                </h4>
                <h4 className="m-0 mt-3">
                  Voting power for future governance system
                  over platform catalog and activities.
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className='col-md-4'>
              <button className="mt-5 btn btn-light rounded-pill d-block">
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