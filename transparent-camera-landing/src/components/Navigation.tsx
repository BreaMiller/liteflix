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

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showProducts, setShowProducts] = useState(false)

  const products: Product[] = [
    {
      title: 'Camera Bodies',
      href: '#camera-bodies',
      image: '/liteflix/images/transparent-camera-body.png',
      description: 'Revolutionary transparent camera with 5D storage'
    },
    {
      title: 'Lenses',
      href: '#lenses',
      image: '/liteflix/images/transparent-lens.png',
      description: 'Precision optical elements for crystal clarity'
    },
    {
      title: '5D Storage',
      href: '#5d-storage',
      image: '/liteflix/images/transparent-camera-internal-components.png',
      description: 'Quantum-encoded crystal media storage'
    },
    {
      title: 'Flashes',
      href: '#flashes',
      image: '/liteflix/images/ALON_microstructure_SEM_fracture_grains.jpg',
      description: 'Advanced illumination systems'
    }
  ]

  const navItems = [
    { label: 'Technology', href: '#technology' },
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
        borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
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
                  className="absolute top-full left-0 mt-2 w-96 rounded-2xl backdrop-blur-[120px] border border-glass-border bg-glass-standard shadow-xl z-50"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(120px)',
                  }}
                >
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {products.map((product) => (
                      <motion.a
                        key={product.title}
                        href={product.href}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group rounded-xl overflow-hidden bg-glass-subtle border border-glass-border hover:border-accent-blue transition-all duration-200"
                      >
                        <div className="relative h-32 overflow-hidden bg-gradient-to-b from-white/10 to-transparent">
                          <img
                            src={getImagePath(product.image.replace('/liteflix/images/', ''))}
                            alt={product.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                        <div className="p-3">
                          <h4 className="text-text-primary font-semibold text-sm mb-1">
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
          className="md:hidden absolute top-full left-0 right-0 bg-glass-emphasized backdrop-blur-[120px] border-b border-glass-border"
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
                    {products.map((product) => (
                      <a
                        key={product.title}
                        href={product.href}
                        className="block p-3 rounded-xl bg-glass-subtle border border-glass-border hover:border-accent-blue transition-all"
                        onClick={() => {
                          setIsOpen(false)
                          setShowProducts(false)
                        }}
                      >
                        <h4 className="text-text-primary font-semibold text-sm">
                          {product.title}
                        </h4>
                        <p className="text-text-tertiary text-xs mt-1">
                          {product.description}
                        </p>
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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