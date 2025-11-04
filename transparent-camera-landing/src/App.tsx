import React from 'react'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import HeroSection from './components/HeroSection'
import MaterialsSection from './components/MaterialsSection'
import StorageSection from './components/StorageSection'
import ComponentsSection from './components/ComponentsSection'
import OpticsSection from './components/OpticsSection'
import SpecsSection from './components/SpecsSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import ParticleBackground from './components/ParticleBackground'

function App() {
  return (
    <div className="relative min-h-screen bg-background-primary overflow-x-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <MaterialsSection />
        <StorageSection />
        <ComponentsSection />
        <OpticsSection />
        <SpecsSection />
        <CTASection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Reduced Motion Fallback handled in CSS */}
    </div>
  )
}

export default App