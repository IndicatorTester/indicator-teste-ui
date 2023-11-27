'use client';

import React from 'react'
import './globals.css'
import 'tailwindcss/tailwind.css'

const App = () => {
  return (
    <>
      <div>
        <p className="text-8xl font-sans font-bold leading-tight" >
          Signal Trading
          <br/>
          <span className="inline-grid">
            <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text blur-xl opacity-90">
              Indicators
            </span>
            <span className="relative col-start-1 row-start-1 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
              Indicators
            </span>
          </span>
          <br/>
          And Beyond
        </p>
      </div>
    </>
  )
}

export default App