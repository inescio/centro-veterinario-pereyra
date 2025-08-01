'use client'

import { useTheme } from '@/contexts/ThemeContext'
import Image from 'next/image'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg'
  showText?: boolean
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const { theme } = useTheme()
  
  const sizePx = size === 'sm' ? 64 : size === 'md' ? 120 : 180
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800'

  return (
    <div className="flex flex-col items-center">
      <div className={`relative flex items-center justify-center`} style={{ width: sizePx, height: sizePx }}>
        <Image
          src="/logo.PNG"
          alt="Centro Veterinario Pereyra Logo"
          width={sizePx}
          height={sizePx}
          className="object-contain shadow-lg rounded-full"
          priority
        />
      </div>
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