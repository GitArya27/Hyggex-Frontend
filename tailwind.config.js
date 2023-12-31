/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: { colors: {
        primary: "#06286E",
        secondary: "#00f6ff",
      
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        LaBelleAurore : ['La Belle Aurore', "cursive"]
      },
    },
    screens: {
      xs: "300px",
      xsm:"440px",
      ss: "768px",
      sm: "920px",
      md: "1060px",
      lg: "1250px",
      xl: "1700px",
    },},
    
    plugins: [],
  };
  