import { Navbar, Nav, Container } from "react-bootstrap";
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Navigation = () => {
  return(
    <Navbar variant="dark" fixed="top" expand="lg" className="py-5 px-5 px-md-0">
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/logo.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link href="#">
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
  console.log(router.pathname)
  return(
    <div className="row pb-5 d-inline px-5 px-md-0">
      <Link href="play-at-the-metaverse">
        <a className={
          router.pathname === "/onboarding/play-at-the-metaverse" ? "text-decoration-underline" : "",
          props.theme === 'black' ? 'text-black' : 'text-white' } rel="noreferrer">
            Play at the metaverse
        </a>
      </Link>
      <Link href="/onboarding/join-our-catalog">
        <a className={
          router.pathname === "/onboarding/join-our-catalog" ? "text-decoration-underline" : "",
          props.theme === 'black' ? 'text-black' : 'text-white' } rel="noreferrer">
            Join our catalog
        </a>
      </Link>
      <Link href="/onboarding/have-your-spot-in-our-district">
        <a className={
          router.pathname === "/onboarding/have-your-spot-in-our-district" ? "text-decoration-underline" : "", 
          props.theme === 'black' ? 'text-black' : 'text-white' } rel="noreferrer">
            Have your spot in our district
        </a>
      </Link>
    </div>
  )
}