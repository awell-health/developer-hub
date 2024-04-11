import { Code } from '../../Docs/atoms/Code'

interface ResponseProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: any
}
export const Response = ({ response }: ResponseProps) => {
  return (
    <div>
      <div className="pb-2 text-md font-medium tracking-wide">Response</div>
      <div className="text-xs">
        <Code className="language-json" numberOfLinesPreview={30}>
          {JSON.stringify(response, null, 2)}
        </Code>
      </div>
    </div>
  )
}
