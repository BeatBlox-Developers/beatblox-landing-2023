
import React from 'react';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

const Features = () => {
  return (
    <div className="container h-100 d-flex align-items-center">
      <div className="row section px-5 px-md-0">
        <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
          <div className='row w-90'>
            <img className="img-icon" src="/images/metaverse.svg"></img>
            <h4 className="text-uppercase mb-4 mt-3">
              Metaverse Music District
            </h4>
            <p fontSize="lg" mt="5">
              Our Music District is composed of 34 lots in Decentraland
              destined for the development of music related activities.
              Join the most relevant metaverse of the crypto space through our virtual record store.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4  d-flex flex-column justify-content-center">
          <div className='row w-90'>
            <img className="img-icon" src="/images/marketplace.svg"></img>
            <h4 className="text-uppercase mb-4 mt-3">
              NFT Marketplace
            </h4>
            <p fontSize="lg" mt="5">
            Our NFT Marketplace allows for the 
            commercialization of music in NFT format. Be a part of and explore our curated 
            catalog with a variety of genres specifically designed to fit the music scene worldwide. 
            </p>
          </div>
        </div>
        <div className="col-12 col-md-4  d-flex flex-column justify-content-center">
          <div className='row w-90'>
            <img className="img-icon" src="/images/academy.svg"></img>
            <h4 className="text-uppercase mb-4 mt-3">
              Academy
            </h4>
            <p fontSize="lg" mt="5">
              The Beatblox Academy is an educational space linked to the world of blockchain, where you can get premium access to 
              specific lectures and participate in a 
              collaborative space within a community
              of artists.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Features