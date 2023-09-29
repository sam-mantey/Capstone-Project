/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-green' : '#495E57',
        'yellow': '#F4CE14',
        'secondary-400': '#333333',
        'gray': '#D9D9D9',
        'secondary-300': '#EDEFEE',
      }
    },
  },
  plugins: [],
}