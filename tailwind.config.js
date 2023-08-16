/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: { 'logo-red': '#f83b00', 'logo-yellow': '#fdc704' },
      animation: {
        shine: 'shine 5s linear infinite'
      },
      keyframes: {
        shine: {
          to: { 'background-position': 'center 200%' }
        }
      }
    }
  },
  plugins: []
}
