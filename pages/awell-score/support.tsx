import { ReactNode } from 'react'

import { DocsHeader } from '../../src/components/Docs/atoms'
import { DocsLayoutWithoutToc } from '../../src/components/Layouts'
import { SEO } from '../../src/components/SEO'

export default function Community() {
  return (
    <div>
      <SEO
        title="Support"
        url={`/awell-score/support`}
        canonicalUrl={`/awell-score/support`}
      />
      <DocsHeader heading="Support" title="Help when you need it" />
      <div id="content-wrapper">
        <p>
          We truely value developer experience and are constantly updating our
          documentation. {`Don't`} hesitate to get in touch with us directly
          for:
        </p>
        <ul>
          <li>
            <u>Documentation:</u> missing or incorrect documentation,
            suggestions, or maybe additional material you would like to see
          </li>
          <li>
            <u>Questions & advice:</u> send us a message via Intercom
          </li>
          <li>
            <u>Bugs:</u> if you have issues you believe are due to a bug in the
            API
          </li>
        </ul>
        <blockquote>
          <p>
            <strong>Tip:</strong> If you {`didn't`} find what you were looking
            for, try searching the docs first.
          </p>
        </blockquote>
        <h2 id="request-a-calculation">Request a calculation</h2>
        <p>
          We welcome suggestions for calculations to add — let us know via
          Intercom and we will be happy to help you.
        </p>
        <p>
          Please include a citation or reference when submitting a calculation
          or score.
        </p>
        <h2 id="intercom">Intercom</h2>
        <p>
          Get fast, helpful support via our chat. Send us a direct message via
          Intercom (bottom right corner of the screen) and we will get back to
          you asap.
        </p>
      </div>
    </div>
  )
}

Community.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayoutWithoutToc>{page}</DocsLayoutWithoutToc>
}
