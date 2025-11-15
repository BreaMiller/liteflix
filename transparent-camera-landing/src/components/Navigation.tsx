import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import PrismIcon from './PrismIcon'
import { getImagePath } from '@/lib/utils'

interface Product {
  title: string
  href: string
  image: string
  description: string
}

const CrystalDiscIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(255, 255, 255, 0.4)" strokeWidth="2" />
    {/* Mid ring */}
    <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(255, 255, 255, 0.3)" strokeWidth="1.5" />
    {/* Inner ring */}
    <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" />
    {/* Center circle */}
    <circle cx="100" cy="100" r="35" fill="rgba(255, 255, 255, 0.1)" />
    {/* Subtle gradient lines to suggest data layers */}
    <line x1="100" y1="20" x2="100" y2="50" stroke="rgba(200, 200, 255, 0.15)" strokeWidth="1" />
    <line x1="100" y1="150" x2="100" y2="180" stroke="rgba(200, 200, 255, 0.15)" strokeWidth="1" />
    <line x1="20" y1="100" x2="50" y2="100" stroke="rgba(200, 200, 255, 0.15)" strokeWidth="1" />
    <line x1="150" y1="100" x2="180" y2="100" stroke="rgba(200, 200, 255, 0.15)" strokeWidth="1" />
  </svg>
)

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showProducts, setShowProducts] = useState(false)

  const products: Product[] = [
    {
      title: 'Camera Bodies',
      href: '#camera-bodies',
      image: 'transparent-camera-body.png',
      description: 'Revolutionary transparent camera with 5D storage'
    },
    {
      title: 'Lenses',
      href: '#lenses',
      image: 'brea-lens.png',
      description: 'Precision optical elements for crystal clarity'
    },
    {
      title: '5D Storage',
      href: '#5d-storage',
      image: 'transparent-camera-internal-components.png',
      description: 'Quantum-encoded crystal media storage'
    },
    {
      title: 'Flashes',
      href: '#flashes',
      image: 'transparent-flash.png',
      description: 'Advanced illumination systems'
    }
  ]

  const navItems = [
    { label: 'Technology', href: '#technology' },
    { label: 'Specs', href: '#specs' },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
      style={{
        background: 'transparent',
        backdropFilter: 'blur(10px)',
      }}
    >
      <div className="w-full px-4 md:px-8 py-6 flex items-center justify-between relative">
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
          {/* Products Dropdown */}
          <div className="relative group">
            <motion.button
              className="text-text-primary hover:text-white transition-colors duration-200 relative group flex items-center space-x-1"
              onMouseEnter={() => setShowProducts(true)}
              onMouseLeave={() => setShowProducts(false)}
            >
              <span>Products</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showProducts ? 'rotate-180' : ''}`} />
              <motion.div
                className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {showProducts && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  onMouseEnter={() => setShowProducts(true)}
                  onMouseLeave={() => setShowProducts(false)}
                  className="absolute right-0 w-[600px] rounded-2xl shadow-2xl z-40"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.15) 70%, rgba(255, 255, 255, 0.05) 100%)',
                    backdropFilter: 'blur(20px)',
                    top: 'calc(100% + 16px)',
                    boxShadow: '0 20px 60px rgba(139, 124, 246, 0.3)',
                  }}
                >
                  <div className="grid grid-cols-2 gap-6 p-6">
                    {products.map((product, index) => (
                      <motion.a
                        key={product.title}
                        href={product.href}
                        whileHover={{ scale: 1.05, x: 8 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                        className="group rounded-xl overflow-hidden transition-all duration-300 flex flex-row items-center gap-4"
                      >
                        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-white/20 to-white/5 group-hover:shadow-lg flex items-center justify-center"
                          style={{
                            boxShadow: '0 0 30px rgba(139, 124, 246, 0.2)',
                            transition: 'box-shadow 0.3s ease',
                          }}
                        >
                          {product.title === '5D Storage' ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                              className="w-16 h-16"
                            >
                              <CrystalDiscIcon className="w-full h-full" />
                            </motion.div>
                          ) : (
                            <>
                              <img
                                src={getImagePath(product.image)}
                                alt={product.title}
                                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </>
                          )}
                        </div>
                        <div className="flex-1 text-left">
                          <h4 className="text-text-primary font-semibold text-sm mb-2 group-hover:text-white transition-colors">
                            {product.title}
                          </h4>
                          <p className="text-text-tertiary text-xs leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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

          {/* Pre-Order Button */}
          <motion.a
            href="#preorder"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 ml-8 bg-accent-primary text-white font-semibold rounded-xl shadow-button-primary transform perspective-800 translate-z-3 transition-all duration-200"
            style={{
              boxShadow: '0 12px 32px rgba(139, 124, 246, 0.5)',
            }}
          >
            Pre-Order Now
          </motion.a>
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
          className="md:hidden absolute top-full left-0 right-0 bg-glass-emphasized backdrop-blur-[120px] border-b border-glass-border"
        >
          <div className="px-6 py-6 space-y-4">
            {/* Mobile Products Menu */}
            <div>
              <button
                onClick={() => setShowProducts(!showProducts)}
                className="w-full text-left text-text-primary hover:text-white transition-colors text-lg flex items-center justify-between"
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${showProducts ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showProducts && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-2"
                  >
                    {products.map((product, index) => (
                      <motion.a
                        key={product.title}
                        href={product.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.08, duration: 0.3, ease: 'easeOut' }}
                        className="flex flex-row items-center gap-3 p-3 rounded-xl bg-glass-subtle border border-glass-border hover:border-accent-blue transition-all"
                        onClick={() => {
                          setIsOpen(false)
                          setShowProducts(false)
                        }}
                      >
                        <div className="relative w-16 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center">
                          {product.title === '5D Storage' ? (
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                              className="w-10 h-10"
                            >
                              <CrystalDiscIcon className="w-full h-full" />
                            </motion.div>
                          ) : (
                            <>
                              <img
                                src={getImagePath(product.image)}
                                alt={product.title}
                                className="w-full h-full object-contain"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </>
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-text-primary font-semibold text-sm">
                            {product.title}
                          </h4>
                          <p className="text-text-tertiary text-xs mt-1">
                            {product.description}
                          </p>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navigation