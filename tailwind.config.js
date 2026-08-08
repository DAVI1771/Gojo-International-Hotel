/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          light: '#132337',
          dark: '#060E1A',
        },
        gold: {
          DEFAULT: '#C9A227',
          light: '#E0BC4A',
          dark: '#A6851F',
        },
        cream: '#F8F5F0',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
