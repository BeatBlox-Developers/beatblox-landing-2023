import React from 'react';
import { Container, Col, Row, Button, Card } from 'react-bootstrap';

const Team = () => {
  return (
    <div className="container h-100 d-flex align-items-center">
      <div className='w-100'>
        <div className="row d-flex align-items-start px-5 px-md-0 w-100">
          <div className="col-md-4">
            <div className="border-top border-white pb-3 w-90"></div>
            <div className="row mt-md-3">
              <h4 className="text-uppercase">
                Emiliano Zapata
              </h4>
              <p className="mt-1 text-muted text-small">
                Founder, Electrical Engineer<br/>
                & Music Producer
              </p>
            </div>
            <div className="row">
              <h4 className="text-uppercase">
                Walter Nogara
              </h4>
              <p className="mt-1 text-muted text-small">
                Head of Business Development,<br/>
                Finance & Legal affairs
              </p>
            </div>
            <div className="row">
              <h4 className="text-uppercase">
                Emanuel Dobao
              </h4>
              <p className="mt-1 text-muted text-small">
                Interactive Devoloper,<br/>
                Musician & Event Producer
              </p>
            </div>
            <div className="row">
              <h4 className="text-uppercase">
                Brian Rial
              </h4>
              <p className="mt-1 text-muted text-small">
                Co founder, Head of Onboarding <br/>
                & Artist recruitment
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="border-top border-white pb-3 w-90"></div>
            <div className="row mt-md-3">
              <h4 className="text-uppercase">
                Uno Mas Uno
              </h4>
              <p className="mt-1">
                TIMOTEO LACROZE  <span className="text-muted text-small">Founder & Director</span><br />
                DIEGO LISTA  <span className="text-muted text-small">Visual Artist & 3D Modeling</span><br />
                JUAN I. SCHELLER  <span className="text-muted text-small">Art Director & PM</span><br />
                LUCILA SUTTON  <span className="text-muted text-small">Graphic Designer</span><br />
                VALERIA QUIROS  <span className="text-muted text-small">Strategist</span><br />
                MANUEL BELEN  <span className="text-muted text-small">RRSS Specialist</span><br />
                LEONARDO LAURENZA Data <span className="text-muted text-small">Specialist</span>
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5 px-5 px-md-0">
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-6'>
                <p>
                  CONTACT<br/>
                  info@beatblox.org
                </p>
              </div>
              <div className='col-6'>
                <a>FAQS</a><br/>
                <a>Terms & Conditions</a><br/>
                <a>Privacy Policy</a>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <a>Instagram</a><br/>
            <a>Youtube</a><br/>
            <a>Twitter</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team