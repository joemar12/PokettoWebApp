/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html, js, tsx,}", "./src/**/*"],
  theme: {
    extend: {
      colors: {
        "black": "#2c2c32",
        "white": "#ffffff",
        "grey": "#f5f5f5",
        "light-blue": "#005ba4",
        "light-font": "#ababad",
        "mid-grey": "#3c3c3c"
      }
    },
  },
  plugins: [],
};
