import { type Activity } from '../../../types/generated/api.types'

interface ApiCallProps {
  apiCallActivity: Activity
  onActivityCompleted: () => void
}

export const ApiCall = ({ apiCallActivity }: ApiCallProps) => {
  return (
    <div className="text-lg max-w-prose mx-auto">
      <p>
        Waiting for API call action (action title &quot;
        {apiCallActivity.object.name}
        &quot;) response
      </p>
    </div>
  )
}
