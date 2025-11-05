import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, Database, Shield, Zap, Clock, Gem } from 'lucide-react'

const SpecsSection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const specifications = [
    { icon: Camera, label: "Sensor", value: "Full-Frame 50MP", detail: "Ultra-high resolution CMOS" },
    { icon: Gem, label: "Alon Hardness", value: "Mohs 8.5-9", detail: "Diamond-level durability" },
    { icon: Database, label: "5D Storage", value: "500TB+", detail: "Eternal archive capacity" },
    { icon: Clock, label: "Lifespan", value: "1000+ Years", detail: "Virtually permanent storage" },
    { icon: Shield, label: "Weather Rating", value: "IP68", detail: "Extreme environment sealed" },
    { icon: Zap, label: "Processing", value: "Quantum+", detail: "AI-enhanced computation" },
    { icon: Camera, label: "ISO Range", value: "50-204,800", detail: "Ultra-low light performance" },
    { icon: Zap, label: "Burst Speed", value: "30fps RAW", detail: "Professional sports capability" }
  ]

  return (
    <section id="specs" ref={ref} className="py-24 bg-background-surface relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-text-primary mb-6">
            Technical Specifications
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every specification represents the pinnacle of current technology, 
            pushing the boundaries of what's possible in imaging and storage.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specifications.map((spec, index) => {
            const Icon = spec.icon
            return (
              <motion.div
                key={spec.label}
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="p-6 rounded-xl backdrop-blur-[120px] border border-glass-border bg-glass-subtle h-full relative overflow-hidden transition-all duration-400 group-hover:bg-glass-standard group-hover:scale-105">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="mb-4"
                  >
                    <Icon className="w-8 h-8 text-accent-blue" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-text-tertiary text-sm font-medium uppercase tracking-wide mb-2">
                    {spec.label}
                  </h3>
                  
                  <div className="text-2xl font-display font-bold text-text-primary mb-2">
                    {spec.value}
                  </div>
                  
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {spec.detail}
                  </p>

                  {/* Subtle Glow on Hover */}
                  <motion.div
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-400"
                    style={{
                      background: 'radial-gradient(ellipse at center, rgba(139,124,246,0.3) 0%, transparent 70%)',
                      filter: 'blur(10px)',
                    }}
                  />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="p-8 rounded-2xl backdrop-blur-[120px] border border-glass-border bg-glass-standard max-w-4xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Dimensions & Weight
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-blue mb-1">156mm</div>
                <div className="text-text-secondary text-sm">Length</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-blue mb-1">47mm</div>
                <div className="text-text-secondary text-sm">Width</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-blue mb-1">623g</div>
                <div className="text-text-secondary text-sm">Weight</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SpecsSection