import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Youtube, Music } from 'lucide-react'
import PrismIcon from './PrismIcon'
import { getImagePath } from '@/lib/utils'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    product: [
      { label: 'Technology', href: '#technology' },
      { label: 'Materials', href: '#materials' },
      { label: 'Specifications', href: '#specs' },
      { label: 'Pre-Order', href: '#preorder' },
    ],
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press Kit', href: '#press' },
      { label: 'Partners', href: '#partners' },
    ],
    support: [
      { label: 'Documentation', href: '#docs' },
      { label: 'API Reference', href: '#api' },
      { label: 'Community', href: '#community' },
      { label: 'Contact', href: '#contact' },
    ],
  }

  const socialLinks = [
    { 
      icon: Youtube, 
      href: '#', 
      label: 'YouTube',
      brandColor: '#FF0000',
      hoverEffect: 'youtube'
    },
    { 
      icon: Music, 
      href: '#', 
      label: 'TikTok',
      brandColor: '#000000',
      hoverEffect: 'tiktok'
    },
    { 
      icon: Linkedin, 
      href: '#', 
      label: 'LinkedIn',
      brandColor: '#0A66C2',
      hoverEffect: 'linkedin'
    },
  ]

  return (
    <footer className="bg-background-primary border-t border-glass-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <PrismIcon className="h-8 w-8" />
              </motion.div>
              <span className="text-2xl font-display font-bold text-text-primary">
                LiteFlix
              </span>
            </div>
            
            <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
              Revolutionizing photography with aerospace-grade transparent materials 
              and breakthrough 5D optical storage technology.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-accent-blue" />
                <span className="text-text-secondary text-sm">hello@liteflix.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-accent-blue" />
                <span className="text-text-secondary text-sm">+1 (777) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-accent-blue" />
                <span className="text-text-secondary text-sm">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-text-primary font-semibold mb-4 capitalize">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-text-secondary hover:text-text-primary transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-glass-border"
        >
          <div className="max-w-md">
            <h4 className="text-text-primary font-semibold mb-4">Stay Updated</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-glass-subtle border border-glass-border rounded-l-xl text-text-primary placeholder-text-tertiary backdrop-blur-[120px] focus:outline-none focus:border-accent-blue"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-accent-primary text-white rounded-r-xl font-semibold"
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-text-tertiary text-xs mt-2">
              Get the latest updates on LiteFlix developments
            </p>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row justify-between items-center"
        >
          <div className="text-text-tertiary text-sm mb-4 md:mb-0">
            © 2030 LiteFlix. All rights reserved. | Privacy Policy | Terms of Service
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    color: social.brandColor
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 bg-glass-subtle border border-glass-border rounded-lg flex items-center justify-center transition-all duration-200 backdrop-blur-[120px] hover:text-accent-blue`}
                  aria-label={social.label}
                  style={{ color: 'currentColor' }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-accent-glow/5 to-transparent pointer-events-none" />
    </footer>
  )
}

export default Footer