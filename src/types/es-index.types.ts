type EsIndexPropertyType = {
  property: string
  type: string
  description?: string
}

export type EsIndexType = Array<EsIndexPropertyType>
