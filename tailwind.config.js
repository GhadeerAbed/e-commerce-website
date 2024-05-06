/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./page.tsx",
    "./src/**/*.{js,jsx,tsx,ts}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",

  theme: {
    extend: {
      colors: {
        secondary:"#ff4141"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
