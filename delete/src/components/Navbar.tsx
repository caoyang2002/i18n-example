'use client'
import React, { useState } from 'react'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-blue-700 text-white p-2 flex items-center">
      <div className="md:w-2/3">
        <h1 className="text-xl font-bold">My App</h1>
      </div>
      <div className="md:hidden">
        <button
          className="text-gray-500 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>
      <div
        className={`md:flex md:items-center md:justify-between ${
          !isOpen ? 'hidden' : ''
        }`}
      >
        <nav>
          <ul className="flex items-center">
            <li className="px-4 py-2">Home</li>
            <li className="px-4 py-2">About</li>
            <li className="px-4 py-2">Services</li>
            <li className="px-4 py-2">Contact</li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
