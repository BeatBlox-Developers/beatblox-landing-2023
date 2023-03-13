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
      setNavbar('navbar-shrink');
    }
    else{
      setNavbar('');
    }
  }
  const [showNav, setShowNav] = useState(false);
  const [loadCount, setLoadCount] = useState(0);
  const goToSection = (section) => {
    section.scrollIntoView()  
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
        <button className="" onClick={() => goToSection('#player')}>Player</button>
        <button className="" onClick={() => goToSection('#marketplace')}>Marketplace</button>
        <button className="" onClick={() => goToSection('#district')}>Virtual Music District</button>
        <button className="" onClick={() => goToSection('#player')}>Join BeatBlox</button>
        <button className="" onClick={() => goToSection('#player')}>Early Supporter NFT</button>

      </Modal>
    );
  }

  return(
    <>
      <Navbar
        variant="dark"
        fixed="top"
        expand="lg"
        className={`py-3 px-md-0 ` + navbar}>
        <Container className="px-5 px-sm-0">
          <Navbar.Brand href="#home" className="ms-2 ms-md-0">
            <img src="/images/logo.svg" alt=""/>
          </Navbar.Brand>
          <Nav className="ms-md-auto my-2 my-lg-0 d-flex align-items-center">
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
                Virtual Music District
              </a>
            </Link>
            <Link href="#onboarding">
              <a className="d-none d-md-flex py-3 px-4">
                Join BeatBlox
              </a>
            </Link>
            <button
              className="btn"
              onClick={() => setShowNav(prevCheck => !prevCheck)}>
                <img style={{width: '30px'}} src="/images/hamb.svg"/>
            </button>
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