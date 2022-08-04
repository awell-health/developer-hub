const dotenv = require('dotenv')
const path = require('path')
const fs = require('fs')
const glob = require('glob')
const matter = require('gray-matter')
const algoliasearch = require('algoliasearch')
const manualIndexes = require('./manual-indexes')

const CONTENT_PATH = path.join(process.cwd(), 'content')

async function getAllPages() {
  let filePaths = []

  filePaths = glob
    .sync(`**/*`, { cwd: CONTENT_PATH })
    .filter((path) => /\.mdx?$/.test(path))

  const pages = filePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(CONTENT_PATH, filePath))
    const { content, data } = matter(source)

    const space = filePath.includes('awell-orchestration')
      ? 'Awell Orchestration'
      : filePath.includes('awell-score')
      ? 'Awell Score'
      : 'Generic'

    return {
      space,
      content, // this is the .mdx content
      data, // this is the frontmatter
      slug: filePath.split('.')[0], // this is the file path
    }
  })

  return pages
}

function transformPagesToAlgoliaSearchObjects(pages) {
  const transformed = pages.map((page) => {
    return {
      objectID: page.slug,
      space: page.space,
      title: page.data.title,
      description: page.data.description,
      content: page.content,
      slug: page.slug.includes('changelog')
        ? /** Releases changelog are in different content directory compared to /pages  */
          `awell-orchestration/api-reference/overview/changelog/${page.slug
            .join('/')
            .at(-1)}`
        : page.slug,
    }
  })

  return transformed
}

;(async function () {
  // initialize environment variables
  dotenv.config()

  try {
    if (!process.env.NEXT_PUBLIC_ALGOLIA_APP_ID) {
      throw new Error('NEXT_PUBLIC_ALGOLIA_APP_ID is not defined')
    }

    if (!process.env.ALGOLIA_SEARCH_ADMIN_KEY) {
      throw new Error('ALGOLIA_SEARCH_ADMIN_KEY is not defined')
    }

    const docs = await getAllPages()
    const transformedDocs = transformPagesToAlgoliaSearchObjects(docs)

    // initialize the client with your environment variables
    const client = algoliasearch(
      process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
      process.env.ALGOLIA_SEARCH_ADMIN_KEY
    )

    // initialize the index with your index name
    const index = client.initIndex('awell_developers')
    await index.clearObjects()

    // save the objects!
    const algoliaResponse = await index.saveObjects([
      ...transformedDocs,
      ...manualIndexes,
    ])

    // check the output of the response in the console
    console.log(
      `🎉 Sucessfully added ${
        algoliaResponse.objectIDs.length
      } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
        '\n'
      )}`
    )
  } catch (error) {
    console.error(error)
    process.exit(1)
  }
})()
