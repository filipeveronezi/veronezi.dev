/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'grainy-pattern': "url('/noise.svg')",
        'gradient-pattern': "url('/gradient.jpg')"
      },
      fontFamily: {
        sans: ['Unbounded', ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
