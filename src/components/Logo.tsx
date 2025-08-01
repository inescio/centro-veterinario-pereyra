'use client'

import { useTheme } from '@/contexts/ThemeContext'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const { theme } = useTheme()
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  }

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800'

  return (
    <div className="flex flex-col items-center">
      {/* Logo gráfico */}
      <div className={`${sizeClasses[size]} relative bg-white rounded-full flex items-center justify-center shadow-lg`}>
        {/* Cruz verde y azul */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-primary-green transform -translate-y-1/2"></div>
        <div className="absolute left-1/2 top-0 w-1 h-full bg-primary-blue transform -translate-x-1/2"></div>
        
        {/* Silueta de perro (blanca) */}
        <div className="absolute top-1 left-1 w-3 h-3 bg-white rounded-full border-2 border-primary-green"></div>
        
        {/* Silueta de gato (blanca) */}
        <div className="absolute bottom-1 right-1 w-3 h-3 bg-white rounded-full border-2 border-primary-blue"></div>
      </div>

      {/* Texto del logo */}
      {showText && (
        <div className="text-center mt-2">
          <div className={`text-xs font-medium ${textColor} mb-1`}>
            CONFÍA EN LOS MEJORES
          </div>
          <div className={`text-sm font-semibold ${textColor}`}>
            Centro Veterinario Pereyra
          </div>
          <div className={`text-xs ${textColor}`}>
            CLÍNICA VETERINARIA
          </div>
        </div>
      )}
    </div>
  )
} 