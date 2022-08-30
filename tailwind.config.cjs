/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    borderRadius: {
      none: 0,
      4: "4px",
      8: "8px",
      full: "9999px"
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px",
      16: "16px"
    },
    colors: {
      parchment: "#F9F9F1",
      red: "#C7381E",
      "dark-red": "#862514",
      green: "#409E3F",
      "dark-green": "#2B692A",
      blue: "#3C9499",
      "dark-blue": "#286467",
      magenta: "#BF3C7A",
      yellow: "#ECD437",
      black: "#000000",
      gray: "#2C393A",
      white: "#FFFFFF",
      brown: "#49461F",
      transparent: "transparent"
    },
    dropShadow: {
      1: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1));"
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
      16: "16px",
      20: "20px",
      24: "24px",
      30: "30px",
      38: "38px",
      48: "48px"
    },
    letterSpacing: {
      normal: "0",
      wide: "5%"
    },
    lineHeight: {
      normal: "1",
      high: "1.5"
    },
    maxWidth: {
      1440: "1440px"
    },
    screens: {
      1440: "1440px",
      1280: "1280px",
      1024: "1024px",
      860: "860px",
      768: "768px",
      640: "640px",
      540: "540px",
      420: "420px"
    },
    spacing: {
      0: 0,
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      48: "48px",
      64: "64px",
      72: "72px",
      96: "96px",
      128: "128px",
      168: "168px"
    },
    extend: {}
  },
  plugins: []
}
