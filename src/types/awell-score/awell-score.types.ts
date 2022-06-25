export type AvailableLanguages = 'nl' | 'fr' | 'en' | 'de'

export type LabelType = {
  [key in AvailableLanguages]: string
}

export type InputTypes =
  | 'boolean'
  | 'number'
  | 'string'
  | 'date'
  | 'numbers_array'
  | 'strings_array'

export type BooleanInputType = {
  type: 'boolean'
  allowed_answers?: Array<{
    value: boolean
    label?: LabelType
  }>
}

export type DateInputType = {
  type: 'date'
}

type NumberComponentTypes = 'slider'

export type NumberInputType = {
  type: 'number'
  component?: NumberComponentTypes
  allowed_answers?: Array<{
    value: number
    label?: LabelType
  }>
  range?: {
    min: { value: number; label?: LabelType }
    max: { value: number; label?: LabelType }
  }
}

export type NumbersArrayInputType = {
  type: 'numbers_array'
  allowed_answers?: Array<{
    value: number
    label?: LabelType
  }>
}

export type StringInputType = {
  type: 'string'
  allowed_answers?: Array<{
    value: string
    label?: LabelType
  }>
}

export type StringsArrayInputType = {
  type: 'strings_array'
  allowed_answers?: Array<{
    value: string
    label?: LabelType
  }>
}

export type CalculationParameterInputType =
  | BooleanInputType
  | StringsArrayInputType
  | StringInputType
  | DateInputType
  | NumbersArrayInputType
  | NumberInputType

export type CalculationInputType =
  | {
      [key: string]: string | number
    }
  | Record<string, never>

export type CalculationIdentifierType = string

export type CalculationParameter = {
  id: string
  label?: LabelType
  input_type: CalculationParameterInputType
  format?: string
  info?: LabelType
}

export type CalculationOutputDefinition = {
  subresult_id: string
  label: LabelType
  type: 'number' | 'date' | 'string'
  unit?: LabelType
  interpretation?: LabelType
}

export type CalculationBlueprintType = {
  input_definition: CalculationParameter[]
  output_definition: CalculationOutputDefinition[]
}

export type CalculationType = {
  calculation_id: string
  calculation_name: LabelType
  calculation_description: LabelType
  calculation_blueprint: CalculationBlueprintType
  is_private: boolean
}

export type CalculationResultsType = {
  subresult_id: string
  label: LabelType
  result: string | number
  type: 'number' | 'date' | 'string'
  unit?: LabelType
  status: 'CALCULATED' | 'NOT APPLICABLE' | 'MISSING'
  interpretation?: LabelType
}

export type CalculationsLibraryType = CalculationType[]

export type InvalidInputType = {
  input_id: string
  input_type: CalculationParameterInputType
  passed_answer: unknown
  reason?: LabelType
}

export type SimulatedCalculationResultsType = {
  simulated_calculation_input: CalculationInputType
  simulated_calculation_results: CalculationResultsType[]
}

export type CsvUploadedResponseType = {
  filePath: string
  fileName: string
}

export type ApiErrorType =
  | {
      name: string
      message: string
      invalid_inputs: InvalidInputType[]
    }
  | Record<string, never>
