import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import About from '../components/About';
import Features from '../components/Features';
import Roadmap from '../components/Roadmap';
import Contact from '../components/Contact';
import Minting from '../components/Minting';
import Team from '../components/Team';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Mousewheel, EffectFade, Controller } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/mousewheel';
import 'swiper/css/effect-fade';
import { Navbar, Nav, Container, Modal } from 'react-bootstrap';
import { isMobile } from "react-device-detect";

export default function Home () {

  const [controlledSwiper, setControlledSwiper] = useState(null);
  const [mainSwiper, setMainSwiper] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showNav, setShowNav] = useState(false);
  const [loadCount, setLoadCount] = useState(0);
  const goToSection = (section) => {
    mainSwiper.slideTo(section);
    setShowNav(false);
  }
  const RenderVideo = (props) => {
    const vidSrc = '/videos/' + props.video + '.mp4';
    const vidClass = 'video-'+ props.video;
    return (
      <video
        className={vidClass}
        autoPlay={true}
        controls={false}
        loop
        muted
        playsInline
        src={vidSrc}
        type="video/mp4"/>
    );
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

  return (
    <div className={styles.container}>
      <Head>
        <title>BeatBlox</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar variant="dark" fixed="top" expand="lg" className="py-5 px-5 px-md-0">
        <Container>
          <Navbar.Brand href="#home">
            <img src="/images/logo.svg" alt=""/>
          </Navbar.Brand>
          <Nav className="ms-md-auto my-2 my-lg-0">
            <button className="btn btn-light text-dark rounded-pill d-none d-md-block" href="#" onClick={() => mainSwiper.slideTo(2)}>Early Supporter NFT</button>
            <button className="btn btn-outline-light rounded-pill" onClick={() => setShowNav(prevCheck => !prevCheck)}>menu</button>
          </Nav>
        </Container>
      </Navbar>
      <NavModal
        show={showNav}
        onHide={() => setShowNav(false)}
      />
      <Swiper
        modules={[Pagination, A11y, Mousewheel, Controller]}
        spaceBetween={0}
        slidesPerView={1}
        direction={"vertical"}
        mousewheel={true}
        pagination={{
          type: "progressbar",
        }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => setMainSwiper(swiper)}
        className="main-swiper"
        controller={{ control: controlledSwiper }}
        speed={800}
      >
        <SwiperSlide><About mainSwiper={mainSwiper}/></SwiperSlide>
        <SwiperSlide><Features/></SwiperSlide>
        <SwiperSlide><Minting/></SwiperSlide>
        <SwiperSlide><Roadmap/></SwiperSlide>
        <SwiperSlide><Contact/></SwiperSlide>
        <SwiperSlide><Team/></SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={0}
        effect={"fade"}
        modules={[EffectFade, Controller]}
        className="video-swiper"
        onSwiper={setControlledSwiper}
      >
        <SwiperSlide>
          <RenderVideo video="about"/>
        </SwiperSlide>
        <SwiperSlide>
          <RenderVideo video="features"/>
        </SwiperSlide>
        <SwiperSlide>
          <RenderVideo video={ isMobile ? "early-supporters-mobile" : "early-supporters"}/>
        </SwiperSlide>
        <SwiperSlide>
          <RenderVideo video={ isMobile ? "roadmap-mobile" : "roadmap"}/>
        </SwiperSlide>
        <SwiperSlide>
          <RenderVideo video="contact"/>
        </SwiperSlide>
        <SwiperSlide>
          <RenderVideo video={ isMobile ? "team-mobile" : "team"}/>
        </SwiperSlide>
      </Swiper>
      <div className="bottomNav py-3 px-5 px-md-0 d-none d-md-flex">
        <div className='container d-flex justify-content-between py-5'>
          <div>
            <button className="btn btn-outline-light rounded-pill" onClick={handleShow}>Video</button>
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Body className="p-0">
              <div className="embed-container">
                <iframe src="https://player.vimeo.com/video/652685945?h=0fe6572dd5" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
              </div>
            </Modal.Body>
          </Modal>
          <div>
            <button className="btn btn-outline-light rounded-pill btn-icon btn-music">
              <img src="/images/music.svg"/>
            </button>
            <a href="https://discord.gg/GcQjuUvwbm" target="_blank" rel="noreferrer" className="btn btn-outline-light rounded-pill btn-icon ml-1">
              <img src="/images/discord.svg"/>
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}