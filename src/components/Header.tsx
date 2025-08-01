'use client'

import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import Logo from './Logo'
import { useTheme } from '@/contexts/ThemeContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800'
  const bgColor = theme === 'dark' ? 'bg-dark-900/95' : 'bg-white/95'
  const borderColor = theme === 'dark' ? 'border-dark-700' : 'border-gray-200'
  const navTextColor = theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${bgColor} backdrop-blur-sm border-b ${borderColor} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Logo size="sm" showText={false} />
            <span className={`font-semibold text-lg ${textColor} transition-colors duration-300`}>
              Centro Veterinario Pereyra
            </span>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            <button
              onClick={() => scrollToSection('servicios')}
              className={`transition-colors duration-200 ${navTextColor}`}
            >
              Servicios
            </button>
            <button
              onClick={() => scrollToSection('nosotros')}
              className={`transition-colors duration-200 ${navTextColor}`}
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection('testimonios')}
              className={`transition-colors duration-200 ${navTextColor}`}
            >
              Testimonios
            </button>
            <button
              onClick={() => scrollToSection('contacto')}
              className={`transition-colors duration-200 ${navTextColor}`}
            >
              Contacto
            </button>
            
            {/* Botón de cambio de tema */}
            <div className="ml-4">
              <ThemeToggle />
            </div>
          </nav>

          {/* Botón de menú móvil */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors duration-300 ${textColor}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className={`md:hidden ${theme === 'dark' ? 'bg-dark-800 border-dark-700' : 'bg-gray-50 border-gray-200'} border-t transition-colors duration-300`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('servicios')}
                className={`block w-full text-left px-3 py-2 transition-colors duration-200 rounded-md ${navTextColor} ${theme === 'dark' ? 'hover:bg-dark-700' : 'hover:bg-gray-100'}`}
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('nosotros')}
                className={`block w-full text-left px-3 py-2 transition-colors duration-200 rounded-md ${navTextColor} ${theme === 'dark' ? 'hover:bg-dark-700' : 'hover:bg-gray-100'}`}
              >
                Nosotros
              </button>
              <button
                onClick={() => scrollToSection('testimonios')}
                className={`block w-full text-left px-3 py-2 transition-colors duration-200 rounded-md ${navTextColor} ${theme === 'dark' ? 'hover:bg-dark-700' : 'hover:bg-gray-100'}`}
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className={`block w-full text-left px-3 py-2 transition-colors duration-200 rounded-md ${navTextColor} ${theme === 'dark' ? 'hover:bg-dark-700' : 'hover:bg-gray-100'}`}
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
} 