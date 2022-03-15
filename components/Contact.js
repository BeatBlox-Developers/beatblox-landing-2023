import React, { useState } from 'react';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const data = {
      name,
      email,
      message,
    };
    fetch('/api/contact', {
      method: 'post',
      body: JSON.stringify(data),
    });
    console.log(data);
  };
  return (
    <div className="container h-100 d-flex align-items-center">
      <div className="row px-5 px-md-0 align-items-center align-items-md-start">
        <div className="col-12 col-md-5">
          <h4>
            Complete our survey to gain access to our closed Beta Auction House.
          </h4>
          <p className="mt-4 text-muted">
            We believe it is essential to maintain an open community. That is why we offer the possibility of accessing our closed Beta Auction House one month after its opening with the Early Supporter just by completing the survey below. 
          </p>
          <a href="https://www.surveymonkey.com/r/3DT35YJ" target="_blank" rel="noreferrer" className="btn btn-lg btn-outline-light rounded-pill mt-4">
            Complete Survey
          </a>
        </div>
        <div className="col-12 col-md-3 offset-md-4 pt-5 pt-md-0">
          <h4>
            Contact
          </h4>
          <p className="mt-1 text-muted">
            Send us a message
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Name"
                className="form-control rounded-0 border-0 border-bottom border-white"
                aria-describedby="emailHelp"
                onChange={e => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                placeholder="Email"
                className="form-control rounded-0 border-0 border-bottom border-white"
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                className="form-control rounded-0 border-0 border-bottom border-white"
                onChange={e => setMessage(e.target.value)}
                rows="4"
              />
            </div>
            <button type="submit" className="btn btn-lg btn-outline-light rounded-pill">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact