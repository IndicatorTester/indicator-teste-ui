import React from 'react'
import './globals.css'
import 'tailwindcss/tailwind.css'
import LandingPage from './landingPage';

const Home = () => {
  return (
    <>
      <div className="h-screen w-screen snap-y snap-mandatory scroll-smooth overflow-y-auto">
        <LandingPage />
      </div>
    </>
  )
}

export default Home