import { useMutation, useQuery } from '@apollo/client'

import { Message } from '../../types/generated/api.types'
import { MARK_MESSAGE_AS_READ, MESSAGE } from './graphql/message.graphql'

interface UseMessage {
  activityId: string
  messageId: string
}

interface UseMessageResponse {
  loading: boolean
  message?: Message
}

export const useMessage: (input: UseMessage) => UseMessageResponse = ({
  activityId,
  messageId,
}) => {
  const [markMessageAsReadMutation] = useMutation(MARK_MESSAGE_AS_READ)

  const handleReadMessage = async () => {
    try {
      await markMessageAsReadMutation({
        variables: {
          input: {
            activity_id: activityId,
          },
        },
      })
    } catch (err) {
      console.log(err)
    }
  }

  const { data, loading, error } = useQuery(MESSAGE, {
    variables: { id: messageId },
    onCompleted: handleReadMessage,
  })

  if (loading) {
    return { loading: true }
  }

  if (error) {
    console.log(error)
    throw error
  }

  return { loading, message: data.message.message }
}
