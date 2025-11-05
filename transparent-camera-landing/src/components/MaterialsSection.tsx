import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Shield, Zap, Gem } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

const MaterialsSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const materials = [
    {
      icon: Shield,
      title: "Alon Frame",
      description: "Aerospace-grade aluminum oxynitride with Mohs hardness 8.5-9, used in fighter jet canopies and space applications.",
      image: "/images/aerospace_aluminum_oxynitride_alon_crystal_structure.jpg"
    },
    {
      icon: Zap,
      title: "Shatterproof Optics",
      description: "Crystalline Alon optics with zero-light-distortion transparency, exceeding military specifications for optical precision.",
      image: "/images/aerospace_aluminum_oxynitride_alon_crystal_structure_diagram.jpg"
    },
    {
      icon: Gem,
      title: "Crystalline Construction",
      description: "Molecular-level transparency with iridescent light refraction, creating a living canvas that captures and reflects light.",
      image: "/images/ALON_microstructure_SEM_fracture_grains.jpg"
    }
  ]

  return (
    <section id="materials" ref={ref} className="py-24 bg-background-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
            Aerospace-Grade Materials
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every component crafted from materials trusted by NASA, military aerospace, and cutting-edge research institutions. 
            This isn't just glass—it's the future of optical engineering.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materials.map((material, index) => {
            const Icon = material.icon
            return (
              <motion.div
                key={material.title}
                initial={{ y: 100, opacity: 0, rotateY: -15 }}
                animate={isInView ? { y: 0, opacity: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{
                  rotateY: 8,
                  rotateX: 4,
                  translateZ: 30,
                  transition: { duration: 0.4, ease: 'easeOut' }
                }}
                className="group relative"
                style={{
                  perspective: '1000px',
                }}
              >
                <div
                  className="p-10 rounded-2xl backdrop-blur-[120px] transition-all duration-400 h-full relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
                  }}
                >
                  {/* Iridescent Border */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-400"
                    style={{
                      background: 'linear-gradient(135deg, rgba(255,182,193,0.3), rgba(173,216,230,0.3), rgba(221,160,221,0.3))',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'xor',
                      WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      WebkitMaskComposite: 'xor',
                      padding: '1px',
                    }}
                  />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-6"
                  >
                    <Icon className="w-12 h-12 text-accent-blue" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold text-text-primary mb-4">
                    {material.title}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed mb-6">
                    {material.description}
                  </p>

                  {/* Material Image */}
                  <div className="relative h-32 rounded-lg overflow-hidden">
                    <img
                      src={getImagePath(material.image)}
                      alt={material.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-400"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-400"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(139,124,246,0.4) 0%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default MaterialsSection