/** @type {import('next').NextConfig} */

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
        source:
          '/awell-orchestration/docs/going-live/sandbox-to-production-promotion-guide',
        destination:
          'https://help.awellhealth.com/en/articles/11104378-promotion-and-go-live',
        permanent: true,
      },
      {
        source: '/awell-orchestration/docs/going-live/preflight-checklist',
        destination:
          'https://help.awellhealth.com/en/articles/11104378-promotion-and-go-live',
        permanent: true,
      },
      {
        source: '/request-promotion',
        destination:
          'https://help.awellhealth.com/en/articles/11104378-promotion-and-go-live',
        permanent: true,
      },
      {
        source: '/awell-orchestration',
        destination:
          '/awell-orchestration/docs/getting-started/orchestration-introduction',
        permanent: false,
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
      // Pathway to Care Flow redirects
      // Queries
      {
        source: '/awell-orchestration/api-reference/queries/get-pathways',
        destination: '/awell-orchestration/api-reference/queries/get-care-flows',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/queries/get-published-pathways',
        destination: '/awell-orchestration/api-reference/queries/get-published-care-flows',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/queries/get-patient-pathways',
        destination: '/awell-orchestration/api-reference/queries/get-patient-care-flows',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/queries/get-pathway',
        destination: '/awell-orchestration/api-reference/queries/get-care-flow',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/queries/get-pathway-data-points',
        destination: '/awell-orchestration/api-reference/queries/get-care-flow-data-points',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/queries/get-pathway-elements',
        destination: '/awell-orchestration/api-reference/queries/get-care-flow-elements',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/queries/get-pathway-activities',
        destination: '/awell-orchestration/api-reference/queries/get-care-flow-activities',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/queries/get-forms-in-pathway',
        destination: '/awell-orchestration/api-reference/queries/get-forms-in-care-flow',
        permanent: true,
      },
      // Mutations
      {
        source: '/awell-orchestration/api-reference/mutations/delete-pathway',
        destination: '/awell-orchestration/api-reference/mutations/delete-care-flow',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/mutations/start-pathway',
        destination: '/awell-orchestration/api-reference/mutations/start-care-flow',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/mutations/stop-pathway',
        destination: '/awell-orchestration/api-reference/mutations/stop-care-flow',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/mutations/start-pathway-and-hosted-pages-session',
        destination: '/awell-orchestration/api-reference/mutations/start-care-flow-and-hosted-pages-session',
        permanent: true,
      },
      // Webhooks
      {
        source: '/awell-orchestration/api-reference/webhooks/pathway-started',
        destination: '/awell-orchestration/api-reference/webhooks/care-flow-started',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/webhooks/pathway-stopped',
        destination: '/awell-orchestration/api-reference/webhooks/care-flow-stopped',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/webhooks/pathway-deleted',
        destination: '/awell-orchestration/api-reference/webhooks/care-flow-deleted',
        permanent: true,
      },
      {
        source: '/awell-orchestration/api-reference/webhooks/pathway-completed',
        destination: '/awell-orchestration/api-reference/webhooks/care-flow-completed',
        permanent: true,
      },
    ]
  },
}

module.exports = withBundleAnalyzer(nextConfig)
