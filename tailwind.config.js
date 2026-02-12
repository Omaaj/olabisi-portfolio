/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        custom2Xlg: "1180px",
        customXlg: "1108px",
        customTablet1: "940px",
        customMiniTablet: "700px",
      },
      colors: {
        customGray: {
          100: "#0C0C0C",
          200: "#252525",
          300: "#f0f0f2",
          400: "#616e85",
          500: "#0d1421",
          600: "#d9d9d9",
          700: "#1b1b1c",
          800: "#eaecef",
          900: "#242426",
          1000: "#121513",
          1001: "#e5e7eb",
        },

        customYellow: {
          100: "#b58153",
        },

        customOrange: {
          100: "hsl(19, 96%, 52%)",
        },

        customRed: {
          100: "#c21414",
          200: "#ff5c5c",
        },
        customGreen: {
          100: "#008e29",
          200: "#48ff91",
          300: "#29aa74",
        },
      },
    },
  },
  plugins: [],
};
