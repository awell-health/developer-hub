import { ReactNode } from 'react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

import { DocsHeader } from '@/components/Docs/atoms'
import { DocsLayout } from '@/components/Layouts'
import { SEO } from '@/components/SEO'
import { TOC } from '@/components/TOC'

const BenchmarkChart = ({
  data,
}: {
  data: {
    rps: string
    average_response_time: number
    '95p_response_time': number
  }[]
}) => {
  return (
    <div className="w-full h-96 dark:fill-slate-100">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={600}
          height={350}
          data={data}
          margin={{ top: 5, right: 20, bottom: 40, left: 0 }}
        >
          <Line
            type="linear"
            dataKey="average_response_time"
            name="Average response time"
            stroke="#8884d8"
          />
          <Line
            type="linear"
            dataKey="95p_response_time"
            name="95p response time"
            stroke="#82ca9d"
          />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis
            dataKey="rps"
            label={{
              value: 'Requests per second',
              position: 'insideBottom',
              offset: -30,
            }}
          />
          <YAxis
            label={{
              value: 'Response time (ms)',
              angle: -90,
              position: 'insideLeft',
            }}
          />
          <Legend verticalAlign="top" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default function BenchmarkDocument() {
  return (
    <>
      <SEO
        title="Orchestration API benchmark"
        url={`/awell-orchestration/documents/orchestration-api-benchmark`}
        canonicalUrl={`/awell-orchestration/documents/orchestration-api-benchmark`}
        preventCrawling={true}
      />
      <DocsHeader
        heading="Documents"
        title="Orchestration API benchmark"
        description="This benchmark is meant to document the horizontal scalability of Awell Systems by measuring the responsiveness of the API."
        githubUrl="/pages/awell-orchestration/documents/orchestration-api-benchmark.tsx"
      />
      <div>
        <div id="content-wrapper">
          <p>
            For the purposes of this test we used a separate environment that
            mirrors our production environment. We took this environment through
            3 steps of scale: from 1 node for each relevant service to 3 and
            then 5 nodes.
          </p>
          <p>
            For each scale step we load tested the Awell Orchestration API up to
            the point the API response time surpassed 500ms - as our target is
            to always offer under 500ms response time.
          </p>
          <h2 id="response-time">Response time</h2>
          <h3 id="1-node">1 node</h3>
          <BenchmarkChart
            data={[
              {
                rps: '50rps',
                average_response_time: 43.47,
                '95p_response_time': 48.97,
              },
              {
                rps: '100rps',
                average_response_time: 54.9,
                '95p_response_time': 141.39,
              },
              {
                rps: '150rps',
                average_response_time: 97.94,
                '95p_response_time': 398.03,
              },
              {
                rps: '200rps',
                average_response_time: 850.75,
                '95p_response_time': 2008,
              },
            ]}
          />
          <p>
            This is a the base of the test where we deployed only one instance
            of each of our services.
          </p>
          <p>
            As expected the system reached it limit relatively fast, at 150
            requests per second. From this point on the system response times
            spike to an average of 800ms with requests taking up to 2000ms to
            get a response.
          </p>
          <h3 id="3-nodes">3 nodes</h3>
          <blockquote>
            By default, our services are running on 3 nodes.
          </blockquote>
          <BenchmarkChart
            data={[
              {
                rps: '50rps',
                average_response_time: 44.47,
                '95p_response_time': 55.97,
              },
              {
                rps: '100rps',
                average_response_time: 44.56,
                '95p_response_time': 63.26,
              },
              {
                rps: '150rps',
                average_response_time: 48.83,
                '95p_response_time': 88.68,
              },
              {
                rps: '200rps',
                average_response_time: 70.91,
                '95p_response_time': 198.05,
              },
              {
                rps: '250rps',
                average_response_time: 626.23,
                '95p_response_time': 2690,
              },
            ]}
          />
          <p>
            By increasing the deployment to 3 nodes of each service we already
            see an improvement of the performance.
          </p>
          <p>
            At 3 nodes the system can already process more than 200 requests per
            second with response times well under 100ms.
          </p>
          <p>
            As expected, we see an increase of the response times with 200-250
            requests per second, averaging at 600ms with spikes up to 2500ms.
          </p>

          <h3 id="5-nodes">5 nodes</h3>
          <BenchmarkChart
            data={[
              {
                rps: '50rps',
                average_response_time: 43.38,
                '95p_response_time': 53.3,
              },
              {
                rps: '100rps',
                average_response_time: 44.03,
                '95p_response_time': 54.81,
              },
              {
                rps: '150rps',
                average_response_time: 43.84,
                '95p_response_time': 60.45,
              },
              {
                rps: '200rps',
                average_response_time: 46.23,
                '95p_response_time': 73.59,
              },
              {
                rps: '250rps',
                average_response_time: 54.45,
                '95p_response_time': 111.76,
              },
              {
                rps: '300rps',
                average_response_time: 68.16,
                '95p_response_time': 159.48,
              },
              {
                rps: '350rps',
                average_response_time: 90.81,
                '95p_response_time': 242.9,
              },
              {
                rps: '400rps',
                average_response_time: 188.34,
                '95p_response_time': 561.99,
              },
            ]}
          />
          <p>
            Finally, to prove the horizontal scalability of the Awell system we
            tested against at 5 node deployment.
          </p>
          <p>
            As observable at 400 requests per second, the system is still
            responding in average well under 200ms and even the spikes are
            averaged around 500ms.
          </p>
          <p>
            This concludes that Awell Orchestration API is scaling horizontally
            and can guarantee under 500ms response time in average.
          </p>
        </div>
      </div>
      <div className="fixed z-20 top-[6.5rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block">
        <h5 className="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100">
          On this page
        </h5>
        <TOC
          toc={[
            { title: 'Response time', link: '#response-time', level: 'h2' },
            { title: '1 node', link: '#1-node', level: 'h3' },
            { title: '3 nodes', link: '#3-nodes', level: 'h3' },
            { title: '5 nodes', link: '#5-nodes', level: 'h3' },
          ]}
        ></TOC>
      </div>
    </>
  )
}

BenchmarkDocument.getLayout = function getLayout(page: ReactNode) {
  return <DocsLayout withSidebar={false}>{page}</DocsLayout>
}
