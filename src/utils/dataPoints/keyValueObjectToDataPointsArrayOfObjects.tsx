import { type DataPointInput } from '../../types/generated/api.types'

export const keyValueObjectToDataPointsArrayOfObjects = (obj: {
  [key in string]: string
}): Array<DataPointInput> =>
  Object.entries(obj).map((item) => ({
    data_point_definition_id: item[0],
    value: item[1],
  }))
