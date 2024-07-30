/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Screens/**/*.{js,jsx,ts,tsx}"],
  assets: ['./assets/fonts'],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'innovat-blue':'#0D66B0',
        'innovat-green':'#70BF45',
        'innovat-orange':'#F79026',
        'innovat-gray':'#99A1B7',
        'innovat-liblue':'#E9F3FF',
        'innovat-bdgray':'#797676',
        'innovat-bdgray2':'#545454',
        'innovat-bdgray3':'#B3B3B3',
        'innovat-bdgray4':'#E9E9E9',
        'innovat-yellow':'#F6C000',
        'innovat-lblue':'##E9F3FF',
      },
    },
  },
  plugins: [],
}

