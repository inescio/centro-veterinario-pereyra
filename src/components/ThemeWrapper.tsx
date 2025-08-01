'use client'

import { useTheme } from '@/contexts/ThemeContext'
import { useEffect } from 'react'

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const { theme } = useTheme()

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('light', 'dark')
    html.classList.add(theme)
  }, [theme])

  return <>{children}</>
} 