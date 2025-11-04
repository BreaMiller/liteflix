/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#2B5D3A',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: '#4A90E2',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				accent: {
					DEFAULT: '#F5A623',
					foreground: 'hsl(var(--accent-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
				// Custom transparent camera design tokens
				glass: {
					standard: 'rgba(255, 255, 255, 0.1)',
					emphasized: 'rgba(255, 255, 255, 0.15)',
					subtle: 'rgba(255, 255, 255, 0.08)',
					border: 'rgba(255, 255, 255, 0.2)',
				},
				text: {
					primary: '#E5E5E5',
					secondary: '#A3A3A3',
					tertiary: '#737373',
					'on-glass': '#FFFFFF',
				},
				accent: {
					blue: '#5B9FFF',
					glow: 'rgba(139, 124, 246, 0.4)',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				// Custom radius for transparent camera
				xl: '24px',
			},
			fontFamily: {
				display: ["'Outfit'", "'Inter'", "sans-serif"],
			},
			backgroundImage: {
				'gradient-depth': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
				'accent-primary': 'linear-gradient(135deg, #8B7CF6 0%, #EC86D9 100%)',
				'iridescent-subtle': 'linear-gradient(135deg, rgba(255,182,193,0.3), rgba(173,216,230,0.3), rgba(221,160,221,0.3))',
			},
			backdropBlur: {
				subtle: 'blur(15px)',
				standard: 'blur(20px)',
				strong: 'blur(30px)',
			},
			boxShadow: {
				glass: '0 8px 32px rgba(0, 0, 0, 0.4)',
				'3d-near': '0 16px 48px rgba(0, 0, 0, 0.6)',
				glow: '0 0 40px rgba(139, 124, 246, 0.4)',
				nav: '0 2px 24px rgba(0, 0, 0, 0.3)',
				'button-primary': '0 12px 32px rgba(139, 124, 246, 0.5)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				// Custom animations for transparent camera
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'glow-pulse': {
					'0%': { boxShadow: '0 0 20px rgba(139, 124, 246, 0.4)' },
					'100%': { boxShadow: '0 0 40px rgba(139, 124, 246, 0.8)' },
				},
				'particle-drift': {
					'0%': { transform: 'translateX(0px) translateY(0px)', opacity: '0.2' },
					'25%': { transform: 'translateX(50px) translateY(-25px)', opacity: '0.4' },
					'50%': { transform: 'translateX(100px) translateY(0px)', opacity: '0.2' },
					'75%': { transform: 'translateX(50px) translateY(25px)', opacity: '0.4' },
					'100%': { transform: 'translateX(0px) translateY(0px)', opacity: '0.2' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Custom animations
				'float': 'float 6s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite alternate',
				'particle-drift': 'particle-drift 10s linear infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}