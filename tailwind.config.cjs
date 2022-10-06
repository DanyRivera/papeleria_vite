/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary' : '#1481BA',
        'secondary' : '#747474'
      }
    },
    fontFamily: {
      'fredoka' : ['Fredoka One', 'cursive'],
      'mukta' : ['Mukta', 'sans-serif'],
      'pacifico' : ['Pacifico', 'cursive'],
    }
  },
  plugins: [],
}
