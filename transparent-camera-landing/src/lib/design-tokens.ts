export const designTokens = {
  color: {
    background: {
      primary: '#000000',
      surface: '#0A0A0A',
      gradient: 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)'
    },
    glass: {
      standard: 'rgba(255, 255, 255, 0.1)',
      emphasized: 'rgba(255, 255, 255, 0.15)',
      subtle: 'rgba(255, 255, 255, 0.08)',
      border: 'rgba(255, 255, 255, 0.2)'
    },
    accent: {
      primary: 'linear-gradient(135deg, #8B7CF6 0%, #EC86D9 100%)',
      blue: '#5B9FFF',
      glow: 'rgba(139, 124, 246, 0.4)',
      header: '#AAB8D8'
    },
    iridescent: {
      subtle: 'linear-gradient(135deg, rgba(255,182,193,0.3), rgba(173,216,230,0.3), rgba(221,160,221,0.3))'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
      tertiary: '#A3A3A3',
      'on-glass': '#FFFFFF',
      dark: '#000000'
    }
  },
  typography: {
    fontFamily: {
      primary: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
      display: "'Outfit', 'Inter', sans-serif"
    },
    fontSize: {
      hero: '80px',
      h1: '56px',
      h2: '40px',
      h3: '28px',
      'body-lg': '20px',
      body: '16px',
      small: '14px',
      caption: '12px'
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    },
    lineHeight: {
      tight: 1.1,
      snug: 1.2,
      normal: 1.5,
      relaxed: 1.6
    },
    letterSpacing: {
      tight: '-0.03em',
      normal: '0',
      wide: '0.05em'
    }
  },
  spacing: {
    1: '8px',
    2: '16px',
    3: '24px',
    4: '32px',
    6: '48px',
    8: '64px',
    12: '96px',
    16: '128px'
  },
  depth: {
    perspective: {
      standard: '1000px',
      close: '800px',
      distant: '1200px'
    }
  },
  borderRadius: {
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px'
  },
  backdropBlur: {
    subtle: 'blur(15px)',
    standard: 'blur(20px)',
    strong: 'blur(30px)'
  },
  boxShadow: {
    glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
    '3d-near': '0 16px 48px rgba(0, 0, 0, 0.6)',
    glow: '0 0 40px rgba(139, 124, 246, 0.4)',
    nav: '0 2px 24px rgba(0, 0, 0, 0.3)',
    'button-primary': '0 12px 32px rgba(139, 124, 246, 0.5)'
  },
  animation: {
    duration: {
      fast: '200ms',
      standard: '400ms',
      slow: '600ms',
      reveal: '1000ms'
    },
    easing: {
      'ease-out': 'ease-out',
      elastic: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      linear: 'linear'
    }
  }
} as const

export type DesignTokens = typeof designTokens