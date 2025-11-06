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

const transition = {
  type: 'spring',
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

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
      image: 'transparent-lens.png',
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
        background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 70%, rgba(255, 255, 255, 0) 100%)',
        backdropFilter: 'blur(60px)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
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
          <div 
            className="relative"
            onMouseEnter={() => setActiveMenu('products')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <motion.button
              className="text-text-primary hover:text-white transition-colors duration-200 relative flex items-center space-x-1"
            >
              <span>Products</span>
              <ChevronDown 
                className={`h-4 w-4 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180' : ''}`} 
              />
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {activeMenu === 'products' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 10 }}
                  transition={transition}
                  className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-0 z-50"
                >
                  <motion.div
                    layoutId="active-menu"
                    className="bg-black/40 backdrop-blur-md rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
                  >
                    <motion.div layout className="w-max h-full p-6 space-y-3">
                      {products.map((product) => (
                        <a
                          key={product.title}
                          href={product.href}
                          className="flex space-x-4 group hover:opacity-80 transition-opacity"
                        >
                          <div className="relative w-32 h-16 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-white/20 to-white/5">
                            <img
                              src={getImagePath(product.image)}
                              alt={product.title}
                              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold mb-1 text-white">
                              {product.title}
                            </h4>
                            <p className="text-neutral-300 text-sm max-w-[12rem]">
                              {product.description}
                            </p>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  </motion.div>
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
                onClick={() => setActiveMenu(activeMenu === 'products' ? null : 'products')}
                className="w-full text-left text-text-primary hover:text-white transition-colors text-lg flex items-center justify-between"
              >
                <span>Products</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeMenu === 'products' ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {activeMenu === 'products' && (
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
                          setActiveMenu(null)
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