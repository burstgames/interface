const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/providers/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px",

      ...defaultTheme.screens,
    },
    extend: {
      screens: {
        sm: { max: "767px" },
        md3xl: { min: "1920px" },
      },
      zIndex: {
        "-1": "-1",
      },
      fontFamily: {
        "poppins-semibold": ["poppins-semibold", "sans-serif"],
        "poppins-medium": ["poppins-mediuım", "sans-serif"],
      },
      fontSize: {
        "10px": "0.625rem",
      },
      colors: {
        dark: "#121213",
        background: "#040D1E",
        "dark-gray": "#171717",
        "light-bg": "#F4F4F4",
        header: "#04111d",
        "box-bg": "#212226",
        "border-color": "#4C505C",
        cgray: "#2a2d30",
        "secondary-text": "#c8c8c8",
        "footer-gray": "#353841",
        transparent: "transparent",
      },
      minHeight: {
        580: "580px",
        140: "35rem", // 560px
        40: "10rem", // 140px
        6: "2.5rem",
      },
      height: {
        4.5: "1.125rem",
        13: "3.125rem",
        22: "5.25rem",
        double: "200%",
      },
      maxHeight: {
        "70vh": "70vh",
        "85vh": "85vh",
        140: "35rem", // 560px
      },
      maxWidth: {
        1920: "1920px",
      },
      minWidth: {
        150: "150px",
      },
    },
  },
  plugins: [nextui()],
};
