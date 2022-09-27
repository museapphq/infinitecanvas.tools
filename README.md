# InfiniteCanvas.tools

![Screenshot of website](/readme_screenshot.jpg)

[infinitecanvas.tools](https://infinitecanvas.tools/) is a microsite describing and documenting the history of infinite canvas software, from early design tools (e.g. Illustrator) up to the explosion of whiteboarding, design, programming, and thinking tools today (e.g. Miro, Figma, Origami Studio, MindNode).

The site was created by the [Muse](https://museapp.com/) team to help showcase the diversity of apps in this space. We draw some inspiration from early versions of jamstack.org, separating advocacy for the category from any one specific product.

We hope to celebrate how these new tools, Muse included, stand on the shoulders
of those that came before. This site is a resource and community of like minded
thinkers and builders who use infinite canvases in their work.

# How to contribute

If you have a change in mind (for example, an app to add to the gallery), please
either open an issue or make a pull request with your suggested change. One of
the maintainers will follow up to merge your change.

## App gallery

Each app gallery entry is a `.md` file in `/src/content/gallery/`.

Images are stored in `/public/images/history`. Images in the app gallery have an
aspect ratio of 16x9. If you are providing an image, please provide a
high-resolution image of at least 1200px wide with your pull request.

usecases is an array of string values chosen from the following list. The
intention is to support building filtering or sorting of the list in the future.

- whiteboard
- ui design
- drawing
- mind mapping
- thinking
- notetaking
- studying
- teaching
- task management
- video editing
- mood boards
- storyboarding
- meetings
- reviews
- project planning
- design prototyping
- 3D modeling
- machine learning
- outlining
- programming
- diagramming
- retrospectives
- map making
- virtual space

## History

Each history entry is a `.md` file in `/src/content/history/`. Each entry has an
entry in the frontmatter with the name of the image file.

Images are stored in `/public/images/history`. Each images has a size of 1024px
x 684px. If you are providing an image, please provide a high-resolution image
of at least 1024px wide with your pull request.

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
