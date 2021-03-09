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

const nextOnFocusBefore = plugin(({addVariant, e}) => {
  addVariant('next-on-focus-before', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.${e(`next-on-focus-before${separator}${className}`)}:focus + *::before`;
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

const nextOnCheckedBefore = plugin(({addVariant, e}) => {
  addVariant('next-on-checked-before', ({modifySelectors, separator}) => {
    modifySelectors(({className}) => {
      return `.${e(`next-on-checked-before${separator}${className}`)}:checked + *::before`;
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
    },
  },
  variants: {
    scale: ['responsive', 'hover', 'focus', 'group-hover'],
    ringWidth: ['responsive', 'hover', 'focus', 'group-hover'],
    ringColor: ['responsive', 'hover', 'focus', 'group-hover'],
    extend: {
      display: ['before'],
      backgroundColor: ['next-on-focus', 'next-on-checked'],
      borderColor: ['before'],
      borderRadius: ['before'],
      borderStyle: ['before'],
      borderWidth: ['before'],
      height: ['before'],
      width: ['before'],
      margin: ['before', 'first-type'],
      opacity: [ 'next-on-focus', 'next-on-checked'],
      ringWidth: ['before', 'next-on-focus', 'next-on-focus-before', 'next-on-checked', 'next-on-checked-before'],
      ringOpacity: ['before', 'next-on-focus', 'next-on-checked'],
      ringColor: ['before', 'next-on-focus', 'next-on-focus-before',  'next-on-checked'],
    },
  },
  plugins: [
    before,
    nextOnFocus,
    nextOnFocusBefore,
    nextOnChecked,
    nextOnCheckedBefore,
    firstOfType,
    plugin(({addUtilities}) => {
      addUtilities(contentUtilities, ['before'])
    })
  ],
}
