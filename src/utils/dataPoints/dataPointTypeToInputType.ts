export const dataPointTypeToInputType = (dataPointType: string): string => {
  if (dataPointType === 'NUMBER') return 'number'
  if (dataPointType === 'STRING') return 'text'
  if (dataPointType === 'DATE') return 'date'

  throw new Error(`Unknown datapoint type ${dataPointType}.`)
}
