/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'black': '#151515',
      'lightblack': '#1E1E1E',
      'green': '#00B85E',
      'yellow': '#FFD928',
      'gray': '#898989',
      'white': '#FFFFFF',
      'line': '#272727',
    },
    fontFamily: {
      sans: ['Urbanist', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}

