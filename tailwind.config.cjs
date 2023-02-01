/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'grainy-pattern': "url('/noise.svg')",
        'gradient-pattern': "url('/gradient.jpg')"
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif']
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
