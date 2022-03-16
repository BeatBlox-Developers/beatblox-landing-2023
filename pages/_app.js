import '../styles/globals.css'
import '../styles/custom.scss'
import React, { useState, useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
