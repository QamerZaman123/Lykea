import React from 'react'
import Hero from '../components/Hero'
import LatestColletion from '../components/LatestColletion'
import BestSeller from '../components/BestSeller'
import OurPolicy from '../components/OurPolicy'
import Newsletterbox from '../components/Newsletterbox'

const Home = () => {
  return (
    <>
      <Hero />
      <LatestColletion />
      <BestSeller/>
      <OurPolicy/>
      <Newsletterbox />
    </>
  )
}

export default Home
