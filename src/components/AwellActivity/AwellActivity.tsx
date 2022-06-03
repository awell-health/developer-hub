import { type Activity } from '../../types/generated/api.types'
import { ApiCall } from './ApiCall'
import { FormContainer } from './Form'
import { Message } from './Message'

interface AwellActivityProps {
  activity: Activity
  patientId: string
  onActivityCompleted: () => void
}

export const AwellActivity = ({
  activity,
  patientId,
  onActivityCompleted,
}: AwellActivityProps) => {
  const type = activity.object.type

  if (type === 'FORM') {
    return (
      <div>
        <FormContainer
          formActivity={activity}
          onActivityCompleted={onActivityCompleted}
        />
      </div>
    )
  }

  if (type === 'MESSAGE') {
    return (
      <div>
        <Message
          patientId={patientId}
          messageActivity={activity}
          onActivityCompleted={onActivityCompleted}
        />
      </div>
    )
  }

  if (type === 'API_CALL') {
    return (
      <div>
        <ApiCall
          apiCallActivity={activity}
          onActivityCompleted={onActivityCompleted}
        />
      </div>
    )
  }

  return <div>{`Rendering activity of type ${type} is not yet supported.`}</div>
}
