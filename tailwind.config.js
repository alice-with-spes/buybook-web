/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "767px",
      },
      colors: {
        "main-grey": "#F0F0F0",
        "dark-grey": "#565050",
      },
    },
  },
  plugins: [require("daisyui")],
};
