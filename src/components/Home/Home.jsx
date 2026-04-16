import React from 'react'
import './Home.css'
import Heading from '../Heading/Heading'
import Feature from '../Feature/Feature'
import LatestNews from '../LatestNews/LatestNews'
import BrandLogo from '../LatestNews/BrandLogo'

function Home() {
  return (
    <>
    <div className='Home container'>
      <Heading/>
      <Feature/>
      <LatestNews/>
      <BrandLogo/>
    </div>
    </>
  )
}

export default Home
