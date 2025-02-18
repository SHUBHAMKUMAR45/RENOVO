/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily : {
        popins : '"Poppins", sans-serif',
        playfair : '"Playfair Display", serif'
      }
    },
  },
  plugins: [],
}