import React from "react";

const Contact = () => {
  return (
    <div className="container h-100 d-flex align-items-center">
      <div className="row px-5 px-md-0 align-items-center align-items-md-start">
        <div className="col-12 col-md-5">
          <h4>
            Complete our survey to gain access to our closed Beta Auction House.
          </h4>
          <p className="mt-4 text-muted">
            We believe it is essential to open our community to all those interested. This is why we offer the possibility  of participating in our closed Beta Auction House one month after its opening by just completing the survey below.
          </p>
          <button className="btn btn-lg btn-outline-light rounded-pill mt-4">
            Mint Early Supporter
          </button>
        </div>
        <div className="col-12 col-md-3 offset-md-4 pt-5 pt-md-0">
          <h4>
            Contact
          </h4>
          <p className="mt-1 text-muted">
            Send us a message
          </p>
          <form>
            <div className="mb-3">
              <input type="text" placeholder="Name" className="form-control rounded-0 border-0 border-bottom border-white" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
              <input type="email" placeholder="Email" className="form-control rounded-0 border-0 border-bottom border-white" id="exampleInputPassword1"/>
            </div>
            <div className="mb-3">
              <textarea placeholder="Message" className="form-control rounded-0 border-0 border-bottom border-white" id="exampleInputPassword1"/>
            </div>
            <button type="submit" className="btn btn-outline-light rounded-pill">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact