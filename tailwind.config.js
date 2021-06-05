module.exports = {
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  variants: {
    position: ['after'],
    transform: ['after'],
    translate: ['after'],
    inset: ['after'],
    backgroundImage: ['after'],
    gradientColorStops: ['after']
  },
  plugins: [require('tailwindcss-pseudo-elements')],
}
