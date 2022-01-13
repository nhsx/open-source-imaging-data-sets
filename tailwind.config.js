module.exports = {
   content: [
      './pages/**/*.js',
      './components/**/*.js'
   ],
   theme: {
      extend: {
         'blue': {
            '50': '#f2f7fb',
            '100': '#e6eff8',
            '200': '#bfd7ed',
            '300': '#99bfe3',
            '400': '#4d8ecd',
            '500': '#005eb8',
            '600': '#0055a6',
            '700': '#00478a',
            '800': '#00386e',
            '900': '#002e5a'
         },
      }
   },
   variants: {},
   plugins: [
      require('@tailwindcss/forms')
   ],
}