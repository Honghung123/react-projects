/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {},
    container: {
      // center: true
      // padding: "12rem",  // The first way
      padding: {
        DEFAULT: "1rem", // Must be capitalized
        sm: "2rem",
        md: "3rem",
        lg: "4rem",
        xl: "5rem",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

