import { Code } from '../../Docs/atoms/Code'

interface ResponseProps {
  response: unknown
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

// import dynamic from 'next/dynamic'

// interface ResponseProps {
//   response: object
// }
// export const Response = ({ response }: ResponseProps) => {
//   const DynamicReactJson = dynamic(import('react-json-view'), { ssr: false })

//   return (
//     <div>
//       <div className="pb-2 text-md font-medium tracking-wide">Response</div>
//       <div className="text-xs">
//         <DynamicReactJson src={response} collapsed={1} name={null} />
//       </div>
//     </div>
//   )
// }
