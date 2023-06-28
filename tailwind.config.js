/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(103 232 249)',
      },
    },
  },
  plugins: [
    require('tailwindcss-fluid-type'),
  ],
}

