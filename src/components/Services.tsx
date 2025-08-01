'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function Services() {
  const { theme } = useTheme()

  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Consulta Veterinaria',
      description: 'Atención médica integral para tu mascota con diagnóstico preciso y tratamiento personalizado.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Cirugía Veterinaria',
      description: 'Procedimientos quirúrgicos seguros con tecnología avanzada y cuidados postoperatorios.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Vacunación',
      description: 'Programa completo de vacunación para proteger a tu mascota de enfermedades prevenibles.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Laboratorio',
      description: 'Análisis clínicos completos para diagnóstico preciso y seguimiento de tratamientos.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Emergencias 24/7',
      description: 'Atención de urgencias veterinarias las 24 horas para casos críticos.'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Medicina Preventiva',
      description: 'Programas de prevención y bienestar para mantener a tu mascota saludable.'
    }
  ]

  const bgColor = theme === 'dark' ? 'bg-dark-900' : 'bg-gray-50'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800'
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'

  return (
    <section id="servicios" className={`section-padding ${bgColor} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor} transition-colors duration-300`}>
            Nuestros Servicios
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${textSecondary} transition-colors duration-300`}>
            Ofrecemos una amplia gama de servicios veterinarios para cuidar de tu mascota con profesionalismo y dedicación
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card group hover:scale-105 transition-all duration-300">
              {/* Icono */}
              <div className="w-16 h-16 bg-gradient-to-r from-primary-green to-primary-blue rounded-full flex items-center justify-center text-white mb-6 group-hover:shadow-lg transition-all duration-300">
                {service.icon}
              </div>

              {/* Contenido */}
              <h3 className={`text-xl font-semibold mb-4 ${textColor} transition-colors duration-300`}>
                {service.title}
              </h3>
              <p className={`leading-relaxed ${textSecondary} transition-colors duration-300`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const element = document.getElementById('contacto')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary text-lg px-10 py-4"
          >
            Agenda tu Cita
          </button>
        </div>
      </div>
    </section>
  )
} 