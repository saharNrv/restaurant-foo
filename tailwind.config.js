/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primery':'#F4ECE1',
      },
      fontSize:{
        'middle':'25px',
      }
    },
  },
  plugins: [],
}

