import { useMarkMessageAsRead } from '../../../hooks/awell-orchestration/useMarkMessageAsRead'
import { useMessage } from '../../../hooks/awell-orchestration/useMessage'
import { type Activity } from '../../../types/generated/api.types'
import { MessageSkeleton } from '../../Skeleton'

interface MessageProps {
  messageActivity: Activity
  patientId: string
  onActivityCompleted: () => void
}

export const Message = ({
  messageActivity,
  patientId,
  onActivityCompleted,
}: MessageProps) => {
  const { message, loading } = useMessage({
    messageId: messageActivity.object.id,
  })
  const { markMessageAsRead } = useMarkMessageAsRead()

  const handleOnClick = async () => {
    const updatedMessageActivity = await markMessageAsRead({
      activityId: messageActivity.id,
      userId: patientId,
    })
    if (updatedMessageActivity.status === 'DONE') {
      onActivityCompleted()
    }
  }

  if (loading) return <MessageSkeleton />

  return (
    <div className="text-lg max-w-prose mx-auto">
      <h1>
        <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
          Message
        </span>
        <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {message?.subject}
        </span>
      </h1>
      <div
        className="text-left mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto"
        dangerouslySetInnerHTML={{ __html: message?.body || '' }}
      />
      <div className="mt-12 flex flew-row flex-row-reverse">
        <button
          onClick={() => handleOnClick()}
          className="cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
        </button>
      </div>
    </div>
  )
}
