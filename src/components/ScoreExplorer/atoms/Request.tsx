import { Code } from '../../Docs/atoms/Code'

interface RequestProps {
  request: object
}
export const Request = ({ request }: RequestProps) => {
  return (
    <div>
      <div className="pb-2 text-md font-medium tracking-wide">Request</div>
      <div className="text-xs">
        <Code className="language-json">
          {JSON.stringify(request, null, 2)}
        </Code>
      </div>
    </div>
  )
}
