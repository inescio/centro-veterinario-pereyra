import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import AboutUs from '@/components/AboutUs'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ThemeWrapper from '@/components/ThemeWrapper'
import { ThemeProvider } from '@/contexts/ThemeContext'

export default function Home() {
  return (
    <ThemeProvider>
      <ThemeWrapper>
        <main className="min-h-screen bg-dark-900 text-white">
          <Header />
          <Hero />
          <Services />
          <AboutUs />
          <Testimonials />
          <Contact />
          <Footer />
        </main>
      </ThemeWrapper>
    </ThemeProvider>
  )
} 