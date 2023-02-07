/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'grainy-pattern': "url('/noise.svg')",
        'gradient-pattern': "url('/gradient-pattern.jpg')",
        'gradient-pattern-2': "url('/gradient-pattern-2.jpg')",
        'gradient-pattern-3': "url('/gradient-pattern-3.jpg')",
        'gradient-pattern-4': "url('/gradient-pattern-4.jpg')",
        'gradient-pattern-5': "url('/gradient-pattern-5.jpg')",
        'gradient-pattern-6': "url('/gradient-pattern-6.jpg')",
        'gradient-pattern-7': "url('/gradient-pattern-7.jpg')"
      },
      fontFamily: {
        sans: ['var(--space-grotesk-font)', 'sans-serif']
      },
      keyframes: {
        'fade-up': {
          '0%': { transform: 'translateY(8px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'fade-down': {
          '0%': { transform: 'translateY(-4px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'fade-right': {
          '0%': { transform: 'translateX(-4px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        },
        'fade-left': {
          '0%': { transform: 'translateX(4px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 }
        }
      },
      animation: {
        'fade-up': 'fade-up 300ms backwards',
        'fade-down': 'fade-down 400ms backwards',
        'fade-right': 'fade-right 400ms backwards',
        'fade-left': 'fade-left 400ms backwards'
      }
    }
  },
  plugins: [require('tailwindcss-animation-delay'), require('@tailwindcss/typography')]
}
