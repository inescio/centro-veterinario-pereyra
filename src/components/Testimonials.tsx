'use client'

import { useTheme } from '@/contexts/ThemeContext'

export default function Testimonials() {
  const { theme } = useTheme()

  const testimonials = [
    {
      name: 'María González',
      pet: 'Luna',
      rating: 5,
      comment: 'Excelente atención para mi gatita Luna. El Dr. Pereyra es muy profesional y cariñoso con los animales. Definitivamente los recomiendo.',
      avatar: '🐱'
    },
    {
      name: 'Carlos Rodríguez',
      pet: 'Max',
      rating: 5,
      comment: 'Llevé a mi perro Max para una cirugía y todo salió perfecto. El equipo es muy profesional y las instalaciones están impecables.',
      avatar: '🐕'
    },
    {
      name: 'Ana Martínez',
      pet: 'Rocky',
      rating: 5,
      comment: 'Gracias al Centro Veterinario Pereyra, mi Rocky se recuperó completamente. El seguimiento postoperatorio fue excepcional.',
      avatar: '🐕'
    }
  ]

  const bgColor = theme === 'dark' ? 'bg-dark-900' : 'bg-gray-50'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800'
  const textSecondary = theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
  const textMuted = theme === 'dark' ? 'text-gray-400' : 'text-gray-500'

  return (
    <section id="testimonios" className={`section-padding ${bgColor} transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto">
        {/* Título de la sección */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor} transition-colors duration-300`}>
            Nuestros Clientes Opinan
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${textSecondary} transition-colors duration-300`}>
            La satisfacción de nuestros clientes y sus mascotas es nuestra mayor recompensa
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card group hover:scale-105 transition-all duration-300">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Comentario */}
              <p className={`text-lg leading-relaxed mb-6 italic ${textSecondary} transition-colors duration-300`}>
                "{testimonial.comment}"
              </p>

              {/* Cliente */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-green to-primary-blue rounded-full flex items-center justify-center text-white text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className={`font-semibold ${textColor} transition-colors duration-300`}>
                    {testimonial.name}
                  </p>
                  <p className={`text-sm ${textMuted} transition-colors duration-300`}>
                    Dueño de {testimonial.pet}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className={`text-lg mb-6 ${textSecondary} transition-colors duration-300`}>
            ¿Quieres compartir tu experiencia con nosotros?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contacto')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary text-lg px-10 py-4"
          >
            Deja tu Testimonio
          </button>
        </div>
      </div>
    </section>
  )
} 