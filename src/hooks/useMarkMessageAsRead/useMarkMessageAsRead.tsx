import { useMutation } from '@apollo/client'

import { type Activity } from '../../types/generated/api.types'
import { MARK_MESSAGE_AS_READ } from './graphql/message.graphql'

type MessageInput = {
  activityId: string
  userId: string
}

interface UseMarkMessageAsReadHook {
  markMessageAsRead: ({ activityId, userId }: MessageInput) => Promise<Activity>
}

export const useMarkMessageAsRead = (): UseMarkMessageAsReadHook => {
  const [markMessageAsReadMutation] = useMutation(MARK_MESSAGE_AS_READ)

  const markMessageAsRead = async ({ activityId, userId }: MessageInput) => {
    try {
      const { data } = await markMessageAsReadMutation({
        variables: {
          input: {
            activity_id: activityId,
          },
        },
        context: {
          headers: {
            'X-User-ID': userId || '',
          },
        },
      })
      return data.markMessageAsRead.activity
    } catch (err) {
      console.log(err)
    }
  }

  return { markMessageAsRead }
}
