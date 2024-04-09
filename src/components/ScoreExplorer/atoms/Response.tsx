import { AdvancedCodeBlock } from '../../Docs/atoms/Code'

interface ResponseProps {
  response: unknown
}
export const Response = ({ response }: ResponseProps) => {
  return (
    <div>
      <div className="pb-2 text-md font-medium tracking-wide">Response</div>
      <div className="text-xs">
        <AdvancedCodeBlock className="language-json" numberOfLinesPreview={30}>
          {JSON.stringify(response, null, 2)}
        </AdvancedCodeBlock>
      </div>
    </div>
  )
}
