'use client';

import React from 'react'
import './globals.css'
import 'tailwindcss/tailwind.css'
import Header from './header';
import StartButton from './StartButton';

const App = () => {
  return (
    <>
      <StartButton />
      <Header />
    </>
  )
}

export default App