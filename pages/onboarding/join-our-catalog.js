import Head from "next/head";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { joinOurCatalogData } from '../../data/onboarding';
import { Navigation, Switcher } from './common';

export default function Onboarding() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data)
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
      }
    });
  }
  const benefits = joinOurCatalogData.benefits.map((benefit) => {
    return (
      <p key={benefit.key}>{benefit.value}</p>
    );
  });
  const fields = joinOurCatalogData.fields.map((item) => {
    return (
      <div key={item.name} className="mb-3">
        <h4>{item.label}</h4>
        <input className="form-control rounded-0" {...register(`${item.name}`)} />    
      </div> 
    );
  });

  return (
    <div>
      <Head>
        <title>BeatBlox - Onboarding</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <section className="section-video d-flex align-items-center">
        <video
          autoPlay={true}
          controls={false}
          loop
          muted
          src={joinOurCatalogData.video}
          type="video/mp4"
          className="d-none d-md-block"
        ></video>
        <div className="container d-flex align-items-center py-5">
          <div className="d-flex flex-column">
            <div className="row mb-5 d-block d-md-none">
              <video
                autoPlay={true}
                controls={false}
                loop
                muted
                src={joinOurCatalogData.video_mobile}
                type="video/mp4"
              ></video>
            </div>
            <Switcher />
            <div className="row px-5 px-md-0 mt-5">
              <div className="col-12">
                <h1>{joinOurCatalogData.title}</h1>
                <h3 className="text-uppercase">{joinOurCatalogData.subtitle}</h3>
                <h4 className="mt-5">{joinOurCatalogData.description}</h4>
                <button className="btn btn-outline-light rounded-pill mt-5">
                  <h4 className="m-0 p-1">Explore the Benefits</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pt-5">
        <div className="container not-fullscreen py-5 mt-5">
          <Switcher />
          <div className="row pb-5 my-5 px-5 px-md-0">
            <div className="col-12 col-md-6 pt-3 text-black py-5 mb-5">
              <button className="btn btn-dark rounded-pill mb-5">
                <h4 className="m-0 p-1">BENEFITS</h4>
              </button>
              {benefits}
            </div>
            <div className="col-12 col-md-6 pt-3 text-center">
              <img
                className="img-fluid"
                src={joinOurCatalogData.image}
              ></img>
              <button className="btn btn-dark rounded-pill mt-5">
                <h4 className="m-0 p-1">Be part now</h4>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section-video mb-5">
        <video
          autoPlay={true}
          controls={false}
          loop
          muted
          src="/videos/onboarding-form.mp4"
          type="video/mp4"
          className="d-none d-md-block"
        ></video>
        <div className="container not-fullscreen py-5">
          <Switcher />
          <div className="row px-5 px-md-0 py-5">
            <div className="col-12 col-md-4 pt-3">
              <form onSubmit={handleSubmit(onSubmit)}>
                {fields}
                {errors.exampleRequired && <span>This field is required</span>}
                <input className="btn btn-lg btn-light mt-3 rounded-pill" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-black py-5"></div>
    </div>
  );
}
