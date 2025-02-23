import React from 'react'
import Landing from '../src/Component/Landing'
import Crousel from '../src/Component/Crousel'
import KeyFeature from '../src/Component/KeyFeature'
import AboutUs from '../src/Component/AboutUs'
import MediaCoverge from '../src/Component/MediaCoverge'
import Location from '../src/Component/Location'
import Products from '../src/Component/Products'

const Home = () => {
  return (
    <>
    
      <Landing /> 
        <Crousel /> 
       <Products />
      <KeyFeature />
      <AboutUs /> 
      <MediaCoverge />
       <Location />
    </>
  )
}

export default Home
