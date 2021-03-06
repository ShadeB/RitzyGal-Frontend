const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

const before = plugin(({addVariant, e}) => {
  addVariant('before', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.${e(`before${separator}${className}`)}::before`;
    });
  });
})

const nextOnFocus = plugin(({addVariant, e}) => {
  addVariant('next-on-focus', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.${e(`next-on-focus${separator}${className}`)}:focus + *`;
    });
  });
})

const nextOnChecked = plugin(({addVariant, e}) => {
  addVariant('next-on-checked', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.${e(`next-on-checked${separator}${className}`)}:checked + *`;
    });
  });
})

const firstOfType = plugin(({addVariant, e}) => {
  addVariant('first-type', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.${e(`first-type${separator}${className}`)}:first-of-type`;
    });
  });
})


const contentUtilities = {
  '.content': {
    content: 'attr(data-content)',
  }
}

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
      fill: {
        current: 'currentColor',
      },
      fill: theme => ({
        'secondary-color': theme('colors.secondary-color')
      }),
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    ringWidth: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    ringColor: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    boxShadow: ['responsive', 'hover', 'focus', 'group-hover', 'group-focus'],
    extend: {
      display: ['before'],
      backgroundColor: ['next-on-focus', 'next-on-checked'],
      borderColor: ['before'],
      borderRadius: ['before'],
      borderStyle: ['before'],
      borderWidth: ['before'],
      boxShadow: ['group-focus'],
      height: ['before'],
      width: ['before'],
      margin: ['last', 'before', 'first-type'],
      opacity: [ 'next-on-focus', 'next-on-checked'],
      ringWidth: ['before', 'next-on-focus', 'next-on-checked'],
      ringOpacity: ['before', 'next-on-focus', 'next-on-checked'],
      ringColor: ['before', 'next-on-focus', 'next-on-checked'],
    },
  },
  plugins: [
    before,
    nextOnFocus,
    nextOnChecked,
    firstOfType,
    plugin(({addUtilities}) => {
      addUtilities(contentUtilities, ['before'])
    })
  ],
}
