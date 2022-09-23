# infinitecanavas.tools

![Screenshot of website](/readme_screenshot.jpg)

# How to run server

## First time setup

1. Clone this repo locally
1. Make sure you
   [install a recent version](https://nodejs.dev/en/learn/how-to-install-nodejs)
   of Node and npm TODO: identify which minimum version of node and npm are
   needed
1. Run `npm install` to install all the project dependencies

## Running the dev server

1. Run `npm run start` to run the dev server. It will print a local address with
   port and a network address with port (for accessing on another device on the
   same local network e.g. a phone or tablet)

# Under the hood / how to develop

## Astro docs

This site is built in Astro.

[Astro documentation](https://astro.build)

## Tailwind

This site is styled using Tailwind CSS.

[Tailwind documentation](https://tailwindcss.com)

## VSCode plugins

If you are using VSCode, there are some useful plugins that can make development
easier.

- **Astro:** This plugin (maintained by the Astro team) adds language support
  for Astro to VSCode.
- **Headwind:** This plugin automatically sorts tailwind classes every save.
- **Tailwind CSS IntelliSense:** This plugin (maintained by the Tailwind Labs
  team) adds code completion (including custom classes). Try pressing the
  `space` key on your keyboard when writing classes.
- **Prettier - Code formatter:** This formatter, once installed, will pick up
  the prettier config in this project's `package.json`.
- **prettier-plugin-astro:** `prettier-plugin-astro` adds support for `.astro`
  files. Follow
  [instructions](https://www.npmjs.com/package/prettier-plugin-astro#user-content-using-in-vs-code)
  to get it working. It is already a dev dependency for this project.
