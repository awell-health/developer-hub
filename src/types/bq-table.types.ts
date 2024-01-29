type BQColumnType = {
  property: string
  type: string
  description?: string
}

export type BQTableType = Array<BQColumnType>
