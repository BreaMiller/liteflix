import React from 'react'

interface IridescentDiscProps {
  className?: string
  size?: number
}

const IridescentDisc: React.FC<IridescentDiscProps> = ({ className = '', size = 96 }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      width={size}
      height={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="discGradient" cx="40%" cy="40%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.8)" />
          <stop offset="30%" stopColor="rgba(200, 220, 255, 0.6)" />
          <stop offset="60%" stopColor="rgba(150, 100, 200, 0.4)" />
          <stop offset="100%" stopColor="rgba(100, 50, 150, 0.2)" />
        </radialGradient>
        
        <filter id="discGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="iridescent" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(255, 100, 150, 0.4)" />
          <stop offset="25%" stopColor="rgba(255, 200, 100, 0.4)" />
          <stop offset="50%" stopColor="rgba(100, 200, 255, 0.4)" />
          <stop offset="75%" stopColor="rgba(200, 100, 255, 0.4)" />
          <stop offset="100%" stopColor="rgba(100, 255, 200, 0.4)" />
        </linearGradient>
      </defs>

      {/* Outer glow */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="rgba(139, 124, 246, 0.3)" strokeWidth="2" filter="url(#discGlow)" />

      {/* Main disc */}
      <circle cx="100" cy="100" r="85" fill="url(#discGradient)" filter="url(#discGlow)" />

      {/* Iridescent overlay rings */}
      <circle cx="100" cy="100" r="85" fill="none" stroke="url(#iridescent)" strokeWidth="3" opacity="0.6" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255, 200, 100, 0.3)" strokeWidth="2" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(100, 200, 255, 0.3)" strokeWidth="2" />

      {/* Central highlight */}
      <ellipse cx="80" cy="80" rx="30" ry="30" fill="rgba(255, 255, 255, 0.4)" filter="url(#discGlow)" />

      {/* Inner details */}
      <circle cx="100" cy="100" r="30" fill="none" stroke="rgba(200, 150, 255, 0.2)" strokeWidth="1" strokeDasharray="3,3" />
    </svg>
  )
}

export default IridescentDisc
