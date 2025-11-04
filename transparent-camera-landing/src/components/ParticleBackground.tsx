import React from 'react'
import { motion } from 'framer-motion'

const ParticleBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-white rounded-full opacity-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: 9999,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default ParticleBackground