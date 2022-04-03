import rehypeSlug from 'rehype-slug'

import { Code, CustomH2, CustomH3 } from '../../src/components/Docs/atoms'

export const mdxOptions = {
  mdxOptions: {
    rehypePlugins: [
      rehypeSlug, // add IDs to any h1-h6 tag that doesn't have one, using a slug made from its text
    ],
  },
}

export const mdxComponents = {
  h2: CustomH2,
  h3: CustomH3,
  code: Code,
}
