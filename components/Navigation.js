import React from 'react';
import { Container, Navbar, Button, Nav } from 'react-bootstrap';

const Navigation = () => {
  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark border-0 py-5">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/images/logo.svg" alt=""/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav ms-auto my-2 my-lg-0 navbar-nav-scroll">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">About Us</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Roadmap</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabIndex="-1" aria-disabled="true">Decentraland</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabIndex="-1" aria-disabled="true">Auction House</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" tabIndex="-1" aria-disabled="true">FAQs</a>
            </li>
            <button class="btn btn-light rounded-pill">Early Acces NFT</button>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navigation