import { CodeIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import { useState } from 'react'

import { Button } from '../../../src/components/Button'
import { SEO } from '../../../src/components/SEO'
import { Spinner } from '../../../src/components/Spinner'
import { usePathwayActivities } from '../../../src/hooks/usePathwayActivities'
import { useStartPathway } from '../../../src/hooks/useStartPathway'

export default function OnboardingExample() {
  /**
   * For the demo, we always start the onboarding pathway for the same patient.
   * For final implementation, you should first call the `createPatient` mutation
   * and use the patient id returned in the response.
   */
  const PATIENT_ID = 'Gh6m6f_WxD0HMQkRmfMS-'
  const PATHWAY_DEFINITION_ID = '3v5cU-hvyeGp'

  const { startPathway } = useStartPathway()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingMessage, setIsLoadingMessage] = useState<string>('')
  const [createdPathway, setCreatedPathway] = useState<string | null>(null)
  const { activities } = usePathwayActivities(
    createdPathway ? createdPathway : ''
  )

  console.log(activities)

  const onPathwayStart = async () => {
    setIsLoading(true)
    setIsLoadingMessage('Starting pathway...')
    const pathway = await startPathway({
      patient_id: PATIENT_ID,
      pathway_definition_id: PATHWAY_DEFINITION_ID,
    })
    setCreatedPathway(pathway)
    setIsLoading(false)
  }

  return (
    <div className="h-screen">
      <SEO
        title="Onboarding Pathway | Examples"
        url={`/examples/onboarding-pathway`}
        canonicalUrl={`/examples/onboarding-pathway`}
      />
      <div className="bg-indigo-600">
        <div className="max-w-6xl px-3 py-3 mx-auto sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center flex-1 w-0">
              <span className="flex p-2 bg-indigo-800 rounded-lg">
                <CodeIcon className="w-6 h-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span>Onboarding pathway example</span>
              </p>
            </div>
            <div className="flex-shrink-0 order-3 w-auto w-full">
              <Link href="/docs/tutorials/onboarding">
                <a className="flex items-center justify-center px-4 py-2 text-sm font-medium text-indigo-600 bg-white border border-transparent rounded-md shadow-sm hover:bg-indigo-50">
                  Read guide
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl px-4 mx-auto mt-8 mt-24 mb-32 text-center sm:px-6 md:px-8">
        {isLoading && <Spinner message={isLoadingMessage} />}
        {!isLoading && (
          <div>
            {!createdPathway && (
              <Button
                label="Start onboarding pathway"
                color="indigo"
                size="xl"
                onClick={() => onPathwayStart()}
              />
            )}
            {createdPathway && <div>{createdPathway}</div>}
          </div>
        )}
      </div>
    </div>
  )
}