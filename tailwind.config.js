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
        'gradient-pattern': "url('/gradient-pattern.jpg')"
      },
      fontFamily: {
        sans: ['var(--space-grotesk-font)', 'sans-serif']
      },
      keyframes: {
        'fade-up': {
          '0%': { transform: 'translateY(4px)', opacity: 0 },
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
        'fade-up': 'fade-up 400ms backwards',
        'fade-down': 'fade-down 400ms backwards',
        'fade-right': 'fade-right 400ms backwards',
        'fade-left': 'fade-left 400ms backwards'
      }
    }
  },
  plugins: []
}
