/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: { 'logo-red': '#f83b00', 'logo-yellow': '#fdc704', 'neutral-bg': '#171717' },
      animation: {
        shine: 'shine 5s linear infinite',
        'fade-in': 'fadeIn 1s ease-in-out',
        'skeleton-right': 'skeletonRight 1.5s ease infinite'
      },
      keyframes: {
        shine: {
          to: { 'background-position': 'center 200%' }
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        skeletonRight: {
          to: { backgroundPosition: 'right -200px top 0' }
        }
      }
    }
  },
  plugins: []
}
