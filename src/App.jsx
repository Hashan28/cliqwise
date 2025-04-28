import React from 'react'
import Navbar from './components/Navbar'
import WhatappButton from './components/WhatappButton'
import Footer from './components/Footer'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutUsPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import PackagesPage from './pages/PackagesPage'

const App = () => {
  return (
    <div className='relative'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/packages' element={<PackagesPage />} />
      </Routes>
      <Footer />
      <WhatappButton />

    </div>
  )
}

export default App