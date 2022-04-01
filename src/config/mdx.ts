import rehypeSlug from 'rehype-slug'

import { Code } from '../../src/components/Code'
import { CustomH2, CustomH3 } from '../../src/components/Headings'

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
