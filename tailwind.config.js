/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue, jsx}",
    "./src/**/*",
    "./public/**/*.html",
  ],

  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        "bg-dark1": "#1a151b",
        "bg-dark2": "#232027",
        "bg-gray1": "#edeaf1",
        "text-gray1": "#7b797c",
        text_gray2: "#b5bfc8",
        "text-gold": "#fdeeab",
        "text-primary": "#ff6d00",
      },
    },
  },
  plugins: [],
};
