'use client'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Site. All rights reserved.</p>
        {/* 所有菜单项 */}
        <ul className="list-none flex justify-center">
          <li className="px-4">Home</li>
          <li className="px-4">About</li>
          <li className="px-4">Services</li>
          <li className="px-4">Contact</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
