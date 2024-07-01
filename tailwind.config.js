/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./Screens/**/*.{js,jsx,ts,tsx}"],
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
      },
    },
  },
  plugins: [],
}

