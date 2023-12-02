import React from 'react'
import LandingPage from './landing-page'
import ChartPage from './chart-page'
import '../globals.css'
import 'tailwindcss/tailwind.css'

const HomePage = () => {
  return (
    <>
      <div className="h-screen w-screen snap-y snap-mandatory scroll-smooth overflow-y-auto">
        <LandingPage />
        <ChartPage />
      </div>
    </>
  )
}

export default HomePage