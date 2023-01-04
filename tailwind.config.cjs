/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./scr/**/*.{jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};
