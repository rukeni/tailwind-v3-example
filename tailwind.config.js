const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function(info) {
      // Add your custom styles here
      console.log(`info`, info)
    }),
  ],
}
