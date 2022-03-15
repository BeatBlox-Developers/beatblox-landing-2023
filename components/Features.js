
import React from 'react';
import { Accordion } from 'react-bootstrap';

const Features = () => {

  return (
    <div className="container d-flex align-items-center">
      <div className="row px-5 px-md-0">
        <Accordion className="d-flex flex-column flex-md-row">
          <div className="col-12 col-md-4 d-flex flex-column justify-content-start">
            <div className='row'>
              <div className="col col-md-10">
                <img className="img-icon d-none d-md-flex" src="/images/metaverse.svg"></img>
                <h4 className="text-uppercase mb-4 mt-3">
                  <img className="img-icon d-inline d-md-none" width="50" src="/images/metaverse.svg"></img>
                  Metaverse Music District
                </h4>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    <p>
                      We have deployed our first Metaverse District, built along 34 parcels in Decentraland. BeatBlox Decentraland music district will be destined to the development of a musical arts ecosystem. 
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    + Access Decentraland´s free and navigable universe through any browser creating a personalized avatar that represents your virtual identity.<br/><br/>
                    + Organize or participate in virtual events like gigs, Q&A and release parties in the district. These are open to all communities around the world simultaneously.
                  </Accordion.Body>
                  <hr/>
                </Accordion.Item>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4  d-flex flex-column justify-content-start">
            <div className='row'>
              <div className="col col-md-10">
                <img className="img-icon d-none d-md-flex" src="/images/marketplace.svg"></img>
                <h4 className="text-uppercase mb-4 mt-3">
                  <img className="img-icon d-inline d-md-none" width="50" src="/images/marketplace.svg"></img>
                  NFT Marketplace
                </h4>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    <p>
                      Our NFT marketplace will be a curated showcase for musicians to offer their content. Fans will be able to discover, listen, buy and share their collection across our platform.
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    + Sell your art directly to our audience and turn it into a valuable collectible.<br/><br/>
                    + Promote and amplify your content through our cross channel presence.<br/><br/>
                    + Purchase, collect and sell NFTs from your favorite artists. 
                  </Accordion.Body>
                  <hr/>
                </Accordion.Item>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4  d-flex flex-column justify-content-start">
            <div className='row'>
              <div className="col col-md-10">
                <img className="img-icon d-none d-md-flex" src="/images/academy.svg"></img>
                <h4 className="text-uppercase mb-4 mt-3">
                  <img className="img-icon d-inline d-md-none" width="50" src="/images/academy.svg"></img>
                  Academy
                </h4>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>
                    <p>
                      BeatBlox Academy is an educational link to the blockchain world, where you can get premium access to specific reading and participate in a collaborative space which includes fans and artists. 
                    </p>
                  </Accordion.Header>
                  <Accordion.Body>
                    + Management training workshops within the crypto space to enhance your career. <br/><br/>
                    + Special lectures from a set of experts that will focus on the added value that blockchain technology provides.<br/><br/>
                    + A collaborative space within a community of artists and fans who seek to expand the bond between technology and art.
                  </Accordion.Body>
                  <hr/>
                </Accordion.Item>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  )
}
export default Features