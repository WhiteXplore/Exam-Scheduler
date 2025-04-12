/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        webBackground: "#147452",
        Green: "#147452",
        table: "#d1fae5",
      },
    },
  },
  plugins: [],
};
