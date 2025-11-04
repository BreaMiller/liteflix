import React from 'react'

interface PrismIconProps {
  className?: string
  size?: number
}

const PrismIcon: React.FC<PrismIconProps> = ({ className = "", size = 32 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 2L22 18H2L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M12 8L16 16H8L12 8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        opacity="0.7"
      />
      {/* Light ray effects */}
      <path
        d="M6 18L2 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M18 18L22 22"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
    </svg>
  )
}

export default PrismIcon
