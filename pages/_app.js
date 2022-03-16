import '../styles/globals.css'
import '../styles/custom.scss'
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() =>{
    setTimeout(() => setLoading(false), 3000);
  })

  if (!loading) {
    return (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
  else {
    return (
      <React.Fragment>
        <div className="loading h-100 w-100 d-flex justify-content-center">
          <video
            autoPlay={true}
            controls={false}
            loop
            muted
            src="/videos/loading.webm"
            type="video/webm">
          </video>
        </div>
      </React.Fragment>
    )
  }
}

export default MyApp
