/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          yellow: '#FFF9C4', 
          green: '#C8E6C9',
          blue: '#BBDEFB',
          pink: '#F8BBD0',
        },
        primary: '#1E3A8A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}