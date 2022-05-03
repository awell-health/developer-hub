import { type Activity } from '../../types/generated/api.types'

export const isPathwayCompleted = (
  activities: Activity[],
  ignoredActivities: string[]
): boolean => {
  const pathwayCompletedActivity = activities.find(
    (activity) =>
      activity.object.type === 'PATHWAY' &&
      activity.status === 'DONE' &&
      activity.action === 'COMPLETE'
  )

  const activeActivities = activities.find(
    (activity) =>
      activity.status === 'ACTIVE' && !ignoredActivities.includes(activity.id)
  )

  if (pathwayCompletedActivity && !activeActivities) return true

  return false
}
