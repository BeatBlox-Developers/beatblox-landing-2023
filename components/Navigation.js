import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import {
  Discord,
  Instagram,
  Twitter,
  XLg,
  Youtube,
  ArrowRight,
} from "react-bootstrap-icons";
import Link, { LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar("navbar-shrink");
    } else {
      setNavbar("");
    }
  };
  const [showNav, setShowNav] = useState(false);
  const [loadCount, setLoadCount] = useState(0);

  const handleScroll = (e) => {
    e.preventDefault();
    const href = e.target.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    window.scrollTo({
      top: elem.getBoundingClientRect().top,
      behavior: "smooth",
    });
    setShowNav(false);
  };

  const NavModal = (props) => {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="navModal text-black text-center"
      >
        <div className="content d-flex justify-content-between align-items-start">
          <div className="col-12 d-flex justify-content-between text-white">
            <img src="/images/beatblox-logo-iso.svg" />
            <XLg
              style={{ cursor: "pointer" }}
              onClick={() => setShowNav(false)}
              size={24}
            ></XLg>
          </div>
          <div className="col-12">
            <a
              onClick={(e) => handleScroll(e)}
              href="#player"
              className="scrollLink pt-4 d-flex justify-content-between align-items-center"
            >
              Player
              <div className="navbar-coming-soon-container">
                <button className="navbar-coming-soon-btn">Coming Soon</button>
              </div>
              <ArrowRight />
            </a>
            <a
              onClick={() => window.open("https://beatblox.market/")}
              href="#marketplace"
              className="scrollLink pt-4 d-flex justify-content-between align-items-center"
            >
              Marketplace
              <ArrowRight />
            </a>
            <a
              onClick={() =>
                window.open(
                  "https://play.decentraland.org/?realm=dg&position=40%2C40"
                )
              }
              href="#district"
              className="scrollLink pt-4 d-flex justify-content-between align-items-center"
            >
              Virtual Music District
              <ArrowRight />
            </a>
            <a
              onClick={() => window.open("https://www.beatblox.org/onboarding")}
              href="#onboarding"
              className="scrollLink pt-4 d-flex justify-content-between align-items-center"
            >
              Join BeatBlox
              <ArrowRight />
            </a>
            <a
              onClick={(e) => handleScroll(e)}
              href=""
              className="scrollLink pt-4 d-flex justify-content-between align-items-center"
            >
              Early Supporter NFT
              <ArrowRight />
            </a>
          </div>
          <div className="col-12 text-white mt-3">
            <div className="row">
              <div className="col-12 text-start">
                <a className="" href="#footer" onClick={(e) => handleScroll(e)}>
                  Contact
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-start">
                <a className="" href="/faqs">
                  FAQs
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-start">
                <a className="" href="">
                  Terms & Conditions
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col-12 text-start">
                <a className="" href="">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 text-white d-flex justify-content-start align-items-start mt-3">
            <a
              className="social me-3"
              onClick={() =>
                window.open("https://discord.com/invite/PJd5jprhX2")
              }
            >
              <Discord></Discord>
            </a>
            <a
              className="social me-3"
              onClick={() => window.open("https://twitter.com/beatblox_")}
            >
              <Twitter></Twitter>
            </a>
            <a
              className="social me-3"
              onClick={() =>
                window.open("https://www.instagram.com/thebeatblox/")
              }
            >
              <Instagram></Instagram>
            </a>
          </div>
        </div>
      </Modal>
    );
  };

  return (
    <>
      <Navbar
        variant="dark"
        fixed="top"
        expand="lg"
        className={`py-md-3 px-md-0 ` + navbar}
      >
        <Container className="px-3 px-sm-0">
          <Navbar.Brand href="#home" className="ms-2 ms-md-0">
            <img src="/images/logo.svg" alt="" />
          </Navbar.Brand>
          <Nav className="ms-md-auto my-2 my-lg-0 d-flex align-items-center">
            <Link href="#player" onClick={(e) => handleScroll(e)}>
              <a className="d-none d-md-flex py-3 px-4">Player</a>
            </Link>
            <Link href="#marketplace" onClick={(e) => handleScroll(e)}>
              <a className="d-none d-md-flex py-3 px-4">Marketplace</a>
            </Link>
            <Link href="#district" onClick={(e) => handleScroll(e)}>
              <a className="d-none d-md-flex py-3 px-4">
                Virtual Music District
              </a>
            </Link>
            <Link href="#onboarding" onClick={(e) => handleScroll(e)}>
              <a className="d-none d-md-flex py-3 px-4">Join BeatBlox</a>
            </Link>
            <button
              className="btn hamburger"
              onClick={() => setShowNav((prevCheck) => !prevCheck)}
            >
              <img src="/images/hamb.svg" />
            </button>
          </Nav>
        </Container>
      </Navbar>
      <NavModal show={showNav} />
    </>
  );
};
export default Navigation;
