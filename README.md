# Awell Developers

Repository for [Awell Health's developer portal](https://developers.awellhealth.com). The portal houses the documentation and API reference for our Orchestration API.

![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Getting Started

### Installation

First, install all packages via npm.

```bash
npm i
```

You can then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Editing files

Most of the content is managed through [mdx files](https://mdxjs.com/) and these can be found in `/content/**/*`. Editing the markdown file will automatically update the content.

**Pages that are not managed through mdx files are:**

- [Schema page](https://developers.awellhealth.com/awell-orchestration/api-reference/overview/schema)
- [Support page](https://developers.awellhealth.com/awell-orchestration/support)
- [Awell Studio docs page](https://developers.awellhealth.com/awell-orchestration/awell-studio-docs)

If you'd like to edit these pages, see the corresponding `.jsx` files in the `/pages` directory.

### Adding a new page

1. Create a `.mdx` file in the appropriate location (eg `/content/awell-orchestration/docs/getting-started/new-doc.mdx`)
2. Add your new page to the menu, this is not done automatically! See `/src/config/menus/*.ts` and add your new page to the appropriate file: docsMenu if it's a documentation page and apiMenu if it's a page that belongs to the API reference.
3. That's it!

## Credits

Website built with NextJS and Tailwind. We ❤️ the [Tailwind docs](https://tailwindcss.com/) so we've used their layout and some of the components from their website. We've also used some components from [Flowbite](https://flowbite.com/).
