/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './scr/**/*.{jsx,js}',
    './src/components/**/*.{jsx,js}',
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto\\ Slab', 'serif'],
      extend: {},
    },
  },
  plugins: [],
};
