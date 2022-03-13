import Head from 'next/head'
import { Fragment } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <link
          rel="icon"
          href="https://www.google.co.uk/images/branding/googleg/1x/googleg_standard_color_128dp.png"
        ></link>
      </Head>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
