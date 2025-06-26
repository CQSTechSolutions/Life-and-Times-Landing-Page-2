/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        league: ['League Gothic', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'pink-pri': '#c800de',
      },
    },
  },
  plugins: [],
}

