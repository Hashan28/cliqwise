import React from 'react'
import whatapp from '../assets/whatapp.gif'

const WhatappButton = () => {
  return (
    <a
    href="https://wa.me/+94757695714" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-5 right-5 p-4 cursor-pointer rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center"
    >
        <img src={whatapp} className='w-12 h-12' alt="" />
    </a>
  )
}

export default WhatappButton