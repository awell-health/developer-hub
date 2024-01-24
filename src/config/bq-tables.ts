import { type BQTableType } from '@/types/bq-table.types'

export const data_points: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'care_flow_id',
    type: 'STRING',
    description:
      'Identifier of the care flow in which the data point was collected. Refers to the `id` column in the `care_flows` table.',
  },
  {
    property: 'care_flow_definition_id',
    type: 'STRING',
    description:
      'Identifier of the care flow definition the related care flow was instantiated from.',
  },
  {
    property: 'release_id',
    type: 'STRING',
    description:
      'Identifier of the published version of the care flow definition.',
  },
  {
    property: 'activity_id',
    type: 'STRING',
    description:
      'Identifier of the activity in which the data point was collected. Refers to the `id` column in the `activities` table.',
  },
  {
    property: 'definition_id',
    type: 'STRING',
    description:
      'Version agnostic identifier of the underlying data point definition component. Refers to the `definition_id` column in the `data_point_definitions` table.',
  },
  {
    property: 'value_raw',
    type: 'STRING',
    description: 'Serialised value of the data point.',
  },
  {
    property: 'value_boolean',
    type: 'BOOLEAN',
    description: 'Typed value of the data point. This column is only populated for rows with a value type of `boolean`.',
  },
  {
    property: 'value_numeric',
    type: 'NUMERIC',
    description: 'Typed value of the data point. This column is only populated for rows with a value type of `number`.',
  },
  {
    property: 'value_date',
    type: 'TIMESTAMP',
    description: 'Typed value of the data point. This column is only populated for rows with a value type of `date`.',
  },
  {
    property: 'value_type',
    type: 'STRING',
    description:
      'Primitive type of the value before serialisation (boolean, date, number, string).',
  },
  {
    property: 'date',
    type: 'TIMESTAMP',
    description: 'Collection date (UTC).',
  },
]

export const data_point_definitions: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'definition_id',
    type: 'STRING',
    description:
      'Version agnostic identifier.',
  },
  {
    property: 'release_id',
    type: 'STRING',
    description:
      'Identifier of the published version of the care flow definition.',
  },
  {
    property: 'category',
    type: 'STRING',
    description:
      'Identifies how the data point is collected. Examples: `form`, `calculation`.',
  },
  {
    property: 'key',
    type: 'STRING',
    description:
      'Human readable qualified key which defines the meaning of the collected data.',
  },
  {
    property: 'value_type',
    type: 'STRING',
    description:
      'Expected primitive type for the collected data (boolean, date, number, string).',
  },
]

export const care_flows: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'patient_id',
    type: 'STRING',
    description: 'Identifier of the patient enrolled in that care flow. Refers to the `id` column in the `patients` table.',
  },
  {
    property: 'definition_id',
    type: 'STRING',
    description:
      'Identifier of the care flow definition the related care flow was instantiated from.',
  },
  {
    property: 'release_id',
    type: 'STRING',
    description:
      'Identifier of the published version of the care flow definition.',
  },
  {
    property: 'title',
    type: 'STRING',
    description:
      'Title of the care fow definition.',
  },
  {
    property: 'status',
    type: 'STRING',
    description:
      'Status of the care flow. One of `starting`, `active`, `stopped`, `completed`.',
  },
  {
    property: 'start_date',
    type: 'TIMESTAMP',
    description:
      'Recorded start date of the care flow (UTC).',
  },
  {
    property: 'stop_date',
    type: 'TIMESTAMP',
    description:
      'Recorded stop date of the care flow (UTC). Only populated for stopped care flows.',
  },
  {
    property: 'complete_date',
    type: 'TIMESTAMP',
    description:
      'Recorded completion date of the care flow (UTC). Only populated for completed care flows.',
  },
]

export const activities: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'care_flow_id',
    type: 'STRING',
    description:
      'Identifier of the care flow in which the data point was collected. Refers to the `id` column in the `care_flows` table.',
  },
  {
    property: 'care_flow_definition_id',
    type: 'STRING',
    description:
      'Identifier of the care flow definition the related care flow was instantiated from.',
  },
  {
    property: 'status',
    type: 'STRING',
    description:
      'Activity status. One of: `active`, `done`, `failed`, `canceled`, `expired`.',
  },
  {
    property: 'date',
    type: 'TIMESTAMP',
    description:
      'Creation date of the activity (UTC).',
  },
  {
    property: 'scheduled_date',
    type: 'TIMESTAMP',
    description:
      'Scheduled activation date of the activity (UTC).',
  },
  {
    property: 'object_type',
    type: 'STRING',
    description:
      'Type of object this activity relates to. Examples: `action`, `form`, `step`.',
  },
  {
    property: 'object_name',
    type: 'STRING',
    description:
      'Name of the related object.',
  },
  {
    property: 'indirect_object_type',
    type: 'STRING',
    description:
      'Type of indirect object this activity relates to. Examples: `patient`, `stakeholder`.',
  },
  {
    property: 'indirect_object_name',
    type: 'STRING',
    description:
      'Name of the related indirect object.',
  },
  {
    property: 'step_name',
    type: 'STRING',
    description:
      'Name of the step this activity belongs to.',
  },
]

export const patients: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'profile_id',
    type: 'STRING',
    description: 'Unique identifier of the associated profile. Refers to the `id` property in the `patient_profiles` table.',
  },
]

export const patient_profiles: BQTableType = [
  {
    property: 'id',
    type: 'STRING',
    description: 'Unique identifier.',
  },
  {
    property: 'first_name',
    type: 'STRING',
    description: 'First name of the patient.',
  },
  {
    property: 'last_name',
    type: 'STRING',
    description: 'Last name of the patient.',
  },
  {
    property: 'name',
    type: 'STRING',
    description: 'Concatenation of the first name and last name.',
  },
  {
    property: 'email',
    type: 'STRING',
    description: 'Email address of the patient.',
  },
  {
    property: 'birth_date',
    type: 'DATE',
    description: 'Birth date of the patient.',
  },
  {
    property: 'sex',
    type: 'STRING',
    description: 'Sex of the patient in ISO_IEC-5218 standard. One of `0` (Not known), `1` (Male), `2` (Female).',
  },
  {
    property: 'national_registry_number',
    type: 'STRING',
    description: 'National registry number of the patient.',
  },
  {
    property: 'patient_code',
    type: 'STRING',
    description: 'Arbitrary identifier associated to the patient. You can use this to facilitate the reconciliation of patient records between Awell and your domain.',
  },
  {
    property: 'phone',
    type: 'STRING',
    description: 'Phone number in the E164 format.',
  },
  {
    property: 'mobile_phone',
    type: 'STRING',
    description: 'Phone number in the E164 format.',
  },
  {
    property: 'address_street',
    type: 'STRING',
    description: '',
  },
  {
    property: 'address_city',
    type: 'STRING',
    description: '',
  },
  {
    property: 'address_zip',
    type: 'STRING',
    description: '',
  },
  {
    property: 'address_state',
    type: 'STRING',
    description: '',
  },
  {
    property: 'address_country',
    type: 'STRING',
    description: '',
  },
]