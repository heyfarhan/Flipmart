/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      'blue':'#2874f0',
      'white':"#f0f0f0",
      'yellow':"#ffe500",
      'gray':"#A4A4A4",
      'wwhite':'#ffff'
    },
    fontFamily:{
      'logo':["Roboto", "Arial", "sans-serif"],
    },
    backgroundImage: {
      'electronics':'https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90',
    }
  },
  plugins: [],
}




