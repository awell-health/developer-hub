import { omit } from 'lodash'

import { RequestType } from '@/types/restExplorer.types'

import { AdvancedCodeBlock } from '../../Docs/atoms/Code'

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
        <AdvancedCodeBlock className="language-json">
          {JSON.stringify(req, null, 2)}
        </AdvancedCodeBlock>
      </div>
    </div>
  )
}
