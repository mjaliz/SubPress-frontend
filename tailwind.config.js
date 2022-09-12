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
        "bg-gray2": "#eeeff1",
        "bg-primary2": "#fddcc9",
        "text-gray1": "#7b797c",
        "text-gray2": "#b5bfc8",
        "text-gray3": "#484548",
        "text-gray4": "#979598",
        "text-gold": "#fdeeab",
        "text-primary": "#ff6d00",
        "text-secondary": "#66a1f9",
        "text-selected": "#cc6213",
      },
    },
  },
  plugins: [],
};
