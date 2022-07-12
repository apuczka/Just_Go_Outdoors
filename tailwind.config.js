/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['.src/**/*.js'],
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ["'Josefin Sans'", 'sans-serif'],
        alata: ['"Alata"','sans-serif'],
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
