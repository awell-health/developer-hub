import { useQuery } from '@apollo/client'

import { Message } from '../../types/generated/api.types'
import { MESSAGE } from './graphql/message.graphql'

interface UseMessage {
  messageId: string
}

interface UseMessageResponse {
  loading: boolean
  message?: Message
}

export const useMessage: (input: UseMessage) => UseMessageResponse = ({
  messageId,
}) => {
  const { data, loading, error } = useQuery(MESSAGE, {
    variables: { id: messageId },
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
