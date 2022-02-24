
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Features = () => {

  return (
    <div className="container h-100 d-flex align-items-center">
      <div className="row section px-5 px-md-0">
        <Accordion className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-4 d-flex flex-column justify-content-center">
            <div className='row w-90'>
              <img className="img-icon" src="/images/metaverse.svg"></img>
              <h4 className="text-uppercase mb-4 mt-3">
                Metaverse Music District
              </h4>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <p>
                    Our Music District is composed of 34 lots in Decentraland destined for the development of music related activities. Join the most relevant metaverse of the crypto space through our virtual record store.
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  + Access Decentraland´s free and navigable universe through any browser creating a personalized avatar that represents your virtual identity.
                  + Organize and participate in virtual events like gigs, Q&A and release parties in the district. These are open to all communities around the world simultaneously.
                </Accordion.Body>
                <hr/>
              </Accordion.Item>
            </div>
          </div>
          <div className="col-12 col-md-4  d-flex flex-column justify-content-center">
            <div className='row w-90'>
              <img className="img-icon" src="/images/marketplace.svg"></img>
              <h4 className="text-uppercase mb-4 mt-3">
                NFT Marketplace
              </h4>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <p>
                    Our NFT Marketplace allows for the commercialization of music in NFT format. Be a part of and explore our curated catalog with a variety of genres specifically designed to fit the music scene worldwide. 
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  + Sell your art directly to our audience and turn it into a valuable endorsement and speculative asset.
                  + Promote and amplify your content on all our channels such as Instagram, Telegram, Twitter, Discord and through the banners in our districts.
                </Accordion.Body>
                <hr/>
              </Accordion.Item>
            </div>
          </div>
          <div className="col-12 col-md-4  d-flex flex-column justify-content-center">
            <div className='row w-90'>
              <img className="img-icon" src="/images/academy.svg"></img>
              <h4 className="text-uppercase mb-4 mt-3">
                Academy
              </h4>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <p>
                    The Beatblox Academy is an educational space linked to the world of blockchain, where you can get premium access to specific lectures and participate in a collaborative space within a community of artists.
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  + Management training workshops within the crypto space to enhance your career. 
                  + Special lectures from a set of experts that will focus on the diverse assets that blockchain technology provides.
                  + A collaborative space within a community of artists who seek to expand the possibilities of the link between technology and art.
                </Accordion.Body>
                <hr/>
              </Accordion.Item>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}
export default Features