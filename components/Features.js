
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
                    We have deployed our first Metaverse District, built along 34 parcels in Decentraland. BeatBlox Decentraland music district will be destined to the development of a musical arts ecosystem.<br/> 
                    Join the most relevant Metaverse of the crypto space through our virtual record store.
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  + Access Decentraland´s free and navigable universe through any browser creating a personalized avatar that represents your virtual identity.<bt/>
                  + Organize or participate in virtual events like gigs, Q&A and release parties in the district. These are open to all communities around the world simultaneously.
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
                    Our NFT marketplace will be a curated showcase for musicians to offer their content. Fans will be able to discover, listen, buy and share their collection across our platform.
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  + Sell your art directly to our audience and turn it into a valuable collectible.<br/>
                  + Promote and amplify your content through our cross channel presence.<br/>
                  + Purchase, collect and sell NFTs from your favorite artists. 
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
                    The Beatblox Academy is an educational link to the world of blockchain, where you can get premium access to specific lectures and participate in a collaborative space that includes both fans and artists. 
                  </p>
                </Accordion.Header>
                <Accordion.Body>
                  + Management training workshops within the crypto space to enhance your career. <br/>
                  + Special lectures from a set of experts that will focus on the added value that blockchain technology provides.<br/>
                  + A collaborative space within a community of artists and fans who seek to expand the bond between technology and art.
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