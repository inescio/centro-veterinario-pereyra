import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Centro Veterinario Pereyra - Servicio para mascotas',
  description: 'Medicina veterinaria de calidad. Consulta, cirugía, vacunación y más servicios para tu mascota en Pereyra.',
  keywords: 'veterinaria, mascotas, pereyra, consulta veterinaria, cirugía, vacunación',
  authors: [{ name: 'Centro Veterinario Pereyra' }],
  openGraph: {
    title: 'Centro Veterinario Pereyra',
    description: 'Servicio para mascotas. Medicina veterinaria de calidad.',
    type: 'website',
    locale: 'es_AR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <body className="transition-colors duration-300">
        {children}
      </body>
    </html>
  )
} 