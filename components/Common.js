import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSwiper } from "swiper/react";

export const Navigation = () => {
  const [navbar, setNavbar] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  return (
    <Navbar
      variant="dark"
      fixed="top"
      expand="lg"
      className={navbar ? "active py-5 px-5 px-md-0" : "py-5 px-5 px-md-0"}
      style={{ marginTop: "0px" }}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src="/images/logo.svg" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-2 my-lg-0">
            <Nav.Link href="/onboarding">
              <u>Onboarding</u>
            </Nav.Link>
            <Nav.Link href="/">Back Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export const Switcher = (props) => {
  const router = useRouter();
  return (
    <div className="row px-5 px-md-0 switcher d-none d-md-block">
      <div className={props.theme === "black" ? "text-black" : "text-white"}>
        <Link href="perform-in-the-metaverse">
          <a
            className={
              router.pathname === "/onboarding/perform-in-the-metaverse"
                ? "text-white text-decoration-underline"
                : ""
            }
            rel="noreferrer"
          >
            Perform in the metaverse
          </a>
        </Link>
        <Link href="/onboarding/join-our-catalog">
          <a
            className={
              router.pathname === "/onboarding/join-our-catalog"
                ? "text-white text-decoration-underline"
                : ""
            }
            rel="noreferrer"
          >
            Join our catalog
          </a>
        </Link>
        <Link href="/onboarding/have-your-spot-in-our-district">
          <a
            className={
              router.pathname === "/onboarding/have-your-spot-in-our-district"
                ? "text-white text-decoration-underline"
                : ""
            }
            rel="noreferrer"
          >
            Have your spot in our district
          </a>
        </Link>
      </div>
    </div>
  );
};

export const RenderVideo = (props) => {
  return (
    <video
      autoPlay={true}
      controls={false}
      loop
      muted
      playsInline
      src={props.video}
      type="video/mp4"
    />
  );
};

export const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      type="button"
      className="btn btn-lg btn-outline-light mt-3 rounded-pill"
      onClick={() => swiper.slidePrev()}
    >
      {children}
    </button>
  );
};
export const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      type="button"
      className="btn btn-lg btn-outline-light mt-3 rounded-pill"
      onClick={() => swiper.slideNext()}
    >
      {children}
    </button>
  );
};
