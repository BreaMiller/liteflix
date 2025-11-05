import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Triangle, Lightbulb, Sparkles } from 'lucide-react'
import { getImagePath } from '@/lib/utils'

const OpticsSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const parallaxLayers = [
    {
      speed: 1.0,
      content: (
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={getImagePath('/images/optic-lens-prismatic.png')}
            alt="Prismatic Optic Lens with Exceptional Transparency"
            className="w-full h-full object-contain rounded-2xl"
          />
        </div>
      )
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-background-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[600px]">
          {/* Glass Content Panel */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-10 rounded-2xl backdrop-blur-[60px] border border-glass-border bg-glass-standard relative overflow-hidden">
              {/* Iridescent Border */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,182,193,0.3), rgba(173,216,230,0.3), rgba(221,160,221,0.3))',
                  mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  maskComposite: 'xor',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  padding: '1px',
                }}
              />

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="mb-6"
                >
                  <Triangle className="w-12 h-12 text-accent-blue" />
                </motion.div>

                <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6">
                  Iridescent Optics
                  <span className="block text-accent-blue text-lg font-medium mt-2">
                    Chromatic Excellence
                  </span>
                </h2>

                <p className="text-text-secondary leading-relaxed mb-8">
                  Our crystalline Alon optics don't just capture light—they dance with it. 
                  Every ray of light is split and refracted into its constituent colors, 
                  creating images that transcend traditional photography.
                </p>

                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <Sparkles className="w-6 h-6 text-accent-blue mt-1" />
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">Prismatic Dispersion</h4>
                      <p className="text-text-secondary text-sm">
                        Natural rainbow effects create ethereal, artistic imagery
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <Lightbulb className="w-6 h-6 text-accent-blue mt-1" />
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">Advanced Chromatic Correction</h4>
                      <p className="text-text-secondary text-sm">
                        Eliminates color fringing while maintaining the beautiful dispersion effect
                      </p>
                    </div>
                  </motion.div>

                  <motion.div 
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4"
                  >
                    <Triangle className="w-6 h-6 text-accent-blue mt-1" />
                    <div>
                      <h4 className="text-text-primary font-semibold mb-1">Variable Dispersion Control</h4>
                      <p className="text-text-secondary text-sm">
                        Adjustable prismatic effects for creative and technical applications
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 w-full px-6 py-4 bg-accent-primary text-white font-semibold rounded-xl shadow-button-primary"
                >
                  Explore Optical Science
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Parallax Image Section */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 relative h-[40.8rem]"
          >
            {/* Parallax Layers */}
            {parallaxLayers.map((layer, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 parallax-layer"
                style={{
                  transform: isInView 
                    ? `translateY(${window.scrollY * layer.speed * 0.05}px)` 
                    : 'translateY(0)',
                  zIndex: index + 1,
                }}
              >
                {layer.content}
              </motion.div>
            ))}

            {/* Animated Light Rays */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 bg-gradient-to-b from-transparent via-white to-transparent opacity-30"
                style={{
                  left: `${25 + i * 20}%`,
                  top: '0',
                  height: '100%',
                  transform: 'rotate(15deg)',
                }}
                animate={{
                  opacity: [0.1, 0.6, 0.1],
                  scaleX: [0.5, 1.5, 0.5],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: 9999,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OpticsSection