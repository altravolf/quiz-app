/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      "noto-sans": ["Noto Sans", "sans-serif"],
    },
    listStyleType: {
      alpha: 'lower-alpha',
      decimal: 'decimal'
    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/forms'),
  ],
  daisyui: {
    themes: ["light"],
  },
  darkMode: 'class', // Set to 'class' or 'media'
  important: true
}
