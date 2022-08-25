/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      parchment: "#F9F9F1",
      red: "#C7381E",
      green: "#409E3F",
      blue: "#3C9499",
      magenta: "#BF3C7A",
      yellow: "#ECD437",
      black: "#000000",
      gray: "#2C393A",
      white: "#FFFFFF",
      brown: "#49461F"
    },
    fontFamily: {
      sans: [
        "IBM Plex Sans Condensed",
        "-apple-system",
        "BlinkMacSystemFont",
        "avenir next",
        "avenir",
        "segoe ui",
        "helvetica neue",
        "helvetica",
        "Cantarell",
        "Ubuntu",
        "roboto",
        "noto",
        "arial",
        "sans-serif"
      ],
      serif: [
        "Merriweather",
        "Iowan Old Style",
        "Apple Garamond",
        "Baskerville",
        "Times New Roman",
        "Droid Serif",
        "Times",
        "Source Serif Pro",
        "serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol"
      ],
      title: [
        "IBM Plex Sans",
        "-apple-system",
        "BlinkMacSystemFont",
        "avenir next",
        "avenir",
        "segoe ui",
        "helvetica neue",
        "helvetica",
        "Cantarell",
        "Ubuntu",
        "roboto",
        "noto",
        "arial",
        "sans-serif"
      ]
    },
    fontSize: {
      // sans sizes
      22: "22px",
      26: "26px",
      32: "32px",
      40: "40px",
      50: "50px",

      // serif sizes
      16: "16px",
      20: "20px",
      24: "24px",
      38: "38px"
    },
    letterSpacing: {
      normal: "0",
      wide: "2.5%"
    },
    lineHeight: {
      normal: "1",
      high: "1.5"
    },
    maxWidth: {
      1440: "1440px"
    },
    spacing: {
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      48: "48px",
      64: "64px",
      72: "72px"
    },

    extend: {}
  },
  plugins: []
}
