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
    extend: {}
  },
  plugins: []
}
