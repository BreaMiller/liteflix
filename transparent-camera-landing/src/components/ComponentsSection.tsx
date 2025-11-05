import React, { useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Camera, Layers, Zap, Eye } from 'lucide-react'

const ComponentsSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 300 }
  
  const mouseX = useSpring(rotateX, springConfig)
  const mouseY = useSpring(rotateY, springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = (e.clientX - centerX) * 0.1
    const mouseY = (e.clientY - centerY) * 0.1
    rotateX.set(mouseY)
    rotateY.set(mouseX)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  const components = [
    { name: "Lens Array", description: "Multi-element crystalline optics", icon: Eye },
    { name: "Sensor Array", description: "Ultra-high resolution imaging", icon: Camera },
    { name: "Storage Matrix", description: "5D optical storage core", icon: Layers },
    { name: "Processing Unit", description: "Quantum-enhanced computation", icon: Zap }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-depth relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
            Internal Components
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            See the engineering masterpiece within. Every component visible through our revolutionary transparency, 
            showcasing the precision and innovation that makes this camera extraordinary.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Rotating Camera */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
          >
            <div className="relative w-full h-96 flex items-center justify-center">
              {/* Prism Camera Image */}
              <motion.div
                style={{
                  rotateX,
                  rotateY,
                  transformPerspective: '1000px',
                }}
                className="relative w-[63.36rem] h-[47.52rem]"
              >
                <img
                  src="/liteflix/images/transparent-camera-internal-components.png"
                  alt="Interior view of transparent camera showing internal components"
                  className="w-full h-full object-contain drop-shadow-2xl"
                  style={{
                    filter: 'drop-shadow(0 8px 32px rgba(255, 255, 255, 0.4))',
                  }}
                />

                {/* Component Hotspots */}
                {components.map((component, index) => (
                  <motion.div
                    key={component.name}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.5 + index * 0.1 }}
                    className="absolute w-4 h-4 bg-accent-blue rounded-full cursor-pointer"
                    style={{
                      left: `${20 + index * 15}%`,
                      top: `${30 + (index % 2) * 40}%`,
                      boxShadow: '0 0 20px rgba(91,159,255,0.6)',
                    }}
                    whileHover={{ scale: 1.5 }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: 9999,
                        delay: index * 0.2,
                      }}
                      className="absolute inset-0 bg-accent-blue rounded-full"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Component Details */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="p-8 rounded-2xl backdrop-blur-[120px] border border-glass-border bg-glass-standard">
              <h3 className="text-2xl font-display font-bold text-text-primary mb-6">
                Precision Engineering
              </h3>
              
              <p className="text-text-secondary leading-relaxed mb-8">
                Each component is designed to work in perfect harmony with our transparent Alon construction, 
                creating a camera that's not just revolutionary—it's a work of art you can see through.
              </p>

              <div className="space-y-6">
                {components.map((component, index) => {
                  const Icon = component.icon
                  return (
                    <motion.div
                      key={component.name}
                      initial={{ x: 50, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-glass-subtle border border-glass-border"
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                        className="w-10 h-10 flex items-center justify-center"
                      >
                        <Icon className="w-6 h-6 text-accent-blue" />
                      </motion.div>
                      
                      <div>
                        <h4 className="text-text-primary font-semibold">
                          {component.name}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {component.description}
                        </p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full px-6 py-4 bg-accent-primary text-white font-semibold rounded-xl shadow-button-primary"
              >
                View Technical Drawings
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ComponentsSection