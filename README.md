# Build To Give - Demo

I'm just playing with some concepts for the Build To Give website using Astro

## 🚀 Project Structure

Anything in public folder is pushed to prod.

Most of the code is in src. There are static assets, components, data (where some of the content comes 
from... If you want to add data and make it accessible you need to add to content.config.ts), layouts (there's currently just 1), as well as pages. Currently this is configured as a Single Page Site (there are some links that open some other pages).

Styling is _mostly_ done in the components (this seems to be what Astro recommends), 
but there are some general properties (resets, variable, etc.) in style.css in the root of src.

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
