'use client'

import { useTheme } from '@/contexts/ThemeContext'
import Logo from './Logo'

export default function Hero() {
  const { theme } = useTheme()

  const scrollToContact = () => {
    const element = document.getElementById('contacto')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const bgGradient = theme === 'dark' 
    ? 'bg-gradient-to-br from-dark-900 via-dark-800 to-dark-700'
    : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800'
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
  const textMuted = theme === 'dark' ? 'text-gray-400' : 'text-gray-500'

  return (
    <section className={`min-h-screen flex items-center justify-center relative overflow-hidden ${bgGradient} transition-colors duration-300`}>
      {/* Elementos decorativos */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-blue/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo principal */}
        <div className="mb-8 flex justify-center">
          <Logo size="lg" showText={true} />
        </div>

        {/* Título principal */}
        <h1 className={`text-4xl md:text-6xl font-bold mb-6 ${textColor} transition-colors duration-300`}>
          Centro Veterinario{' '}
          <span className="bg-gradient-to-r from-primary-green to-primary-blue bg-clip-text text-transparent">
            Pereyra
          </span>
        </h1>

        {/* Subtítulo */}
        <p className={`text-xl md:text-2xl mb-8 ${textSecondary} transition-colors duration-300`}>
          Servicio para mascotas y ganado. Medicina veterinaria.
        </p>

        {/* Descripción */}
        <p className={`text-lg mb-12 max-w-2xl mx-auto ${textMuted} transition-colors duration-300`}>
          Brindamos atención veterinaria integral de calidad para tu mascota. 
          Consulta, cirugía, vacunación y más servicios con el cuidado y profesionalismo que tu compañero merece.
        </p>

        {/* Botones de acción */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="btn-primary text-lg px-10 py-4"
          >
            Agenda tu Cita
          </button>
          <button
            onClick={() => {
              const element = document.getElementById('servicios')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-secondary text-lg px-10 py-4"
          >
            Conoce Nuestros Servicios
          </button>
        </div>

        {/* Información de contacto rápida */}
        <div className={`mt-12 flex flex-col sm:flex-row justify-center items-center gap-6 ${textMuted} transition-colors duration-300`}>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-primary-green" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span className={`font-semibold ${textColor} transition-colors duration-300`}>+54 9 3804 38-5374</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-primary-blue" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            <span>Lunes a Sábado 9:00 - 18:00</span>
          </div>
        </div>
      </div>
    </section>
  )
} 
