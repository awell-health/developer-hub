/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTM = require('next-transpile-modules')(['@markprompt/core'])
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
      // by next.js will be dropped. Doesn't make much sense, but how it is
      fs: false, // the solution
    }

    return config
  },
  async redirects() {
    return [
      {
        source: '/playground',
        destination: '/awell-orchestration/developer-tools/api/playground',
        permanent: true,
      },
      {
        source: '/awell-orchestration/developer-tools/playground',
        destination: '/awell-orchestration/developer-tools/api/playground',
        permanent: true,
      },
      {
        source: '/awell-orchestration/developer-tools/schema',
        destination: '/awell-orchestration/developer-tools/api/schema',
        permanent: true,
      },
      {
        source: '/awell-orchestration/developer-tools/webhook-builder',
        destination:
          '/awell-orchestration/developer-tools/webhooks/webhook-builder',
        permanent: true,
      },
      {
        source: '/awell-orchestration/developer-tools/e164-phone-validation',
        destination:
          '/awell-orchestration/developer-tools/api/e164-phone-validation',
        permanent: true,
      },
      {
        source:
          '/awell-orchestration/docs/going-live/sandbox-to-production-migration-guide',
        destination:
          '/awell-orchestration/docs/going-live/sandbox-to-production-promotion-guide',
        permanent: true,
      },
      {
        source: '/request-migration',
        destination: 'request-promotion',
        permanent: true,
      },
      {
        source: '/awell-orchestration/docs/activities/hosted-pathway',
        destination:
          '/awell-orchestration/docs/activities/awell-hosted-pages/hosted-pathway-guide',
        permanent: true,
      },
      {
        source: '/awell-extensions/beta',
        destination: '/awell-extensions',
        permanent: false,
      },
    ]
  },
}

module.exports = withBundleAnalyzer(withTM(nextConfig))
