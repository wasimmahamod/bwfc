/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",

    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: '1200px',
        l_container: '1260px',
      },
      fontFamily: {
        primary: ['Manrope', 'sans-serif',],
      },
      colors: {
      primary: '#000000',
      secendary:'#3734A9',
      thard:'#FF7F5C',
      },
    },
  },
  plugins: [],
}

