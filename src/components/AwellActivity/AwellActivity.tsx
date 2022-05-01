import { type Activity } from '../../types/generated/api.types'
import { Form } from './Form'
import { Message } from './Message'

interface AwellActivityProps {
  activity: Activity
  onActivityCompleted: () => void
}

export const AwellActivity = ({
  activity,
  onActivityCompleted,
}: AwellActivityProps) => {
  const type = activity.object.type

  if (type === 'FORM') {
    return (
      <div>
        <Form
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
          messageActivity={activity}
          onActivityCompleted={onActivityCompleted}
        />
      </div>
    )
  }

  return <div>{`Rendering activity of type ${type} is not yet supported.`}</div>
}
