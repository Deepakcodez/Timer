/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        clockFont: ['clockFont', 'sans-serif'], // Add fallback fonts
      },
    },
  },
  plugins: [],
}

