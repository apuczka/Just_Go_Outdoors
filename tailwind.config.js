/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Josefin Sans'", 'sans-serif'],
        alata: ['"Alata"','sans-serif'],
      },
      backgroundImage: {
        'campfire': "url('public/campfire.jpg')",

      },
      colors: {
        'redNew': '#e63946ff',
        'light-blue': '#f1faeeff',
        'blue': '#457b9dff',
        'dark-blue': '#31587aff'
      }

    },

  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
