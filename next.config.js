/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

// eslint-disable-next-line @typescript-eslint/no-var-requires
const legacyRedirects = require('./redirects.json')

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
  // Legacy Developer Hub URLs now live on docs.awellhealth.com.
  //
  // These run here rather than in Cloudflare Bulk Redirects because this domain is DNS-only
  // (grey cloud) in Cloudflare — it resolves straight to Vercel, so Cloudflare's edge never sees
  // the request and no Cloudflare rule can fire on it. The redirect has to live where the traffic
  // actually lands.
  //
  // Generated, not hand-maintained: 244 legacy-to-docs mappings from awell-docs
  // (migration/redirects/03-dev-docs.csv, itself derived from migration/link-map.csv) merged with
  // the 27 redirects previously inlined here. Every chain was resolved to a single hop — several
  // old entries pointed at a newer Developer Hub URL, which would then have redirected again, and
  // three pointed at a help.awellhealth.com article that Cloudflare now redirects a third time.
  //
  // Keep this deployment alive indefinitely. If it stops answering, the 301s stop being served and
  // the accumulated search authority on these URLs is lost rather than passed to the new site.
  async redirects() {
    return legacyRedirects
  },
}

module.exports = withBundleAnalyzer(nextConfig)
