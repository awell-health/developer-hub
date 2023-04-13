import { glob } from 'glob'
import { GetServerSideProps } from 'next/types'
import path from 'path'

const generateSiteMap = ({
  pages,
  extensions,
}: {
  pages: Array<{ slug: string }>
  extensions: Array<{ key: string }>
}): string => {
  return `<?xml version="1.0" encoding="UTF-8"?>
       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       <!--Manual entries-->
       <url>
        <loc>https://developers.awellhealth.com</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/documents/orchestration-api-benchmark</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-orchestration</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-score</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-orchestration/playground</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-orchestration/docs/activities/awell-hosted-pages/hosted-pathway-guide</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-orchestration/docs/activities/awell-hosted-pages/hosted-activity-guide</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-orchestration/developer-tools/webhooks/webhook-builder</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-orchestration/developer-tools/api/schema</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-orchestration/developer-tools/api/e164-phone-validation</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-extensions</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-extensions/marketplace</loc>
       </url>
       <url>
        <loc>https://developers.awellhealth.com/awell-extensions/marketplace/request-extension</loc>
       </url>
       <!--Automated extension entries-->
       ${extensions
         .map(({ key }) => {
           return `
         <url>
             <loc>https://developers.awellhealth.com/awell-extensions/marketplace/${key}</loc>
         </url>
       `
         })
         .join('')}
       <!--Automated doc entries-->
         ${pages
           .map(({ slug }) => {
             return `
           <url>
               <loc>https://developers.awellhealth.com/${slug}</loc>
           </url>
         `
           })
           .join('')}
       </urlset>
     `
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const getExtensions = async () => {
    const request = await fetch('https://extensions.awellhealth.com/')
    const extensions = (await request.json()) as Array<{ key: string }>

    return extensions
  }

  const getDocPages = () => {
    const CONTENT_PATH = path.join(process.cwd(), 'content')

    let filePaths = []

    filePaths = glob
      .sync(`**/*`, { cwd: CONTENT_PATH })
      .filter((path) => /\.mdx?$/.test(path))

    const pages = filePaths.map((filePath) => {
      return {
        slug: filePath.split('.')[0], // this is the file path
      }
    })

    return pages
  }

  const sitemap = generateSiteMap({
    pages: getDocPages(),
    extensions: await getExtensions(),
  })

  res.setHeader('Content-Type', 'text/xml')
  // we send the XML to the browser
  res.write(sitemap)
  res.end()

  return {
    props: {},
  }
}
