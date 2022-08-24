/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
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
      "sans-22": "22px",
      "sans-26": "26px",
      "sans-32": "32px",
      "sans-40": "40px",
      "sans-50": "50px",
      "serif-16": "16px",
      "serif-20": "20px",
      "serif-24": "24px",
      "serif-38": "38px"
    },
    extend: {}
  },
  plugins: []
}
