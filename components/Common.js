import { Navbar, Nav, Container } from "react-bootstrap";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export const Navigation = () => {
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
  return(
    <Navbar variant="dark" fixed="top" expand="lg" className={ navbar ? 'active py-5 px-5 px-md-0' : 'py-5 px-5 px-md-0' }>
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/logo.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link href="/onboarding">
              <u>On-Boarding</u>
            </Nav.Link>
            <Nav.Link href="/">Back Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export const Switcher = (props) => {
  const router = useRouter();
  return(
    <div className="row pb-5 px-5 px-md-0 switcher d-none d-md-block">
      <div className={ props.theme === 'black' ? 'text-black' : 'text-white' }>
        <Link href="play-at-the-metaverse">
          <a className={ router.pathname === '/onboarding/play-at-the-metaverse' ? 'text-decoration-underline' : '' }
            rel="noreferrer">
              Play at the metaverse
          </a>
        </Link>
        <Link href="/onboarding/join-our-catalog">
          <a className={
            router.pathname === "/onboarding/join-our-catalog" ? "text-decoration-underline" : "" }
            rel="noreferrer">
              Join our catalog
          </a>
        </Link>
        <Link href="/onboarding/have-your-spot-in-our-district">
          <a className={
            router.pathname === "/onboarding/have-your-spot-in-our-district" ? "text-decoration-underline" : "" }
            rel="noreferrer">
              Have your spot in our district
          </a>
        </Link>
      </div>
    </div>
  )
}

export const RenderVideo = (props) => {
  return (
    <video
      autoPlay={true}
      controls={false}
      loop
      muted
      playsInline
      src={props.video}
      type="video/mp4"/>
  );
}