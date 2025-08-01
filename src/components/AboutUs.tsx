'use client'

import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'

export default function AboutUs() {
  const { theme } = useTheme()

  const bgColor = theme === 'dark' ? 'bg-dark-900' : 'bg-gray-50'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800'
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
  const textMuted = theme === 'dark' ? 'text-gray-400' : 'text-gray-500'

  return (
    <section id="nosotros" className={`section-padding ${bgColor} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor} transition-colors duration-300`}>
            ¿Quiénes Somos?
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${textSecondary} transition-colors duration-300`}>
            Más de 15 años cuidando de las mascotas de La Rioja con profesionalismo y dedicación
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenido */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${textColor} transition-colors duration-300`}>
                Nuestra Historia
              </h3>
              <p className={`leading-relaxed mb-6 ${textSecondary} transition-colors duration-300`}>
                El Centro Veterinario Pereyra nació en 2008 con la misión de brindar atención veterinaria 
                de calidad a las mascotas de La Rioja. Desde entonces, hemos crecido para convertirnos en 
                una de las clínicas veterinarias más confiables de la región.
              </p>
              <p className={`leading-relaxed ${textSecondary} transition-colors duration-300`}>
                Nuestro equipo de profesionales altamente capacitados trabaja con pasión y dedicación 
                para asegurar que cada mascota reciba el mejor cuidado posible.
              </p>
            </div>

            <div>
              <h3 className={`text-2xl font-semibold mb-4 ${textColor} transition-colors duration-300`}>
                Nuestra Misión
              </h3>
              <p className={`leading-relaxed mb-6 ${textSecondary} transition-colors duration-300`}>
                Proporcionar atención veterinaria integral y personalizada, utilizando tecnología avanzada 
                y tratamientos innovadores para mejorar la calidad de vida de las mascotas y sus familias.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green mb-2">15+</div>
                <p className={`text-sm ${textMuted} transition-colors duration-300`}>Años de Experiencia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">5000+</div>
                <p className={`text-sm ${textMuted} transition-colors duration-300`}>Mascotas Atendidas</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-green mb-2">24/7</div>
                <p className={`text-sm ${textMuted} transition-colors duration-300`}>Emergencias</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-blue mb-2">100%</div>
                <p className={`text-sm ${textMuted} transition-colors duration-300`}>Compromiso</p>
              </div>
            </div>
          </div>

          {/* Logo grande centrado */}
          <div className="flex justify-center items-center">
            <Image
              src="/logo.PNG"
              alt="Logo Centro Veterinario Pereyra"
              width={260}
              height={260}
              className="object-contain shadow-2xl rounded-full"
              priority
            />
          </div>
        </div>

        {/* Valores */}
        <div className="mt-16">
          <h3 className={`text-2xl font-semibold text-center mb-8 ${textColor} transition-colors duration-300`}>
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-green to-primary-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${textColor} transition-colors duration-300`}>
                Excelencia
              </h4>
              <p className={`text-sm ${textSecondary} transition-colors duration-300`}>
                Mantenemos los más altos estándares de calidad en todos nuestros servicios
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-green to-primary-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${textColor} transition-colors duration-300`}>
                Confianza
              </h4>
              <p className={`text-sm ${textSecondary} transition-colors duration-300`}>
                Construimos relaciones duraderas basadas en la confianza y transparencia
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-primary-green to-primary-blue rounded-full flex items-center justify-center text-white mx-auto mb-4">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h4 className={`text-lg font-semibold mb-2 ${textColor} transition-colors duration-300`}>
                Innovación
              </h4>
              <p className={`text-sm ${textSecondary} transition-colors duration-300`}>
                Utilizamos tecnología avanzada y técnicas modernas para el mejor cuidado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 