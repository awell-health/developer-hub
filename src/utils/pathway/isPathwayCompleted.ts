import { type Activity } from '../../types/generated/api.types'

export const isPathwayCompleted = (activities: Activity[]): boolean => {
  const pathwayCompletedActivity = activities.find(
    (activity) =>
      activity.object.type === 'PATHWAY' &&
      activity.status === 'DONE' &&
      activity.action === 'COMPLETE'
  )

  if (pathwayCompletedActivity) return true

  return false
}
