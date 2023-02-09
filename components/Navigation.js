import { Navbar, Nav, Container, Modal } from "react-bootstrap";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const Navigation = () => {
  const [navbar, setNavbar] = useState(false); 
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    }
    else{
      setNavbar(false);
    }
  }
  const [showNav, setShowNav] = useState(false);
  const [loadCount, setLoadCount] = useState(0);
  const goToSection = (section) => {
    mainSwiper.slideTo(section);
    setShowNav(false);
  }
  const NavModal = (props) => {
    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="navModal text-black text-center"
      >
        <button href="#" onClick={() => goToSection(0)}>About Us</button>
        <button href="#" onClick={() => goToSection(3)}>Roadmap</button>
        <Link href="https://play.decentraland.org/?island=I1cequ&position=41%2C43&realm=unicorn">
          <a target="_blank" rel="noreferrer">Decentraland</a>
        </Link>
        <Link href="/onboarding">
          <a>On Boarding</a>
        </Link>
        <Link href="/auction-house">
          <a>Auction House</a>
        </Link>
        <Link href="/faqs">
          <a>FAQs</a>
        </Link>
        <button href="#" onClick={() => goToSection(2)}>Early Supporter NFT</button>
      </Modal>
    );
  }

  return(
    <>
      <Navbar
        variant="dark"
        fixed="top"
        expand="lg"
        className="py-3 px-md-0"
        style={{
          backgroundColor: navbar ? '#000' : 'transparent'
        }}>
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/logo.svg" alt=""/>
          </Navbar.Brand>
          <Nav className="ms-md-auto my-2 my-lg-0">
            <Link href="#player">
              <a className="d-none d-md-flex py-3 px-4">
                Player
              </a>
            </Link>
            <Link href="#marketplace">
              <a className="d-none d-md-flex py-3 px-4">
                Marketplace
              </a>
            </Link>
            <Link href="#district">
              <a className="d-none d-md-flex py-3 px-4">
                Virtual District
              </a>
            </Link>
            <Link href="#onboarding">
              <a className="d-none d-md-flex py-3 px-4">
                Onboarding
              </a>
            </Link>
            {isMobile &&
              <button
                className="btn btn-outline-light rounded-pill"
                onClick={() => setShowNav(prevCheck => !prevCheck)}>
                  menu
              </button>
            }
          </Nav>
        </Container>
      </Navbar>
      <NavModal
        show={showNav}
        onHide={() => setShowNav(false)}
      />
    </>
  )
}
export default Navigation