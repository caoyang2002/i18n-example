'use client'
import React, { useState } from 'react'

const Header: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo or site title */}
          <div className="text-2xl font-bold">My Site</div>
          <div className="hidden md:block">
            {/* 鼠标悬浮展开的菜单项 */}
            <ul className="flex items-center">
              <li className="px-4 py-2">Home</li>
              <li className="px-4 py-2">About</li>
              <li className="px-4 py-2">Services</li>
              <li className="px-4 py-2">Contact</li>
            </ul>
          </div>
          <div className="md:hidden">
            {/* 移动端菜单按钮 */}
            <button
              className="text-gray-800 focus:outline-none"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? '✕' : '☰'}
            </button>
            {/* 鼠标悬浮展开的菜单项 */}
            {isHovered && (
              <div className="absolute right-0 z-50 bg-white p-4">
                <ul className="list-none">
                  <li className="py-1">Home</li>
                  <li className="py-1">About</li>
                  <li className="py-1">Services</li>
                  <li className="py-1">Contact</li>
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
