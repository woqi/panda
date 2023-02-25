/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '8px': '8px',
        '60px':'60px',
        '162px':'162px'
      },
      padding: {
        '43px': '43px',
        '69px': '69px'
      },
      margin: {
        '20px': '20px',
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [],
}