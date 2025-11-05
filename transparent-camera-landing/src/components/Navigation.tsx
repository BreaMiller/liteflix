import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import PrismIcon from './PrismIcon'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Technology', href: '#technology' },
    { label: 'Materials', href: '#materials' },
    { label: 'Specs', href: '#specs' },
    { label: 'Pre-Order', href: '#preorder' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-24"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(60px)',
        boxShadow: '0 2px 24px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between py-4">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
        >
          <PrismIcon className="h-8 w-8 text-white" />
          <span className="text-xl font-display font-bold text-white">
            LiteFlix
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-text-primary hover:text-white transition-colors duration-200 relative group"
            >
              {item.label}
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </a>
          ))}
          
          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-accent-primary text-white font-semibold rounded-xl shadow-button-primary transform perspective-800 translate-z-3 transition-all duration-200"
            style={{
              boxShadow: '0 12px 32px rgba(139, 124, 246, 0.5)',
            }}
          >
            Pre-Order Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-glass-emphasized backdrop-blur-strong border-b border-glass-border"
        >
          <div className="px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block text-text-primary hover:text-white transition-colors text-lg"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="w-full px-6 py-4 bg-accent-primary text-white font-semibold rounded-xl mt-4">
              Pre-Order Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation