/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "color-e7e": "#E7ECEC",
        "color-dde": "#DDE4E4",
        "color-ced": "#CED9D9",
        "color-c0d": "#C0D8D8",
        "color-0e8": "#0E8080",
        "color-0f7": "#0f7070",
        "color-c1d": "#C1D8D8",
      },
      colors: {
        "color-e7e": "#E7ECEC",
        "color-dde": "#DDE4E4",
        "color-ced": "#CED9D9",
        "mcolor-c0d": "#C0D8D8",
        "color-0e8": "#0E8080",
        "color-0f7": "#0f7070",
        "color-323": "#32323D",
        "color-767": "#767676",
        "color-282": "#282828",
        "color-757": "#757575",
        "color-9ea": "#9EA7AA",
        "color-696": "#696969",
      },
      keyframes: {
        "slide-right": {
          "0%": {
            "-webkit-transform": "translateX(-500px);",
            transform: "translateX(-500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        "slide-left": {
          "0%": {
            "-webkit-transform": "translateX(500px);",
            transform: "translateX(500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
        "slide-left2": {
          "0%": {
            "-webkit-transform": "translateX(500px);",
            transform: "translateX(500px);",
          },
          "100%": {
            "-webkit-transform": "translateX(0);",
            transform: "translateX(0);",
          },
        },
      },
      animation: {
        "slide-right":
          "slide-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-left":
          "slide-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
        "slide-left2":
          "slide-left2 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;",
      },
      flex: {
        4: "4 4 0%",
      },
    },
    screens: {
      1600: "1600px",
    },
  },
  plugins: [],
};
