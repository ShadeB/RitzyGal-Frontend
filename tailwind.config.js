const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'secondary-color': '#ff00e5',
      },
      fontFamily: {
        serif: ['Neuton', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {},
  },
  plugins: [],
}
