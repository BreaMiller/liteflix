import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Star, Clock, Gift } from 'lucide-react'

const CTASection: React.FC = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="preorder" ref={ref} className="py-24 bg-gradient-depth relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Background Glass Panel */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="p-12 rounded-3xl backdrop-blur-[60px] border border-glass-border bg-glass-emphasized relative overflow-hidden"
            style={{
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            }}
          >
            {/* Iridescent Border Effect */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-40"
              style={{
                background: 'linear-gradient(135deg, rgba(255,182,193,0.4), rgba(173,216,230,0.4), rgba(221,160,221,0.4))',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'xor',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                padding: '2px',
              }}
            />

            {/* Content */}
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mb-8"
              >
                <h2 className="text-4xl lg:text-6xl font-display font-bold text-text-primary mb-6 leading-tight">
                  Reserve Your
                  <span className="block bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                    Transparent Future
                  </span>
                </h2>
                
                <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                  Join the revolution. Be among the first to own the world's only transparent camera 
                  with aerospace-grade materials and 5D storage technology.
                </p>
              </motion.div>

              {/* Pricing */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="mb-10"
              >
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <div className="text-5xl font-bold text-accent-blue">$12,999</div>
                  <div className="text-text-secondary line-through text-xl">$15,999</div>
                  <div className="px-3 py-1 bg-accent-blue text-white text-sm rounded-full font-semibold">
                    Early Bird
                  </div>
                </div>
                <p className="text-text-tertiary">
                  Limited to first 1,000 pre-orders • Ships this eon
                </p>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
              >
                <div className="flex items-center justify-center space-x-3">
                  <Star className="w-5 h-5 text-accent-blue" />
                  <span className="text-text-primary">Priority Shipping</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Gift className="w-5 h-5 text-accent-blue" />
                  <span className="text-text-primary">Exclusive Accessories</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Clock className="w-5 h-5 text-accent-blue" />
                  <span className="text-text-primary">Lifetime Support</span>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 60px rgba(139, 124, 246, 0.8)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-accent-primary text-white font-semibold text-lg rounded-xl shadow-button-primary transition-all duration-200 flex items-center justify-center space-x-2"
                  style={{
                    boxShadow: '0 12px 32px rgba(139, 124, 246, 0.5)',
                  }}
                >
                  <span>Reserve Now</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: 9999 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.button>
                
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.18)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-glass-standard text-text-primary font-semibold text-lg rounded-xl border border-glass-border backdrop-blur-[60px] transition-all duration-200"
                >
                  View Demo
                </motion.button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.1 }}
                className="mt-8 pt-8 border-t border-glass-border"
              >
                <p className="text-text-tertiary text-sm mb-4">
                  Secure payment • 30-day money-back guarantee • Free shipping worldwide
                </p>
                <div className="flex items-center justify-center space-x-6 text-text-tertiary text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>742 pre-orders taken</span>
                  </div>
                  <span>•</span>
                  <span>258 remaining</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Floating Background Elements */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-accent-blue rounded-full opacity-30"
              style={{
                left: `${10 + i * 15}%`,
                top: `${20 + i * 10}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.2, 0.5, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + i,
                repeat: 9999,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection