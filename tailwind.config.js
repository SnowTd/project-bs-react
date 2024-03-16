/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      zIndex: {
        '-1':'-1'
      },
      fontFamily: {
        Kanit:['Kanit','sans-serif'],
        zemit:['THZEMIT','sans-serif']
      }
    },
  },
plugins: [],
}