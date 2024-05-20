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
      alpha: 'lower-alpha', // Add this line
    },
  },
  plugins: [
    require('daisyui'),
  ],
  important: true,

  daisyui: {
    themes: ["light", "dark"],
  },

  darkMode: ["variant", "class", "selector", "media"],
}

