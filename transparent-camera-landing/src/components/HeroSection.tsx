import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'
import TransparentCamera3D from './TransparentCamera3D'

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), springConfig)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { width, height, left, top } = ref.current?.getBoundingClientRect() || { width: 0, height: 0, left: 0, top: 0 }
    const centerX = left + width / 2
    const centerY = top + height / 2
    
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  return (
    <section 
      ref={ref}
      onMouseMove={handleMouseMove}
      className="relative h-screen flex items-center justify-center bg-gradient-depth overflow-hidden pt-24"
    >
      {/* Background Gradient Effects */}
      {/* Enhanced iridescent overlay effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        animate={{
          background: [
            'radial-gradient(ellipse at 30% 20%, rgba(255, 0, 150, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 70% 80%, rgba(0, 200, 255, 0.15) 0%, transparent 50%)',
            'radial-gradient(ellipse at 20% 70%, rgba(255, 255, 0, 0.15) 0%, transparent 50%)',
          ],
        }}
        transition={{ duration: 6, repeat: 9999 }}
      />
      
      {/* Prism light refraction effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'conic-gradient(from 45deg, rgba(255,0,150,0.08), rgba(0,200,255,0.08), rgba(255,255,0,0.08), rgba(255,0,150,0.08))',
          mixBlendMode: 'screen',
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.02, 1],
        }}
        transition={{ duration: 4, repeat: 9999 }}
      />
      
      {/* Holographic Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(139,124,246,0.2) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }}
      />
      {/* Background Particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: 9999,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full">
        {/* Glass Text Panel */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="lg:col-span-6 z-20"
        >
          <motion.div
            className="relative"
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-display font-bold text-text-primary mb-6 leading-tight pt-6 px-6"
              style={{
                lineHeight: 1.1,
                letterSpacing: '-0.03em',
              }}
            >
              Moments that Outlast{' '}
              <span 
                className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent"
              >
                Memories
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-text-secondary mb-8 leading-relaxed max-w-2xl px-6"
            >
              The world's first transparent camera built with aerospace-grade Alon materials and revolutionary 5D optical storage technology. Experience engineering transparency redefined.
            </motion.p>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 px-6 pb-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: '0 16px 48px rgba(139, 124, 246, 0.7)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-accent-primary text-white font-semibold text-lg rounded-xl shadow-button-primary transform perspective-800 translate-z-3 transition-all duration-200"
                style={{
                  boxShadow: '0 12px 32px rgba(139, 124, 246, 0.5)',
                }}
              >
                Pre-Order Now
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.02,
                  backgroundColor: 'rgba(255, 255, 255, 0.18)'
                }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-glass-standard text-text-primary font-semibold text-lg rounded-xl border border-glass-border backdrop-blur-[60px] transition-all duration-200"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* 3D Camera Model - Floating, Larger */}
        <motion.div
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="lg:col-span-6 flex justify-center items-center"
          style={{
            perspective: '1000px',
          }}
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformPerspective: '1000px',
            }}
            className="relative"
          >
            <TransparentCamera3D />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: 9999 }}
          className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: 9999 }}
            className="w-1 h-3 bg-white bg-opacity-50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HeroSection