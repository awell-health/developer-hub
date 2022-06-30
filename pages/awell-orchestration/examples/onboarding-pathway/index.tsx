import { CodeIcon } from '@heroicons/react/outline'
import { useEffect, useState } from 'react'

import { AwellActivity } from '../../../../src/components/AwellActivity'
import { Button } from '../../../../src/components/Button'
import { SEO } from '../../../../src/components/SEO'
import { Spinner } from '../../../../src/components/Spinner'
import { usePathwayActivities } from '../../../../src/hooks/awell-orchestration/usePathwayActivities'
import { useStartPathway } from '../../../../src/hooks/awell-orchestration/useStartPathway'
import { type Activity } from '../../../../src/types/generated/api.types'
import { isPathwayCompleted } from '../../../../src/utils/pathway'

const Pathway = ({
  patientId,
  pathwayId,
}: {
  patientId: string
  pathwayId: string
}) => {
  const { activities, startPolling, stopPolling } =
    usePathwayActivities(pathwayId)
  const [currentPendingUserActivity, setCurrentPendingUseractivity] =
    useState<Activity | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const [ignoredActivities, setIgnoredActivities] = useState<string[]>([])

  const onActivityCompleted = () => {
    /**
     * We cannot mark messages as read that are not for the patient in an
     * onboarding flow. If we want to make sure we can go through an onboarding
     * flow where there are messages that are NOT assigned to the patient, then
     * we need to make sure we ignore them.
     */
    if (
      currentPendingUserActivity?.object.type === 'MESSAGE' &&
      currentPendingUserActivity?.indirect_object?.type !== 'PATIENT'
    ) {
      setIgnoredActivities([
        ...ignoredActivities,
        currentPendingUserActivity.id,
      ])
    }
    setCurrentPendingUseractivity(null)
  }

  useEffect(() => {
    const pathwayCompleted = isPathwayCompleted(
      activities || [],
      ignoredActivities
    )

    if (pathwayCompleted) {
      setIsCompleted(true)
      return
    }

    const firstPendingUserActivity = activities?.find(
      (activity) =>
        activity.status === 'ACTIVE' &&
        !ignoredActivities.includes(activity.id) &&
        ['MESSAGE', 'FORM', 'CHECKLIST'].includes(activity.object.type)
    )

    if (firstPendingUserActivity) {
      setCurrentPendingUseractivity(firstPendingUserActivity)
    }
  }, [activities, ignoredActivities])

  /**
   * Stop polling for activities when there's a pending user activity
   * or when pathway is completed
   */
  useEffect(() => {
    if (currentPendingUserActivity || isCompleted) {
      stopPolling()
    }
  }, [currentPendingUserActivity, isCompleted])

  /**
   * Start polling for activities on initial render
   */
  useEffect(() => {
    if (!currentPendingUserActivity) {
      startPolling(1000)
    }
  }, [startPolling, currentPendingUserActivity])

  if (!currentPendingUserActivity)
    return (
      <div>
        {!currentPendingUserActivity && !isCompleted && (
          <Spinner message="Loading next user activity" />
        )}
        {isCompleted && (
          <div className="max-w-3xl mx-auto">
            <div className="max-w-xl mx-auto">
              <h1 className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                Hooray!
              </h1>
              <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Pathway completed
              </p>
              <p className="mt-2 text-base text-gray-500">
                You completed the onboarding pathway
              </p>
            </div>
          </div>
        )}
      </div>
    )

  return (
    <div>
      <AwellActivity
        activity={currentPendingUserActivity}
        onActivityCompleted={onActivityCompleted}
        patientId={patientId}
      />
    </div>
  )
}

export default function OnboardingExample() {
  /**
   * For the demo, we always start the onboarding pathway for the same patient.
   * For final implementation, you should first call the `createPatient` mutation
   * and use the patient id returned in the response.
   */
  const PATIENT_ID = 'Gh6m6f_WxD0HMQkRmfMS-'
  const PATHWAY_DEFINITION_ID = 'fSw1-GkU98HJ'

  const { startPathway } = useStartPathway()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [createdPathway, setCreatedPathway] = useState<string | null>(null)

  const onPathwayStart = async () => {
    setIsLoading(true)
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
        url={`/awell-orchestration/examples/onboarding-pathway`}
        canonicalUrl={`/awell-orchestration/examples/onboarding-pathway`}
      />
      <div className="bg-indigo-600">
        <div className="max-w-6xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap">
            <div className="w-0 flex-1 flex items-center">
              <span className="flex p-2 rounded-lg bg-indigo-800">
                <CodeIcon className="h-6 w-6 text-white" aria-hidden="true" />
              </span>
              <p className="ml-3 font-medium text-white truncate">
                <span>Onboarding pathway example</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 mt-8 mb-32 text-center mt-24">
        {isLoading && <Spinner message="Getting started..." />}
        {!isLoading && (
          <div>
            {!createdPathway && (
              <Button
                label="Get Started"
                color="indigo"
                size="xl"
                onClick={() => onPathwayStart()}
              />
            )}
            {createdPathway && (
              <Pathway pathwayId={createdPathway} patientId={PATIENT_ID} />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
