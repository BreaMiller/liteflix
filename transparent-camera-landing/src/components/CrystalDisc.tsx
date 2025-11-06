import React from 'react'

interface CrystalDiscProps {
  className?: string
}

const CrystalDisc: React.FC<CrystalDiscProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      style={{ filter: 'drop-shadow(0 0 20px rgba(139, 124, 246, 0.4))' }}
    >
      {/* Outer rim with gradient */}
      <defs>
        <radialGradient id="discGradient" cx="50%" cy="30%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.6 }} />
          <stop offset="40%" style={{ stopColor: '#e0c3fc', stopOpacity: 0.4 }} />
          <stop offset="100%" style={{ stopColor: '#8b7cf6', stopOpacity: 0.2 }} />
        </radialGradient>
        <radialGradient id="centerGlow" cx="50%" cy="50%">
          <stop offset="0%" style={{ stopColor: '#ec86d9', stopOpacity: 0.5 }} />
          <stop offset="100%" style={{ stopColor: '#8b7cf6', stopOpacity: 0 }} />
        </radialGradient>
        <linearGradient id="edgeShine" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
          <stop offset="50%" style={{ stopColor: '#ffffff', stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: '#000000', stopOpacity: 0.2 }} />
        </linearGradient>
      </defs>

      {/* Main disc body */}
      <circle cx="100" cy="100" r="90" fill="url(#discGradient)" strokeWidth="1" stroke="rgba(255,255,255,0.3)" />

      {/* Inner glow */}
      <circle cx="100" cy="100" r="80" fill="url(#centerGlow)" opacity="0.6" />

      {/* Data layer rings */}
      <circle cx="100" cy="100" r="75" fill="none" stroke="rgba(139, 124, 246, 0.3)" strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="100" r="65" fill="none" stroke="rgba(236, 134, 217, 0.2)" strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(139, 124, 246, 0.25)" strokeWidth="1" opacity="0.5" />
      <circle cx="100" cy="100" r="45" fill="none" stroke="rgba(236, 134, 217, 0.15)" strokeWidth="1" opacity="0.4" />

      {/* Spiral data pattern */}
      <g opacity="0.3">
        <path
          d="M 100 20 A 80 80 0 1 1 95 20"
          fill="none"
          stroke="rgba(139, 124, 246, 0.4)"
          strokeWidth="0.5"
        />
        <path
          d="M 100 35 A 65 65 0 1 1 93 35"
          fill="none"
          stroke="rgba(236, 134, 217, 0.3)"
          strokeWidth="0.5"
        />
        <path
          d="M 100 50 A 50 50 0 1 1 88 50"
          fill="none"
          stroke="rgba(139, 124, 246, 0.3)"
          strokeWidth="0.5"
        />
      </g>

      {/* Center crystal point */}
      <circle cx="100" cy="100" r="12" fill="rgba(236, 134, 217, 0.4)" />
      <circle cx="100" cy="100" r="12" fill="none" stroke="rgba(139, 124, 246, 0.5)" strokeWidth="1" />

      {/* Top shine/reflection */}
      <ellipse cx="85" cy="65" rx="20" ry="15" fill="url(#edgeShine)" opacity="0.5" />

      {/* Perspective edge highlight */}
      <path
        d="M 25 100 Q 25 50 100 30 Q 175 50 175 100"
        fill="none"
        stroke="rgba(255, 255, 255, 0.4)"
        strokeWidth="1"
        opacity="0.6"
      />

      {/* Bottom edge shadow */}
      <path
        d="M 25 100 Q 25 150 100 170 Q 175 150 175 100"
        fill="none"
        stroke="rgba(0, 0, 0, 0.2)"
        strokeWidth="1"
        opacity="0.5"
      />
    </svg>
  )
}

export default CrystalDisc
