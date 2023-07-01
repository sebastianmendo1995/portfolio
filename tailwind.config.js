/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        first: "#002147",
        second: "#004E77",
        third: "#007E91",
        fourth: "#00AD8F",
        fifth: "#7FD77B",
        six: "#F9F871",
        white: "#fff",
        gray: "#E4E4E4",
        red: "#D62323",
        green: "#03A45E",
        orange: "#F9A31D",
        blue: "#20409B"
      },
    },
  },
  plugins: [],
}

