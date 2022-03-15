import React from 'react';

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
              <p className="text-muted text-small">
                Founder, Electrical Enginee
                & Music Producer
              </p>
            </div>
            <div className="row">
              <h4 className="text-uppercase">
                Walter Nogara
              </h4>
              <p className="text-muted text-small">
                Head of Business Development
                Finance & Legal affairs
              </p>
            </div>
            <div className="row">
              <h4 className="text-uppercase">
                Emanuel Dobao
              </h4>
              <p className="text-muted text-small">
                CTO, Interactive Devoloper
                Musician & Event Producer
              </p>
            </div>
            <div className="row">
              <h4 className="text-uppercase">
                Brian Rial
              </h4>
              <p className="text-muted text-small">
                Co founder, Head of Onboarding
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
              
              <p className="m-0 mt-1">TIMOTEO LACROZE  <span className="text-muted text-small">Founder & Director</span></p>
              <p className="m-0 mt-1">DIEGO LISTA  <span className="text-muted text-small">Visual Artist & 3D Modeling</span></p>
              <p className="m-0 mt-1">JUAN I. SCHELLER  <span className="text-muted text-small">Art Director & PM</span></p>
              <p className="m-0 mt-1">LUCILA SUTTON  <span className="text-muted text-small">Graphic Designer</span></p>
              <p className="m-0 mt-1">VALERIA QUIROS  <span className="text-muted text-small">Strategist</span></p>
              <p className="m-0 mt-1">MANUEL BELEN  <span className="text-muted text-small">RRSS Specialist</span></p>
              <p className="m-0 mt-1">LEONARDO LAURENZA <span className="text-muted text-small">Data Specialist</span></p>
            </div>
          </div>
        </div>
        <div className="row pt-5 px-5 px-md-0 d-none d-md-flex">
          <div className='col-md-4'>
            <div className='row'>
              <div className='col-6'>
                <p>
                  CONTACT<br/>
                  hello@beatblox.org
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
            <a href="https://www.instagram.com/thebeatblox/" target="_blank" rel="noreferrer">Instagram</a><br/>
            <a href="https://twitter.com/The_Beatblox" target="_blank" rel="noreferrer">Twitter</a><br/>
            <a href="https://discord.gg/fQR74Z8S" target="_blank" rel="noreferrer">Discord</a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Team