import React from 'react'
import { motion } from 'framer-motion'

const TransparentCamera3D: React.FC = () => {
  return (
    <div className="relative w-[600px] h-[400px] sm:w-[700px] sm:h-[450px] lg:w-[800px] lg:h-[500px] xl:w-[900px] xl:h-[550px]" style={{ perspective: '1000px' }}>
      {/* Transparent Camera Image */}
      <motion.div
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: -15 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0"
        style={{
          transform: 'rotateX(5deg) rotateY(-15deg)',
        }}
      >
        <img 
          src="/images/transparent-camera.png"
          alt="Transparent Camera with Iridescent Effects"
          className="w-full h-full object-contain drop-shadow-2xl"
          style={{
            filter: 'drop-shadow(0 8px 32px rgba(139, 124, 246, 0.6)) drop-shadow(0 4px 16px rgba(255, 255, 255, 0.3))',
          }}
        />
        

      </motion.div>

      {/* Floating Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, transparent 70%)',
            left: `${20 + i * 12}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
            x: [0, 10, -5, 0],
            y: [0, -15, 5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: 9999,
            ease: 'easeInOut',
          }}
        />
      ))}


    </div>
  )
}

export default TransparentCamera3D