/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html' ],
  theme: {
    extend: {
      width: {
        '32': '8rem'
      }
      
    },
  },
  plugins: [],
}

