import React from 'react'
import Landing from '../src/Component/Landing'
import Crousel from '../src/Component/Crousel'
import KeyFeature from '../src/Component/KeyFeature'
import Navbar from '../src/Component/Navbar'
import AboutUs from '../src/Component/AboutUs'
import MediaCoverge from '../src/Component/MediaCoverge'
import Location from '../src/Component/Location'
import Footer from '../src/Component/Footer'

const Home = () => {
  return (
    <>
    <Navbar />
      <Landing />
      <Crousel />
      <KeyFeature />
      <AboutUs />
      <MediaCoverge />
      <Location />
      <Footer />
    </>
  )
}

export default Home
