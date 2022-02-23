import React from 'react';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark border-0 py-5">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/images/logo.svg" alt=""/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Roadmap</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Decentraland</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Auction House</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">FAQs</a>
            </li>
            <button className="btn btn-light rounded-pill">Early Acces NFT</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navigation