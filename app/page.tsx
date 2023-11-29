import React from 'react'
import './globals.css'
import 'tailwindcss/tailwind.css'
import LandingPage from './landingPage';
import Header from './header';

const App = () => {
  return (
    <>
      <Header />
      <div className="h-screen w-screen snap-y snap-mandatory scroll-smooth overflow-y-auto">
        <LandingPage />
        <LandingPage />
      </div>
    </>
  )
}

export default App