import { type EsIndexType } from '@/types/es-index.types'

export const datapoint: EsIndexType = [
  {
    property: 'id',
    type: 'string',
    description: 'Unique identifier of the data point',
  },
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
]

export const pathway: EsIndexType = [
  {
    property: 'id',
    type: 'string',
    description: 'Unique identifier of the pathway',
  },
  {
    property: 'pathway_definition_id',
    type: 'string',
    description: 'Identifier of the related pathway definition (version agnostic)',
  },
  {
    property: 'release_id',
    type: 'string',
    description: 'Identifier of the published pathway definition (version specific)',
  },
  {
    property: 'patient_id',
    type: 'string',
    description: 'Identifier of the patient',
  },
  {
    property: 'start_date',
    type: 'date',
    description: 'Starting date of the pathway in UTC',
  },
  {
    property: 'complete_date',
    type: 'date',
    description: 'Completion date of the pathway in UTC',
  },
  {
    property: 'status',
    type: 'string',
    description: 'Current status of the pathway',
  },
]

export const step: EsIndexType = [
  {
    property: 'id',
    type: 'string',
    description: 'Unique identifier of the step',
  },
  {
    property: 'pathway_definition_id',
    type: 'string',
    description: 'Identifier of the related pathway definition (version agnostic)',
  },
  {
    property: 'release_id',
    type: 'string',
    description: 'Identifier of the published pathway definition (version specific)',
  },
  {
    property: 'status',
    type: 'string',
    description: 'Current step status',
  },
  {
    property: 'scheduled_date',
    type: 'date',
    description: 'Scheduled activation date of the step',
  },
  {
    property: 'activation_date',
    type: 'date',
    description: 'Actual activation date of the step',
  },
  {
    property: 'completion_date',
    type: 'date',
    description: 'Completion date of the step',
  },
]

export const activity: EsIndexType = [
  {
    property: 'id',
    type: 'string',
    description: 'Unique identifier of the activity',
  },
  {
    property: 'stream_id',
    type: 'string',
    description:
      'Identifier of the pathway this activity belongs to',
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

export const patient: EsIndexType = [
  {
    property: 'id',
    type: 'string',
    description: 'Unique identifier of the patient',
  },
  {
    property: 'profile.first_name',
    type: 'string',
    description: 'First name of the patient',
  },
  {
    property: 'profile.last_name',
    type: 'string',
    description: 'Last name of the patient',
  },
  {
    property: 'profile.name',
    type: 'string',
    description: 'Concatenation of the first name and last name',
  },
  {
    property: 'profile.patient_code',
    type: 'string',
    description: 'User configurable identifier of the patient',
  },
  {
    property: 'profile.sex',
    type: 'string',
    description: 'Patient sex (0 = Not known, 1 = Male, 2 = Female)',
  },
  {
    property: 'profile.birth_date',
    type: 'string',
    description: 'Birth date of the patient',
  },
]