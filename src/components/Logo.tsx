'use client'

import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'

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
      {/* Logo gráfico usando la imagen */}
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <Image
          src="/logo.PNG"
          alt="Centro Veterinario Pereyra Logo"
          width={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          height={size === 'sm' ? 32 : size === 'md' ? 48 : 64}
          className="rounded-full shadow-lg"
          priority
        />
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