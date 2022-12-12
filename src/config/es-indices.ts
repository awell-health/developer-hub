import { type EsIndexType } from '@/types/es-index.types'

export const datapoint: EsIndexType = [
  {
    property: 'value',
    type: 'string',
    description: 'Serialised value of the data point',
  },
  {
    property: 'value_type',
    type: 'string',
    description:
      'Primitive type of the value before serialisation (boolean, date, number, string)',
  },
  {
    property: 'data_point_definition.category',
    type: 'string',
    description: 'How the data point was collected (form, calculation, etc)',
  },
  {
    property: 'data_point_definition.qualified_key',
    type: 'string',
    description: 'User-configured identifier for the data point',
  },
  {
    property: 'date',
    type: 'date',
    description: 'Collection date (UTC)',
  },
  {
    property: 'data_set_id',
    type: 'string',
    description:
      'Identifier of the pathway in which the data point was collected',
  },
  {
    property: 'activity_id',
    type: 'string',
    description:
      'Identifier of the activity in which the data point was collected',
  },
]

export const pathway: EsIndexType = [
  {
    property: 'id',
    type: 'string',
    description: '',
  },
  {
    property: 'pathway_definition_id',
    type: 'string',
    description: '',
  },
  {
    property: 'release_id',
    type: 'string',
    description: '',
  },
  {
    property: 'patient_id',
    type: 'string',
    description: '',
  },
  {
    property: 'start_date',
    type: 'date',
    description: '',
  },
  {
    property: 'status',
    type: 'string',
    description: '',
  },
]

export const step: EsIndexType = [
  {
    property: 'id',
    type: 'string',
    description: '',
  },
  {
    property: 'pathway_definition_id',
    type: 'string',
    description: '',
  },
  {
    property: 'release_id',
    type: 'string',
    description: '',
  },
  {
    property: 'status',
    type: 'string',
    description: '',
  },
  {
    property: 'scheduled_date',
    type: 'date',
    description: '',
  },
  {
    property: 'activation_date',
    type: 'date',
    description: '',
  },
  {
    property: 'completion_date',
    type: 'date',
    description: '',
  },
]

export const activity: EsIndexType = [
  {
    property: 'id',
    type: 'string',
    description: '',
  },
  {
    property: 'stream_id',
    type: 'string',
    description: '',
  },
  {
    property: 'subject.type',
    type: 'string',
    description: '',
  },
  {
    property: 'subject.name',
    type: 'string',
    description: '',
  },
  {
    property: 'action',
    type: 'string',
    description: '',
  },
  {
    property: 'object.id',
    type: 'string',
    description: '',
  },
  {
    property: 'object.type',
    type: 'string',
    description: '',
  },
  {
    property: 'object.name',
    type: 'string',
    description: '',
  },
  {
    property: 'indirect_object.id',
    type: 'string',
    description: '',
  },
  {
    property: 'indirect_object.type',
    type: 'string',
    description: '',
  },
  {
    property: 'indirect_object.name',
    type: 'string',
    description: '',
  },
  {
    property: 'status',
    type: 'string',
    description: '',
  },
  {
    property: 'resolution',
    type: 'string',
    description: '',
  },
  {
    property: 'date',
    type: 'date',
    description: '',
  },
]
