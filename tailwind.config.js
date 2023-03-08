/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'laptop': '1025px',
        // => @media (min-width: 1025px) { ... }
      },
    },
  },
  plugins: [],
}
