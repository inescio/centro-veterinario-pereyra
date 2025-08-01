'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  const bg = theme === 'dark' ? 'bg-gray-600' : 'bg-gray-200'
  const slider = theme === 'dark' ? 'bg-white' : 'bg-gray-700'
  const ringOffset = theme === 'dark' ? 'focus:ring-offset-dark-900' : 'focus:ring-offset-white'

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-12 h-6 ${bg} rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-green ${ringOffset}`}
      aria-label={`Cambiar a modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}
    >
      {/* Slider */}
      <div
        className={`absolute top-0.5 left-0.5 w-5 h-5 ${slider} rounded-full transition-transform duration-300 transform ${
          theme === 'light' ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      {/* Iconos */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        {/* Sol */}
        <svg
          className={`w-3 h-3 transition-colors duration-300 ${theme === 'light' ? 'text-yellow-500' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
            clipRule="evenodd"
          />
        </svg>
        {/* Luna */}
        <svg
          className={`w-3 h-3 transition-colors duration-300 ${theme === 'dark' ? 'text-blue-400' : 'text-gray-500'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      </div>
    </button>
  )
} 