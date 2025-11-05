import React, { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Database, Clock, Shield, Infinity, Zap } from 'lucide-react'

const StorageSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [activeLayer, setActiveLayer] = useState<number | null>(null)

  const storageLayers = [
    { name: "Alon Housing", zIndex: 5, description: "Aerospace-grade protective shell" },
    { name: "Optical Layer 1", zIndex: 4, description: "Light path management" },
    { name: "5D Storage Medium", zIndex: 3, description: "Revolutionary crystal data storage", highlight: true },
    { name: "Optical Layer 2", zIndex: 2, description: "Data reading optimization" },
    { name: "Sensor Assembly", zIndex: 1, description: "Advanced imaging system" }
  ]

  return (
    <section id="technology" ref={ref} className="py-24 bg-background-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Technology Description */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="p-8 rounded-2xl backdrop-blur-[120px] border border-glass-border bg-glass-standard">
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-text-primary mb-6">
                5D Crystal Storage
                <span className="block text-accent-blue text-lg font-medium mt-2">
                  Quantum-Encoded Crystal Media
                </span>
              </h2>
              
              <p className="text-text-secondary leading-relaxed mb-8">
                Our revolutionary 5D crystal storage utilizes femtosecond laser nanostructuring within 
                high-purity fused quartz, creating self-assembled nanograting voxels that encode data 
                in five dimensions—position, size, orientation, and two optical properties.
              </p>

              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <Zap className="w-6 h-6 text-accent-blue mt-1" />
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">Femtosecond Laser Writing</h4>
                    <p className="text-text-secondary text-sm">Quadrillion pulses per second create permanent nanostructures in crystal</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <Database className="w-6 h-6 text-accent-blue mt-1" />
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">360TB+ Capacity</h4>
                    <p className="text-text-secondary text-sm">More storage than 100,000 DVDs in crystal the size of a coin</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <Shield className="w-6 h-6 text-accent-blue mt-1" />
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">Billions of Years</h4>
                    <p className="text-text-secondary text-sm">Guinness World Record holder for most durable storage medium</p>
                  </div>
                </motion.div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <Infinity className="w-6 h-6 text-accent-blue mt-1" />
                  <div>
                    <h4 className="text-text-primary font-semibold mb-1">2024 Achievement</h4>
                    <p className="text-text-secondary text-sm">Successfully encoded complete human genome in crystal storage</p>
                  </div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 w-full px-6 py-4 bg-accent-primary text-white font-semibold rounded-xl shadow-button-primary"
              >
                Explore Crystal Technology
              </motion.button>
            </div>
          </motion.div>

          {/* Crystal Storage Device Visualization */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-7 relative"
            style={{ perspective: '1000px' }}
          >
            <div className="relative h-96 flex items-center justify-center">
              {/* Crystal Storage Device */}
              <motion.div
                initial={{ 
                  scale: 0.8, 
                  rotateX: -90,
                  y: 50
                }}
                animate={isInView ? {
                  scale: 1,
                  rotateX: 0,
                  y: 0,
                  transition: { duration: 0.8, delay: 0.5 }
                } : {}}
                className="absolute w-96 h-96 rounded-full cursor-pointer"
                style={{
                  zIndex: 10,
                  transformStyle: 'preserve-3d'
                }}
                whileHover={{
                  rotateY: 10,
                  scale: 1.05
                }}
              >
                {/* Crystal Disk */}
                <div 
                  className="absolute inset-0 rounded-full border-4 border-white/20 shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: '0 25px 50px rgba(255,255,255,0.1), inset 0 0 50px rgba(255,255,255,0.05)'
                  }}
                >
                  {/* Internal Holographic Text */}
                  <div className="absolute inset-0 rounded-full flex items-center justify-center">
                    <div className="text-center transform rotate-12">
                      {/* LiteFlix Title */}
                      <motion.div
                        animate={{
                          opacity: [0.7, 1, 0.7],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: 9999,
                          ease: 'easeInOut'
                        }}
                        className="text-2xl font-bold mb-2"
                        style={{
                          background: 'linear-gradient(45deg, #00ff88, #00ccff, #cc00ff, #ff6600)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                          color: 'transparent',
                          filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.3))'
                        }}
                      >
                        LiteFlix
                      </motion.div>
                      

                    </div>
                  </div>

                  {/* Central Indexing Marks */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-3 h-3 rounded-full bg-white/30 border border-white/50"></div>
                    <div className="w-2 h-2 rounded-full bg-blue-400/60 mt-1 ml-0.5"></div>
                  </div>

                  {/* Edge Reflection */}
                  <div 
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: 'radial-gradient(ellipse at 30% 30%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                      mask: 'radial-gradient(circle, black 70%, transparent 100%)'
                    }}
                  />
                </div>

                {/* Holographic Glow Effect */}
                <motion.div
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: 9999,
                    ease: 'easeInOut'
                  }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'radial-gradient(ellipse at center, rgba(91,159,255,0.2) 0%, rgba(255,255,255,0.1) 30%, transparent 70%)',
                    filter: 'blur(20px)',
                  }}
                />
              </motion.div>

              {/* Floating Storage Layer Indicators */}
              {storageLayers.map((layer, index) => (
                <motion.div
                  key={layer.name}
                  initial={{ 
                    scale: 0,
                    opacity: 0
                  }}
                  animate={isInView ? {
                    scale: 0.8,
                    opacity: 0.6,
                    transition: { duration: 0.5, delay: 1.2 + index * 0.1 }
                  } : {}}
                  className={`absolute w-72 h-72 rounded-full border border-white/10 ${
                    layer.highlight ? 'border-accent-blue/50' : 'border-white/10'
                  }`}
                  style={{
                    zIndex: layer.zIndex,
                    transform: `rotate(${index * 72}deg)`,
                  }}
                >
                  <div className="absolute inset-4 rounded-full border border-white/5 flex items-center justify-center">
                    <div className="text-center transform -rotate-12">
                      <div className="text-white/40 text-xs font-medium">
                        {layer.name}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Interactive Controls */}
            <div className="mt-8 flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveLayer(null)}
                className="px-6 py-3 bg-glass-emphasized text-text-primary rounded-xl border border-glass-border backdrop-blur-[120px]"
              >
                Full Breakdown
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default StorageSection