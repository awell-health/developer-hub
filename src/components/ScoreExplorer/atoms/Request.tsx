import { omit } from 'lodash'
import { Code } from '../../Docs/atoms/Code'
import { RequestType } from '@/types/restExplorer.types'

interface RequestProps {
  request: RequestType
}
export const Request = ({ request }: RequestProps) => {
  const req = {
    endpoint: request?.endpointLabel,
    ...omit(request, ['endpoint', 'endpointLabel']),
  }
  return (
    <div>
      <div className="pb-2 text-md font-medium tracking-wide">Request</div>
      <div className="text-xs">
        <Code className="language-json">{JSON.stringify(req, null, 2)}</Code>
      </div>
    </div>
  )
}
