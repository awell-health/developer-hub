import { gql } from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  SafeDate: { input: any; output: any; }
};

export type ActionPayload = Payload & {
  __typename?: 'ActionPayload';
  calculationId: Scalars['String']['output'];
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export enum ActionType {
  ApiCall = 'API_CALL',
  ApiCallGraphql = 'API_CALL_GRAPHQL',
  Calculation = 'CALCULATION',
  Checklist = 'CHECKLIST',
  ClinicalNote = 'CLINICAL_NOTE',
  Form = 'FORM',
  Message = 'MESSAGE',
  Plugin = 'PLUGIN',
  PushToEmr = 'PUSH_TO_EMR'
}

export type ActivitiesPayload = Payload & {
  __typename?: 'ActivitiesPayload';
  activities: Array<Activity>;
  code: Scalars['String']['output'];
  metadata?: Maybe<ActivityMetadata>;
  pagination?: Maybe<PaginationOutput>;
  sorting?: Maybe<SortingOutput>;
  success: Scalars['Boolean']['output'];
};

export type Activity = {
  __typename?: 'Activity';
  action: ActivityAction;
  container_name?: Maybe<Scalars['String']['output']>;
  context?: Maybe<PathwayContext>;
  date: Scalars['String']['output'];
  form?: Maybe<Form>;
  /** Form display mode can either be conversational (1 question at a time) or regular (all questions at once). Only used in hosted pages for now. */
  form_display_mode?: Maybe<FormDisplayMode>;
  /** Url for icon, only used by extensions custom actions */
  icon_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  indirect_object?: Maybe<ActivityObject>;
  isUserActivity: Scalars['Boolean']['output'];
  label?: Maybe<ActivityLabel>;
  object: ActivityObject;
  public?: Maybe<Scalars['Boolean']['output']>;
  reference_id: Scalars['String']['output'];
  resolution?: Maybe<ActivityResolution>;
  session_id?: Maybe<Scalars['String']['output']>;
  stakeholders?: Maybe<Array<ActivityObject>>;
  status: ActivityStatus;
  stream_id: Scalars['String']['output'];
  sub_activities: Array<SubActivity>;
  subject: ActivitySubject;
  track?: Maybe<ActivityTrack>;
};

export enum ActivityAction {
  Activate = 'ACTIVATE',
  Added = 'ADDED',
  Assigned = 'ASSIGNED',
  Complete = 'COMPLETE',
  Computed = 'COMPUTED',
  Delegated = 'DELEGATED',
  Deliver = 'DELIVER',
  Discarded = 'DISCARDED',
  Failed = 'FAILED',
  FailedToSend = 'FAILED_TO_SEND',
  Generated = 'GENERATED',
  IsWaitingOn = 'IS_WAITING_ON',
  Postponed = 'POSTPONED',
  Processed = 'PROCESSED',
  Read = 'READ',
  Remind = 'REMIND',
  Reported = 'REPORTED',
  Scheduled = 'SCHEDULED',
  Send = 'SEND',
  Skipped = 'SKIPPED',
  Stopped = 'STOPPED',
  Submitted = 'SUBMITTED'
}

export type ActivityLabel = {
  __typename?: 'ActivityLabel';
  color: Scalars['String']['output'];
  id?: Maybe<Scalars['String']['output']>;
  text: Scalars['String']['output'];
};

export type ActivityMetadata = {
  __typename?: 'ActivityMetadata';
  stakeholders?: Maybe<Array<ActivityObject>>;
};

export type ActivityObject = {
  __typename?: 'ActivityObject';
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  preferred_language?: Maybe<Scalars['String']['output']>;
  type: ActivityObjectType;
};

export enum ActivityObjectType {
  Action = 'ACTION',
  ApiCall = 'API_CALL',
  Calculation = 'CALCULATION',
  Checklist = 'CHECKLIST',
  ClinicalNote = 'CLINICAL_NOTE',
  EmrReport = 'EMR_REPORT',
  EmrRequest = 'EMR_REQUEST',
  EvaluatedRule = 'EVALUATED_RULE',
  Form = 'FORM',
  Message = 'MESSAGE',
  Pathway = 'PATHWAY',
  Patient = 'PATIENT',
  Plugin = 'PLUGIN',
  PluginAction = 'PLUGIN_ACTION',
  Reminder = 'REMINDER',
  Stakeholder = 'STAKEHOLDER',
  Step = 'STEP',
  Track = 'TRACK',
  User = 'USER'
}

export enum ActivityResolution {
  Failure = 'FAILURE',
  Success = 'SUCCESS'
}

export enum ActivityStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Done = 'DONE',
  Failed = 'FAILED'
}

export type ActivitySubject = {
  __typename?: 'ActivitySubject';
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  type: ActivitySubjectType;
};

export enum ActivitySubjectType {
  ApiCall = 'API_CALL',
  Awell = 'AWELL',
  Plugin = 'PLUGIN',
  Stakeholder = 'STAKEHOLDER',
  User = 'USER'
}

export type ActivityTrack = {
  __typename?: 'ActivityTrack';
  id?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type AddTrackInput = {
  pathway_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type AddTrackPayload = Payload & {
  __typename?: 'AddTrackPayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Address = {
  __typename?: 'Address';
  city?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
  zip?: Maybe<Scalars['String']['output']>;
};

export type AddressInput = {
  city?: InputMaybe<Scalars['String']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  state?: InputMaybe<Scalars['String']['input']>;
  street?: InputMaybe<Scalars['String']['input']>;
  zip?: InputMaybe<Scalars['String']['input']>;
};

export type Answer = {
  __typename?: 'Answer';
  question_id: Scalars['String']['output'];
  value: Scalars['String']['output'];
  value_type: DataPointValueType;
};

export type AnswerInput = {
  question_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type ApiCall = {
  __typename?: 'ApiCall';
  created_at: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  request: ApiCallRequest;
  responses: Array<ApiCallResponse>;
  status: ApiCallStatus;
  title: Scalars['String']['output'];
};

export type ApiCallHeader = {
  __typename?: 'ApiCallHeader';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ApiCallPayload = Payload & {
  __typename?: 'ApiCallPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ApiCallRequest = {
  __typename?: 'ApiCallRequest';
  body?: Maybe<Scalars['String']['output']>;
  endpoint: Scalars['String']['output'];
  headers: Array<ApiCallHeader>;
  method: ApiCallRequestMethod;
};

export enum ApiCallRequestMethod {
  Get = 'GET',
  Post = 'POST'
}

export type ApiCallResponse = {
  __typename?: 'ApiCallResponse';
  body: Scalars['String']['output'];
  date: Scalars['String']['output'];
  status: Scalars['Float']['output'];
};

export enum ApiCallStatus {
  Failed = 'Failed',
  InProgress = 'InProgress',
  Pending = 'Pending',
  PermanentlyFailed = 'PermanentlyFailed',
  Skipped = 'Skipped',
  Success = 'Success'
}

export type ApiCallsPayload = Payload & {
  __typename?: 'ApiCallsPayload';
  api_calls: Array<ApiCall>;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ApiPathwayContext = {
  __typename?: 'ApiPathwayContext';
  id: Scalars['String']['output'];
  pathway_definition_id: Scalars['String']['output'];
  patient_id?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['String']['output']>;
};

export type AuditTrail = {
  __typename?: 'AuditTrail';
  date: Scalars['SafeDate']['output'];
  user_email?: Maybe<Scalars['String']['output']>;
  user_id: Scalars['String']['output'];
};

export type BaselineDataPoint = {
  __typename?: 'BaselineDataPoint';
  definition: DataPointDefinition;
  value?: Maybe<Scalars['String']['output']>;
};

export type BaselineInfoInput = {
  data_point_definition_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type BaselineInfoPayload = Payload & {
  __typename?: 'BaselineInfoPayload';
  baselineDataPoints: Array<BaselineDataPoint>;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export enum BooleanOperator {
  And = 'AND',
  Or = 'OR'
}

export type BrandingSettings = {
  __typename?: 'BrandingSettings';
  accent_color?: Maybe<Scalars['String']['output']>;
  /** Auto progress to the next question when using the conversational display mode in Awell Hosted Pages. */
  hosted_page_auto_progress?: Maybe<Scalars['Boolean']['output']>;
  /** Automatically save question answers locally in Awell Hosted Pages */
  hosted_page_autosave?: Maybe<Scalars['Boolean']['output']>;
  hosted_page_title?: Maybe<Scalars['String']['output']>;
  logo_url?: Maybe<Scalars['String']['output']>;
};

export type CalculationResultsPayload = Payload & {
  __typename?: 'CalculationResultsPayload';
  code: Scalars['String']['output'];
  result: Array<SingleCalculationResult>;
  success: Scalars['Boolean']['output'];
};

export type CancelScheduledTracksInput = {
  ids: Array<Scalars['String']['input']>;
};

export type CancelScheduledTracksPayload = Payload & {
  __typename?: 'CancelScheduledTracksPayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  unscheduled_ids: Array<Scalars['String']['output']>;
};

export type Checklist = {
  __typename?: 'Checklist';
  items: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type ChecklistPayload = Payload & {
  __typename?: 'ChecklistPayload';
  checklist?: Maybe<Checklist>;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ClinicalNotePayload = Payload & {
  __typename?: 'ClinicalNotePayload';
  clinical_note: GeneratedClinicalNote;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type CompleteExtensionActivityInput = {
  activity_id: Scalars['String']['input'];
  data_points: Array<ExtensionDataPointInput>;
};

export type CompleteExtensionActivityPayload = Payload & {
  __typename?: 'CompleteExtensionActivityPayload';
  activity: Activity;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Condition = {
  __typename?: 'Condition';
  id: Scalars['ID']['output'];
  operand?: Maybe<Operand>;
  operator?: Maybe<ConditionOperator>;
  reference?: Maybe<Scalars['String']['output']>;
  reference_key?: Maybe<Scalars['String']['output']>;
};

export enum ConditionOperandType {
  Boolean = 'BOOLEAN',
  DataPoint = 'DATA_POINT',
  DataSource = 'DATA_SOURCE',
  Number = 'NUMBER',
  NumbersArray = 'NUMBERS_ARRAY',
  String = 'STRING'
}

export enum ConditionOperator {
  Contains = 'CONTAINS',
  DoesNotContain = 'DOES_NOT_CONTAIN',
  IsAnyOf = 'IS_ANY_OF',
  IsEmpty = 'IS_EMPTY',
  IsEqualTo = 'IS_EQUAL_TO',
  IsGreaterThan = 'IS_GREATER_THAN',
  IsGreaterThanOrEqualTo = 'IS_GREATER_THAN_OR_EQUAL_TO',
  IsInRange = 'IS_IN_RANGE',
  IsLessThan = 'IS_LESS_THAN',
  IsLessThanOrEqualTo = 'IS_LESS_THAN_OR_EQUAL_TO',
  IsNoneOf = 'IS_NONE_OF',
  IsNotEmpty = 'IS_NOT_EMPTY',
  IsNotEqualTo = 'IS_NOT_EQUAL_TO',
  IsNotTrue = 'IS_NOT_TRUE',
  IsToday = 'IS_TODAY',
  IsTrue = 'IS_TRUE'
}

export type CreatePatientInput = {
  address?: InputMaybe<AddressInput>;
  birth_date?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  /** Must be in valid E164 telephone number format */
  mobile_phone?: InputMaybe<Scalars['String']['input']>;
  national_registry_number?: InputMaybe<Scalars['String']['input']>;
  patient_code?: InputMaybe<Scalars['String']['input']>;
  /** Must be in valid E164 telephone number format */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** ISO 639-1 shortcode */
  preferred_language?: InputMaybe<Scalars['String']['input']>;
  /** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
  sex?: InputMaybe<Sex>;
};

export type CreatePatientPayload = Payload & {
  __typename?: 'CreatePatientPayload';
  code: Scalars['String']['output'];
  patient?: Maybe<User>;
  success: Scalars['Boolean']['output'];
};

export type DataPointDefinition = {
  __typename?: 'DataPointDefinition';
  category: DataPointSourceType;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  /** Additional context on data point */
  metadata?: Maybe<Array<DataPointMetaDataItem>>;
  optional?: Maybe<Scalars['Boolean']['output']>;
  /** Personally identifiable information */
  pii?: Maybe<Scalars['Boolean']['output']>;
  possibleValues?: Maybe<Array<DataPointPossibleValue>>;
  range?: Maybe<Range>;
  source_definition_id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
  valueType: DataPointValueType;
};

export type DataPointInput = {
  data_point_definition_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type DataPointMetaDataItem = {
  __typename?: 'DataPointMetaDataItem';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type DataPointPossibleValue = {
  __typename?: 'DataPointPossibleValue';
  label?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export enum DataPointSourceType {
  ApiCall = 'API_CALL',
  ApiCallStatus = 'API_CALL_STATUS',
  Calculation = 'CALCULATION',
  ExtensionAction = 'EXTENSION_ACTION',
  ExtensionWebhook = 'EXTENSION_WEBHOOK',
  Form = 'FORM',
  Pathway = 'PATHWAY',
  PatientProfile = 'PATIENT_PROFILE',
  Step = 'STEP',
  Track = 'TRACK'
}

export enum DataPointValueType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Number = 'NUMBER',
  NumbersArray = 'NUMBERS_ARRAY',
  String = 'STRING',
  Telephone = 'TELEPHONE'
}

export type DateFilter = {
  gte?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
};

export type DeletePathwayInput = {
  pathway_id: Scalars['String']['input'];
};

export type DeletePatientInput = {
  patient_id: Scalars['String']['input'];
};

export type Element = {
  __typename?: 'Element';
  activity_type?: Maybe<ActionType>;
  context: PathwayContext;
  end_date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  label?: Maybe<ActivityLabel>;
  name: Scalars['String']['output'];
  parent_id?: Maybe<Scalars['ID']['output']>;
  stakeholders: Array<ElementStakeholder>;
  start_date: Scalars['String']['output'];
  status: ElementStatus;
  type: ElementType;
};

export type ElementStakeholder = {
  __typename?: 'ElementStakeholder';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export enum ElementStatus {
  Active = 'ACTIVE',
  Discarded = 'DISCARDED',
  Done = 'DONE',
  Postponed = 'POSTPONED',
  Scheduled = 'SCHEDULED',
  Stopped = 'STOPPED'
}

export enum ElementType {
  Action = 'ACTION',
  Pathway = 'PATHWAY',
  Step = 'STEP',
  Track = 'TRACK',
  Trigger = 'TRIGGER'
}

export type ElementsPayload = Payload & {
  __typename?: 'ElementsPayload';
  code: Scalars['String']['output'];
  elements: Array<Element>;
  success: Scalars['Boolean']['output'];
};

export type EmptyPayload = Payload & {
  __typename?: 'EmptyPayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type EmrReport = {
  __typename?: 'EmrReport';
  id: Scalars['ID']['output'];
  message_html: Scalars['String']['output'];
  metadata?: Maybe<Array<EmrReportMetadataField>>;
};

export type EmrReportMetadataField = {
  __typename?: 'EmrReportMetadataField';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  value?: Maybe<Scalars['String']['output']>;
};

export type EmrReportPayload = Payload & {
  __typename?: 'EmrReportPayload';
  code: Scalars['String']['output'];
  report?: Maybe<EmrReport>;
  success: Scalars['Boolean']['output'];
};

export type EvaluateFormRulesInput = {
  answers: Array<AnswerInput>;
  form_id: Scalars['String']['input'];
};

export type EvaluateFormRulesPayload = Payload & {
  __typename?: 'EvaluateFormRulesPayload';
  code: Scalars['String']['output'];
  results: Array<QuestionRuleResult>;
  success: Scalars['Boolean']['output'];
};

export type ExtensionActionField = {
  __typename?: 'ExtensionActionField';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  type: ExtensionActionFieldType;
  value: Scalars['String']['output'];
};

export enum ExtensionActionFieldType {
  Boolean = 'BOOLEAN',
  Date = 'DATE',
  Html = 'HTML',
  Json = 'JSON',
  Numeric = 'NUMERIC',
  String = 'STRING',
  Text = 'TEXT'
}

export type ExtensionActivityRecord = {
  __typename?: 'ExtensionActivityRecord';
  activity_id: Scalars['String']['output'];
  data_points: Array<ExtensionDataPoint>;
  date: Scalars['String']['output'];
  fields: Array<ExtensionActionField>;
  id: Scalars['ID']['output'];
  pathway_id: Scalars['String']['output'];
  plugin_action_key: Scalars['String']['output'];
  plugin_key: Scalars['String']['output'];
  settings?: Maybe<Array<PluginActionSettingsProperty>>;
};

export type ExtensionActivityRecordPayload = Payload & {
  __typename?: 'ExtensionActivityRecordPayload';
  code: Scalars['String']['output'];
  record: ExtensionActivityRecord;
  success: Scalars['Boolean']['output'];
};

export type ExtensionDataPoint = {
  __typename?: 'ExtensionDataPoint';
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type ExtensionDataPointInput = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type FilterActivitiesParams = {
  action?: InputMaybe<StringArrayFilter>;
  activity_status?: InputMaybe<StringArrayFilter>;
  activity_type?: InputMaybe<StringArrayFilter>;
  pathway_definition_id?: InputMaybe<StringArrayFilter>;
  pathway_status?: InputMaybe<StringArrayFilter>;
  patient_id?: InputMaybe<TextFilterEquals>;
  stakeholders?: InputMaybe<StringArrayFilter>;
};

export type FilterPathwayDataPointDefinitionsParams = {
  category?: InputMaybe<StringArrayFilter>;
  value_type?: InputMaybe<StringArrayFilter>;
};

export type FilterPathwayDefinitionsParams = {
  search?: InputMaybe<TextFilterContains>;
};

export type FilterPathways = {
  pathway_definition_id?: InputMaybe<IdFilter>;
  patient_id?: InputMaybe<StringArrayFilter>;
  release_id?: InputMaybe<StringArrayFilter>;
  start_date?: InputMaybe<DateFilter>;
  status?: InputMaybe<StringArrayFilter>;
  version?: InputMaybe<NumberArrayFilter>;
};

export type FilterPatientPathways = {
  status: StringArrayFilter;
};

export type FilterPatients = {
  name?: InputMaybe<TextFilter>;
  national_registry_number?: InputMaybe<TextFilterEquals>;
  patient_code?: InputMaybe<TextFilterEquals>;
  profile_id?: InputMaybe<StringArrayFilter>;
  search?: InputMaybe<TextFilterContains>;
};

export type Form = {
  __typename?: 'Form';
  definition_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  questions: Array<Question>;
  release_id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  trademark?: Maybe<Scalars['String']['output']>;
};

export enum FormDisplayMode {
  Conversational = 'CONVERSATIONAL',
  Regular = 'REGULAR'
}

export type FormPayload = Payload & {
  __typename?: 'FormPayload';
  code: Scalars['String']['output'];
  form?: Maybe<Form>;
  success: Scalars['Boolean']['output'];
};

export type FormResponse = {
  __typename?: 'FormResponse';
  answers: Array<Answer>;
};

export type FormResponsePayload = Payload & {
  __typename?: 'FormResponsePayload';
  code: Scalars['String']['output'];
  response: FormResponse;
  success: Scalars['Boolean']['output'];
};

export type FormattedText = {
  __typename?: 'FormattedText';
  content: TranslatedText;
  format: Scalars['String']['output'];
};

export type FormsPayload = Payload & {
  __typename?: 'FormsPayload';
  code: Scalars['String']['output'];
  forms?: Maybe<Array<Form>>;
  success: Scalars['Boolean']['output'];
};

export type GeneratedClinicalNote = {
  __typename?: 'GeneratedClinicalNote';
  context: Array<GeneratedClinicalNoteContextField>;
  id: Scalars['ID']['output'];
  narratives: Array<GeneratedClinicalNoteNarrative>;
};

export type GeneratedClinicalNoteContextField = {
  __typename?: 'GeneratedClinicalNoteContextField';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type GeneratedClinicalNoteNarrative = {
  __typename?: 'GeneratedClinicalNoteNarrative';
  body: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  title: Scalars['String']['output'];
};

export type HostedSession = {
  __typename?: 'HostedSession';
  cancel_url?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  pathway_id: Scalars['String']['output'];
  stakeholder: HostedSessionStakeholder;
  status: HostedSessionStatus;
  success_url?: Maybe<Scalars['String']['output']>;
};

export type HostedSessionActivitiesPayload = Payload & {
  __typename?: 'HostedSessionActivitiesPayload';
  activities: Array<Activity>;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type HostedSessionPayload = Payload & {
  __typename?: 'HostedSessionPayload';
  branding?: Maybe<BrandingSettings>;
  code: Scalars['String']['output'];
  session: HostedSession;
  success: Scalars['Boolean']['output'];
};

export type HostedSessionStakeholder = {
  __typename?: 'HostedSessionStakeholder';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: HostedSessionStakeholderType;
};

export enum HostedSessionStakeholderType {
  Patient = 'PATIENT',
  Stakeholder = 'STAKEHOLDER'
}

export enum HostedSessionStatus {
  Active = 'ACTIVE',
  Completed = 'COMPLETED',
  Expired = 'EXPIRED'
}

export type IdFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type MarkMessageAsReadInput = {
  activity_id: Scalars['String']['input'];
};

export type MarkMessageAsReadPayload = Payload & {
  __typename?: 'MarkMessageAsReadPayload';
  activity: Activity;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Message = {
  __typename?: 'Message';
  attachments?: Maybe<Array<MessageAttachment>>;
  body: Scalars['String']['output'];
  format: MessageFormat;
  id: Scalars['ID']['output'];
  subject?: Maybe<Scalars['String']['output']>;
};

export type MessageAttachment = {
  __typename?: 'MessageAttachment';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: MessageAttachmentType;
  url: Scalars['String']['output'];
};

export enum MessageAttachmentType {
  File = 'FILE',
  Link = 'LINK',
  Video = 'VIDEO'
}

export enum MessageFormat {
  Html = 'HTML',
  Slate = 'SLATE'
}

export type MessagePayload = Payload & {
  __typename?: 'MessagePayload';
  code: Scalars['String']['output'];
  message?: Maybe<Message>;
  success: Scalars['Boolean']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addTrack: AddTrackPayload;
  completeExtensionActivity: CompleteExtensionActivityPayload;
  createPatient: CreatePatientPayload;
  deletePathway: EmptyPayload;
  deletePatient: EmptyPayload;
  evaluateFormRules: EvaluateFormRulesPayload;
  markMessageAsRead: MarkMessageAsReadPayload;
  /** Retrieve patient demographics from an external system */
  requestPatientDemographics: PatientDemographicsPayload;
  retryActivity: EmptyPayload;
  retryAllApiCalls: EmptyPayload;
  retryAllFailedApiCalls: EmptyPayload;
  retryAllFailedWebhookCalls: EmptyPayload;
  retryAllFailedWebhookCallsForPathwayDefinition: EmptyPayload;
  retryAllWebhookCalls: EmptyPayload;
  retryApiCall: RetryApiCallPayload;
  retryPushToEmr: EmptyPayload;
  retryWebhookCall: RetryWebhookCallPayload;
  saveBaselineInfo: EmptyPayload;
  scheduleTrack: ScheduleTrackPayload;
  startHostedActivitySession: StartHostedActivitySessionPayload;
  startHostedActivitySessionViaHostedPagesLink: StartHostedActivitySessionPayload;
  startHostedPathwaySession: StartHostedPathwaySessionPayload;
  startPathway: StartPathwayPayload;
  stopPathway: EmptyPayload;
  stopTrack: StopTrackPayload;
  submitChecklist: SubmitChecklistPayload;
  submitFormResponse: SubmitFormResponsePayload;
  unscheduleTracks: CancelScheduledTracksPayload;
  updateBaselineInfo: EmptyPayload;
  updatePatient: UpdatePatientPayload;
  /** Update which patient was created after import request for logging purposes */
  updatePatientDemographicsQuery: UpdatePatientDemographicsQueryPayload;
  updatePatientLanguage: UpdatePatientLanguagePayload;
};


export type MutationAddTrackArgs = {
  input: AddTrackInput;
};


export type MutationCompleteExtensionActivityArgs = {
  input: CompleteExtensionActivityInput;
};


export type MutationCreatePatientArgs = {
  input?: InputMaybe<CreatePatientInput>;
  mycare?: InputMaybe<MyCareOptions>;
};


export type MutationDeletePathwayArgs = {
  input: DeletePathwayInput;
};


export type MutationDeletePatientArgs = {
  input: DeletePatientInput;
};


export type MutationEvaluateFormRulesArgs = {
  input: EvaluateFormRulesInput;
};


export type MutationMarkMessageAsReadArgs = {
  input: MarkMessageAsReadInput;
};


export type MutationRequestPatientDemographicsArgs = {
  input: PatientDemographicsInput;
};


export type MutationRetryActivityArgs = {
  input: RetryActivityInput;
};


export type MutationRetryAllApiCallsArgs = {
  input: RetryAllApiCallsInput;
};


export type MutationRetryAllFailedApiCallsArgs = {
  input: RetryAllFailedApiCallsInput;
};


export type MutationRetryAllFailedWebhookCallsArgs = {
  input: RetryAllFailedWebhookCallsInput;
};


export type MutationRetryAllFailedWebhookCallsForPathwayDefinitionArgs = {
  input: RetryAllFailedWebhookCallsForPathwayDefinitionInput;
};


export type MutationRetryAllWebhookCallsArgs = {
  input: RetryAllWebhookCallsInput;
};


export type MutationRetryApiCallArgs = {
  input: RetryApiCallInput;
};


export type MutationRetryPushToEmrArgs = {
  input: RetryPushToEmrInput;
};


export type MutationRetryWebhookCallArgs = {
  input: RetryWebhookCallInput;
};


export type MutationSaveBaselineInfoArgs = {
  input: SaveBaselineInfoInput;
};


export type MutationScheduleTrackArgs = {
  input: ScheduleTrackInput;
};


export type MutationStartHostedActivitySessionArgs = {
  input: StartHostedActivitySessionInput;
};


export type MutationStartHostedActivitySessionViaHostedPagesLinkArgs = {
  input: StartHostedActivitySessionViaHostedPagesLinkInput;
};


export type MutationStartHostedPathwaySessionArgs = {
  input: StartHostedPathwaySessionInput;
};


export type MutationStartPathwayArgs = {
  input: StartPathwayInput;
};


export type MutationStopPathwayArgs = {
  input: StopPathwayInput;
};


export type MutationStopTrackArgs = {
  input: StopTrackInput;
};


export type MutationSubmitChecklistArgs = {
  input: SubmitChecklistInput;
};


export type MutationSubmitFormResponseArgs = {
  input: SubmitFormResponseInput;
};


export type MutationUnscheduleTracksArgs = {
  input: CancelScheduledTracksInput;
};


export type MutationUpdateBaselineInfoArgs = {
  input: UpdateBaselineInfoInput;
};


export type MutationUpdatePatientArgs = {
  input: UpdatePatientInput;
};


export type MutationUpdatePatientDemographicsQueryArgs = {
  input: UpdatePatientDemographicsQueryInput;
};


export type MutationUpdatePatientLanguageArgs = {
  input: UpdatePatientLanguageInput;
};

export type MyCareOptions = {
  password?: InputMaybe<Scalars['String']['input']>;
};

export type NumberArrayFilter = {
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
};

export type Operand = {
  __typename?: 'Operand';
  type: ConditionOperandType;
  value: Scalars['String']['output'];
};

export type Option = {
  __typename?: 'Option';
  id: Scalars['ID']['output'];
  label: Scalars['String']['output'];
  value: Scalars['Float']['output'];
};

export type PaginationOutput = {
  __typename?: 'PaginationOutput';
  count?: Maybe<Scalars['Float']['output']>;
  offset?: Maybe<Scalars['Float']['output']>;
  total_count?: Maybe<Scalars['Float']['output']>;
};

export type PaginationParams = {
  count: Scalars['Float']['input'];
  offset: Scalars['Float']['input'];
};

export type Pathway = {
  __typename?: 'Pathway';
  activities: Array<Activity>;
  complete_date?: Maybe<Scalars['SafeDate']['output']>;
  dashboards?: Maybe<PathwayDashboard>;
  id: Scalars['ID']['output'];
  pathway_definition_id: Scalars['String']['output'];
  patient: User;
  patient_id: Scalars['String']['output'];
  release_id: Scalars['String']['output'];
  start_date?: Maybe<Scalars['SafeDate']['output']>;
  status: PathwayStatus;
  status_explanation?: Maybe<Scalars['String']['output']>;
  stop_date?: Maybe<Scalars['SafeDate']['output']>;
  swimlanes: Swimlanes;
  title: Scalars['String']['output'];
  tracks: Array<Track>;
  version?: Maybe<Scalars['Float']['output']>;
};

export type PathwayContext = {
  __typename?: 'PathwayContext';
  action_id?: Maybe<Scalars['String']['output']>;
  instance_id: Scalars['String']['output'];
  pathway_id: Scalars['String']['output'];
  step_id?: Maybe<Scalars['String']['output']>;
  track_id?: Maybe<Scalars['String']['output']>;
};

export type PathwayDashboard = {
  __typename?: 'PathwayDashboard';
  cumulio_auth_id: Scalars['String']['output'];
  cumulio_auth_token: Scalars['String']['output'];
  dashboard_ids: Array<Scalars['String']['output']>;
};

export type PathwayDataPointDefinitionsPayload = Payload & {
  __typename?: 'PathwayDataPointDefinitionsPayload';
  code: Scalars['String']['output'];
  data_point_definitions: Array<DataPointDefinition>;
  success: Scalars['Boolean']['output'];
};

export type PathwayDefinitionDetails = {
  __typename?: 'PathwayDefinitionDetails';
  active_careflows?: Maybe<Scalars['Float']['output']>;
  completed_careflows?: Maybe<Scalars['Float']['output']>;
  stopped_careflows?: Maybe<Scalars['Float']['output']>;
  total_careflows?: Maybe<Scalars['Float']['output']>;
  total_patients?: Maybe<Scalars['Float']['output']>;
};

export type PathwayPayload = Payload & {
  __typename?: 'PathwayPayload';
  code: Scalars['String']['output'];
  pathway?: Maybe<Pathway>;
  success: Scalars['Boolean']['output'];
};

export enum PathwayStatus {
  Active = 'active',
  Completed = 'completed',
  MissingBaselineInfo = 'missing_baseline_info',
  Starting = 'starting',
  Stopped = 'stopped'
}

export type PathwaySummary = {
  __typename?: 'PathwaySummary';
  complete_date?: Maybe<Scalars['SafeDate']['output']>;
  id: Scalars['ID']['output'];
  pathway_definition_id?: Maybe<Scalars['String']['output']>;
  patient_id?: Maybe<Scalars['String']['output']>;
  start_date?: Maybe<Scalars['SafeDate']['output']>;
  status: PathwayStatus;
  status_explanation?: Maybe<Scalars['String']['output']>;
  stop_date?: Maybe<Scalars['SafeDate']['output']>;
  title: Scalars['String']['output'];
  version?: Maybe<Scalars['Float']['output']>;
};

export type PathwaysPayload = Payload & {
  __typename?: 'PathwaysPayload';
  code: Scalars['String']['output'];
  pagination?: Maybe<PaginationOutput>;
  pathways: Array<PathwaySummary>;
  sorting?: Maybe<SortingOutput>;
  success: Scalars['Boolean']['output'];
};

export type PatientDemographicsInput = {
  patient_identifier: Scalars['String']['input'];
};

export type PatientDemographicsPayload = Payload & {
  __typename?: 'PatientDemographicsPayload';
  code: Scalars['String']['output'];
  entry?: Maybe<Array<UserProfile>>;
  query_id: Scalars['String']['output'];
  status: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  total?: Maybe<Scalars['Float']['output']>;
};

export type PatientDemographicsQueryConfigurationPayload = {
  __typename?: 'PatientDemographicsQueryConfigurationPayload';
  input_box_text?: Maybe<Scalars['String']['output']>;
  is_enabled: Scalars['Boolean']['output'];
};

export type PatientPathway = {
  __typename?: 'PatientPathway';
  active_activities?: Maybe<Scalars['Float']['output']>;
  baseline_info?: Maybe<Array<BaselineDataPoint>>;
  complete_date?: Maybe<Scalars['String']['output']>;
  failed_activities?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  latest_activity_date?: Maybe<Scalars['String']['output']>;
  latest_activity_title?: Maybe<Scalars['String']['output']>;
  latest_activity_type?: Maybe<Scalars['String']['output']>;
  pathway_definition_id: Scalars['String']['output'];
  release_id: Scalars['String']['output'];
  status: PathwayStatus;
  status_explanation?: Maybe<Scalars['String']['output']>;
  stop_date?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  total_activities?: Maybe<Scalars['Float']['output']>;
  version?: Maybe<Scalars['Float']['output']>;
};

export type PatientPathwaysPayload = Payload & {
  __typename?: 'PatientPathwaysPayload';
  code: Scalars['String']['output'];
  patientPathways: Array<PatientPathway>;
  success: Scalars['Boolean']['output'];
};

export type PatientPayload = Payload & {
  __typename?: 'PatientPayload';
  code: Scalars['String']['output'];
  patient?: Maybe<User>;
  success: Scalars['Boolean']['output'];
};

export type PatientProfileInput = {
  address?: InputMaybe<AddressInput>;
  birth_date?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  /** Must be in valid E164 telephone number format */
  mobile_phone?: InputMaybe<Scalars['String']['input']>;
  national_registry_number?: InputMaybe<Scalars['String']['input']>;
  patient_code?: InputMaybe<Scalars['String']['input']>;
  /** Must be in valid E164 telephone number format */
  phone?: InputMaybe<Scalars['String']['input']>;
  /** ISO 639-1 shortcode */
  preferred_language?: InputMaybe<Scalars['String']['input']>;
  /** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
  sex?: InputMaybe<Sex>;
};

export type PatientsPayload = Payload & {
  __typename?: 'PatientsPayload';
  code: Scalars['String']['output'];
  pagination: PaginationOutput;
  patients: Array<User>;
  sorting: SortingOutput;
  success: Scalars['Boolean']['output'];
};

export type Payload = {
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type PluginActionSettingsProperty = {
  __typename?: 'PluginActionSettingsProperty';
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type PublishedPathwayDefinition = {
  __typename?: 'PublishedPathwayDefinition';
  active_activities?: Maybe<Scalars['Float']['output']>;
  /** Details about the latest pathway definition */
  all?: Maybe<PathwayDefinitionDetails>;
  cancelled_activities?: Maybe<Scalars['Float']['output']>;
  created?: Maybe<AuditTrail>;
  /**
   * Starting/baseline data point definitions for the pathway
   * @deprecated Use data_point_definitions instead
   */
  dataPointDefinitions: Array<DataPointDefinition>;
  /** Starting/baseline data point definitions for the pathway */
  data_point_definitions?: Maybe<Array<DataPointDefinition>>;
  failed_activities?: Maybe<Scalars['Float']['output']>;
  id: Scalars['ID']['output'];
  last_updated?: Maybe<AuditTrail>;
  /** Details about all pathway definitions */
  latest?: Maybe<PathwayDefinitionDetails>;
  patients_with_pending_activities?: Maybe<Scalars['Float']['output']>;
  release_date?: Maybe<Scalars['String']['output']>;
  release_id?: Maybe<Scalars['String']['output']>;
  stakeholders_with_pending_activities_list?: Maybe<Array<Scalars['String']['output']>>;
  title: Scalars['String']['output'];
  total_activities?: Maybe<Scalars['Float']['output']>;
  total_patients?: Maybe<Scalars['Float']['output']>;
  total_stakeholders?: Maybe<Scalars['Float']['output']>;
  /** Tracks for the pathway */
  track_definitions?: Maybe<Array<Track>>;
  version?: Maybe<Scalars['Float']['output']>;
};

export type PublishedPathwayDefinitionsPayload = Payload & {
  __typename?: 'PublishedPathwayDefinitionsPayload';
  code: Scalars['String']['output'];
  pagination?: Maybe<PaginationOutput>;
  publishedPathwayDefinitions: Array<PublishedPathwayDefinition>;
  sorting?: Maybe<SortingOutput>;
  success: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  activities: ActivitiesPayload;
  adHocTracksByPathway: TracksPayload;
  adHocTracksByRelease: TracksPayload;
  apiCall: ApiCallPayload;
  apiCalls: ApiCallsPayload;
  baselineInfo: BaselineInfoPayload;
  calculationAction: ActionPayload;
  calculationResults: CalculationResultsPayload;
  checklist: ChecklistPayload;
  clinicalNote: ClinicalNotePayload;
  emrReport: EmrReportPayload;
  extensionActivityRecord: ExtensionActivityRecordPayload;
  filterStakeholders: StakeholdersPayload;
  form: FormPayload;
  formResponse: FormResponsePayload;
  forms: FormsPayload;
  getStatusForPublishedPathwayDefinitions: PublishedPathwayDefinitionsPayload;
  hostedSession: HostedSessionPayload;
  hostedSessionActivities: HostedSessionActivitiesPayload;
  message: MessagePayload;
  myActivities: ActivitiesPayload;
  myPathways: PathwaysPayload;
  myPendingActivities: ActivitiesPayload;
  pathway: PathwayPayload;
  pathwayActivities: ActivitiesPayload;
  pathwayDataPointDefinitions: PathwayDataPointDefinitionsPayload;
  pathwayElements: ElementsPayload;
  pathwayStepActivities: ActivitiesPayload;
  pathways: PathwaysPayload;
  patient: PatientPayload;
  patientDemographicsQueryConfiguration: PatientDemographicsQueryConfigurationPayload;
  patientPathways: PatientPathwaysPayload;
  patients: PatientsPayload;
  publishedPathwayDefinitions: PublishedPathwayDefinitionsPayload;
  publishedPathwayDefinitionsDashboard: PublishedPathwayDefinitionsPayload;
  scheduledSteps: ScheduledStepsPayload;
  scheduledTracksForPathway: ScheduledTracksPayload;
  searchPatientsByNationalRegistryNumber: SearchPatientsPayload;
  searchPatientsByPatientCode: SearchPatientsPayload;
  stakeholdersByDefinitionIds: StakeholdersPayload;
  stakeholdersByPathwayDefinitionIds: StakeholdersPayload;
  stakeholdersByReleaseIds: StakeholdersPayload;
  webhookCall: WebhookCallPayload;
  webhookCalls: WebhookCallsPayload;
  webhookCallsForPathwayDefinition: WebhookCallsPayload;
  webhookCallsForTenant: WebhookCallsPayload;
  whoami: UserPayload;
};


export type QueryActivitiesArgs = {
  filters?: InputMaybe<FilterActivitiesParams>;
  pagination?: InputMaybe<PaginationParams>;
  sorting?: InputMaybe<SortingParams>;
};


export type QueryAdHocTracksByPathwayArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryAdHocTracksByReleaseArgs = {
  release_id: Scalars['String']['input'];
};


export type QueryApiCallArgs = {
  id: Scalars['String']['input'];
};


export type QueryApiCallsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryBaselineInfoArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryCalculationActionArgs = {
  id: Scalars['String']['input'];
};


export type QueryCalculationResultsArgs = {
  activity_id: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};


export type QueryChecklistArgs = {
  id: Scalars['String']['input'];
};


export type QueryClinicalNoteArgs = {
  id: Scalars['String']['input'];
};


export type QueryEmrReportArgs = {
  id: Scalars['String']['input'];
};


export type QueryExtensionActivityRecordArgs = {
  id: Scalars['String']['input'];
};


export type QueryFilterStakeholdersArgs = {
  pathway_definition_ids?: InputMaybe<Array<Scalars['String']['input']>>;
  release_ids?: InputMaybe<Array<Scalars['String']['input']>>;
  stakeholder_definition_ids?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryFormArgs = {
  id: Scalars['String']['input'];
};


export type QueryFormResponseArgs = {
  activity_id: Scalars['String']['input'];
  pathway_id: Scalars['String']['input'];
};


export type QueryFormsArgs = {
  pathway_definition_id: Scalars['String']['input'];
  release_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryHostedSessionActivitiesArgs = {
  only_stakeholder_activities?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryMessageArgs = {
  id: Scalars['String']['input'];
};


export type QueryMyActivitiesArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryPathwayArgs = {
  id: Scalars['String']['input'];
};


export type QueryPathwayActivitiesArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryPathwayDataPointDefinitionsArgs = {
  filters?: InputMaybe<FilterPathwayDataPointDefinitionsParams>;
  pathway_definition_id?: InputMaybe<Scalars['String']['input']>;
  release_id: Scalars['String']['input'];
};


export type QueryPathwayElementsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryPathwayStepActivitiesArgs = {
  pathway_id: Scalars['String']['input'];
  step_id: Scalars['String']['input'];
};


export type QueryPathwaysArgs = {
  filters?: InputMaybe<FilterPathways>;
  pagination?: InputMaybe<PaginationParams>;
  sorting?: InputMaybe<SortingParams>;
};


export type QueryPatientArgs = {
  id: Scalars['String']['input'];
};


export type QueryPatientPathwaysArgs = {
  filters?: InputMaybe<FilterPatientPathways>;
  patient_id: Scalars['String']['input'];
};


export type QueryPatientsArgs = {
  filters?: InputMaybe<FilterPatients>;
  pagination?: InputMaybe<PaginationParams>;
  sorting?: InputMaybe<SortingParams>;
};


export type QueryPublishedPathwayDefinitionsDashboardArgs = {
  filters?: InputMaybe<FilterPathwayDefinitionsParams>;
  pagination?: InputMaybe<PaginationParams>;
  sorting?: InputMaybe<SortingParams>;
};


export type QueryScheduledStepsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryScheduledTracksForPathwayArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QuerySearchPatientsByNationalRegistryNumberArgs = {
  national_registry_number: Scalars['String']['input'];
};


export type QuerySearchPatientsByPatientCodeArgs = {
  patient_code: Scalars['String']['input'];
};


export type QueryStakeholdersByDefinitionIdsArgs = {
  stakeholder_definition_ids: Array<Scalars['String']['input']>;
};


export type QueryStakeholdersByPathwayDefinitionIdsArgs = {
  pathway_definition_ids: Array<Scalars['String']['input']>;
};


export type QueryStakeholdersByReleaseIdsArgs = {
  release_ids: Array<Scalars['String']['input']>;
};


export type QueryWebhookCallArgs = {
  webhook_call_id: Scalars['String']['input'];
};


export type QueryWebhookCallsArgs = {
  pathway_id: Scalars['String']['input'];
};


export type QueryWebhookCallsForPathwayDefinitionArgs = {
  pathway_definition_id: Scalars['String']['input'];
};

export type Question = {
  __typename?: 'Question';
  dataPointValueType?: Maybe<DataPointValueType>;
  definition_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  metadata?: Maybe<Scalars['String']['output']>;
  options?: Maybe<Array<Option>>;
  questionConfig?: Maybe<QuestionConfig>;
  questionType?: Maybe<QuestionType>;
  rule?: Maybe<Rule>;
  title: Scalars['String']['output'];
  userQuestionType?: Maybe<UserQuestionType>;
};

export type QuestionConfig = {
  __typename?: 'QuestionConfig';
  mandatory: Scalars['Boolean']['output'];
  recode_enabled?: Maybe<Scalars['Boolean']['output']>;
  slider?: Maybe<SliderConfig>;
  use_select?: Maybe<Scalars['Boolean']['output']>;
};

export type QuestionResponseInput = {
  question_id: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type QuestionRuleResult = {
  __typename?: 'QuestionRuleResult';
  question_id: Scalars['String']['output'];
  rule_id: Scalars['String']['output'];
  satisfied: Scalars['Boolean']['output'];
};

export enum QuestionType {
  Input = 'INPUT',
  MultipleChoice = 'MULTIPLE_CHOICE',
  NoInput = 'NO_INPUT'
}

export type Range = {
  __typename?: 'Range';
  max?: Maybe<Scalars['Float']['output']>;
  min?: Maybe<Scalars['Float']['output']>;
};

export type RetryActivityInput = {
  activity_id: Scalars['String']['input'];
};

export type RetryAllApiCallsInput = {
  pathway_id: Scalars['String']['input'];
};

export type RetryAllFailedApiCallsInput = {
  pathway_id: Scalars['String']['input'];
};

export type RetryAllFailedWebhookCallsForPathwayDefinitionInput = {
  pathway_definition_id: Scalars['String']['input'];
};

export type RetryAllFailedWebhookCallsInput = {
  pathway_id: Scalars['String']['input'];
};

export type RetryAllWebhookCallsInput = {
  pathway_id: Scalars['String']['input'];
};

export type RetryApiCallInput = {
  api_call_id: Scalars['String']['input'];
};

export type RetryApiCallPayload = Payload & {
  __typename?: 'RetryApiCallPayload';
  api_call: ApiCall;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type RetryPushToEmrInput = {
  activity_id: Scalars['String']['input'];
};

export type RetryWebhookCallInput = {
  webhook_call_id: Scalars['String']['input'];
};

export type RetryWebhookCallPayload = Payload & {
  __typename?: 'RetryWebhookCallPayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  webhook_call: WebhookCall;
};

export type Rule = {
  __typename?: 'Rule';
  boolean_operator: BooleanOperator;
  conditions: Array<Condition>;
  definition_id?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
};

export type SaveBaselineInfoInput = {
  baseline_info: Array<BaselineInfoInput>;
  pathway_id: Scalars['String']['input'];
};

export type ScheduleTrackInput = {
  cancel_any_scheduled?: InputMaybe<Scalars['Boolean']['input']>;
  pathway_id: Scalars['String']['input'];
  scheduled_date: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type ScheduleTrackPayload = Payload & {
  __typename?: 'ScheduleTrackPayload';
  code: Scalars['String']['output'];
  id: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type ScheduledStepsPayload = Payload & {
  __typename?: 'ScheduledStepsPayload';
  code: Scalars['String']['output'];
  steps: Array<Element>;
  success: Scalars['Boolean']['output'];
};

export type ScheduledTrack = {
  __typename?: 'ScheduledTrack';
  created_by_user_id: Scalars['String']['output'];
  created_date: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  modified_date?: Maybe<Scalars['String']['output']>;
  pathway_id: Scalars['String']['output'];
  release_id: Scalars['String']['output'];
  scheduled_date: Scalars['String']['output'];
  status: Scalars['String']['output'];
  tenant_id: Scalars['String']['output'];
  title: Scalars['String']['output'];
  track_definition_id: Scalars['String']['output'];
};

export type ScheduledTracksPayload = Payload & {
  __typename?: 'ScheduledTracksPayload';
  code: Scalars['String']['output'];
  scheduled_tracks: Array<ScheduledTrack>;
  success: Scalars['Boolean']['output'];
};

export type SearchPatientsPayload = Payload & {
  __typename?: 'SearchPatientsPayload';
  code: Scalars['String']['output'];
  patients: Array<User>;
  success: Scalars['Boolean']['output'];
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE',
  NotKnown = 'NOT_KNOWN'
}

export type SingleCalculationResult = {
  __typename?: 'SingleCalculationResult';
  status?: Maybe<Scalars['String']['output']>;
  subresult_id: Scalars['String']['output'];
  unit?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
  value_type?: Maybe<DataPointValueType>;
};

export type SliderConfig = {
  __typename?: 'SliderConfig';
  display_marks: Scalars['Boolean']['output'];
  is_value_tooltip_on: Scalars['Boolean']['output'];
  max: Scalars['Float']['output'];
  max_label: Scalars['String']['output'];
  min: Scalars['Float']['output'];
  min_label: Scalars['String']['output'];
  show_min_max_values: Scalars['Boolean']['output'];
  step_value: Scalars['Float']['output'];
};

export type SortingOutput = {
  __typename?: 'SortingOutput';
  direction: Scalars['String']['output'];
  field: Scalars['String']['output'];
};

export type SortingParams = {
  direction: Scalars['String']['input'];
  field: Scalars['String']['input'];
};

export type Stakeholder = {
  __typename?: 'Stakeholder';
  clinical_app_role: StakeholderClinicalAppRole;
  definition_id: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  label: StakeholderLabel;
  release_id: Scalars['String']['output'];
  version: Scalars['Float']['output'];
};

export enum StakeholderClinicalAppRole {
  Caregiver = 'CAREGIVER',
  Patient = 'PATIENT',
  Physician = 'PHYSICIAN'
}

export type StakeholderLabel = {
  __typename?: 'StakeholderLabel';
  en?: Maybe<Scalars['String']['output']>;
};

export type StakeholdersPayload = Payload & {
  __typename?: 'StakeholdersPayload';
  code: Scalars['String']['output'];
  stakeholders: Array<Stakeholder>;
  success: Scalars['Boolean']['output'];
};

export type StartHostedActivitySessionInput = {
  cancel_url?: InputMaybe<Scalars['String']['input']>;
  /** ISO 639-1 shortcode */
  language?: InputMaybe<Scalars['String']['input']>;
  pathway_id: Scalars['String']['input'];
  stakeholder_id: Scalars['String']['input'];
  success_url?: InputMaybe<Scalars['String']['input']>;
};

export type StartHostedActivitySessionPayload = Payload & {
  __typename?: 'StartHostedActivitySessionPayload';
  code: Scalars['String']['output'];
  language?: Maybe<Scalars['String']['output']>;
  session_id: Scalars['String']['output'];
  session_url: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type StartHostedActivitySessionViaHostedPagesLinkInput = {
  hosted_pages_link_id: Scalars['String']['input'];
};

export type StartHostedPathwaySessionInput = {
  cancel_url?: InputMaybe<Scalars['String']['input']>;
  data_points?: InputMaybe<Array<DataPointInput>>;
  /** ISO 639-1 shortcode */
  language?: InputMaybe<Scalars['String']['input']>;
  pathway_definition_id: Scalars['String']['input'];
  patient_id?: InputMaybe<Scalars['String']['input']>;
  success_url?: InputMaybe<Scalars['String']['input']>;
};

export type StartHostedPathwaySessionPayload = Payload & {
  __typename?: 'StartHostedPathwaySessionPayload';
  code: Scalars['String']['output'];
  pathway_id: Scalars['String']['output'];
  session_id: Scalars['String']['output'];
  session_url: Scalars['String']['output'];
  stakeholder: HostedSessionStakeholder;
  success: Scalars['Boolean']['output'];
};

export type StartPathwayInput = {
  data_points?: InputMaybe<Array<DataPointInput>>;
  pathway_definition_id: Scalars['String']['input'];
  patient_id: Scalars['String']['input'];
};

export type StartPathwayPayload = Payload & {
  __typename?: 'StartPathwayPayload';
  code: Scalars['String']['output'];
  pathway_id: Scalars['String']['output'];
  stakeholders: Array<Stakeholder>;
  success: Scalars['Boolean']['output'];
};

export type StopPathwayInput = {
  pathway_id: Scalars['String']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};

export type StopTrackInput = {
  pathway_id: Scalars['String']['input'];
  track_id: Scalars['String']['input'];
};

export type StopTrackPayload = Payload & {
  __typename?: 'StopTrackPayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  track: Element;
};

export type StringArrayFilter = {
  in?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type SubActivity = {
  __typename?: 'SubActivity';
  action: ActivityAction;
  date: Scalars['String']['output'];
  error?: Maybe<Scalars['String']['output']>;
  error_category?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  object?: Maybe<ActivityObject>;
  subject: ActivitySubject;
  text?: Maybe<TranslatedText>;
};

export type SubmitChecklistInput = {
  activity_id: Scalars['String']['input'];
};

export type SubmitChecklistPayload = Payload & {
  __typename?: 'SubmitChecklistPayload';
  activity: Activity;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type SubmitFormResponseInput = {
  activity_id: Scalars['String']['input'];
  response: Array<QuestionResponseInput>;
};

export type SubmitFormResponsePayload = Payload & {
  __typename?: 'SubmitFormResponsePayload';
  activity: Activity;
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type Subscription = {
  __typename?: 'Subscription';
  activityCompleted: Activity;
  activityCreated: Activity;
  activityUpdated: Activity;
  apiCallCreated: ApiCall;
  apiCallUpdated: ApiCall;
  elementCompleted: Element;
  elementCreated: Element;
  elementUpdated: Element;
  pathwayUpdated: Pathway;
  sessionActivityCompleted: Activity;
  sessionActivityCreated: Activity;
  sessionActivityUpdated: Activity;
  sessionCompleted: HostedSession;
  sessionExpired: HostedSession;
  webhookCallCreated: WebhookCall;
  webhookCallUpdated: WebhookCall;
};


export type SubscriptionActivityCompletedArgs = {
  only_patient_activities?: InputMaybe<Scalars['Boolean']['input']>;
  pathway_id?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionActivityCreatedArgs = {
  only_patient_activities?: InputMaybe<Scalars['Boolean']['input']>;
  pathway_id?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionActivityUpdatedArgs = {
  only_patient_activities?: InputMaybe<Scalars['Boolean']['input']>;
  pathway_id?: InputMaybe<Scalars['String']['input']>;
};


export type SubscriptionApiCallCreatedArgs = {
  pathway_id: Scalars['String']['input'];
};


export type SubscriptionApiCallUpdatedArgs = {
  pathway_id: Scalars['String']['input'];
};


export type SubscriptionElementCompletedArgs = {
  element_type?: InputMaybe<ElementType>;
  pathway_id: Scalars['String']['input'];
};


export type SubscriptionElementCreatedArgs = {
  element_type?: InputMaybe<ElementType>;
  pathway_id: Scalars['String']['input'];
};


export type SubscriptionElementUpdatedArgs = {
  element_type?: InputMaybe<ElementType>;
  pathway_id: Scalars['String']['input'];
};


export type SubscriptionPathwayUpdatedArgs = {
  id: Scalars['ID']['input'];
};


export type SubscriptionSessionActivityCompletedArgs = {
  only_stakeholder_activities?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionSessionActivityCreatedArgs = {
  only_stakeholder_activities?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionSessionActivityUpdatedArgs = {
  only_stakeholder_activities?: InputMaybe<Scalars['Boolean']['input']>;
};


export type SubscriptionWebhookCallCreatedArgs = {
  pathway_id: Scalars['String']['input'];
};


export type SubscriptionWebhookCallUpdatedArgs = {
  pathway_id: Scalars['String']['input'];
};

export type Swimlane = {
  __typename?: 'Swimlane';
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type SwimlaneItem = {
  __typename?: 'SwimlaneItem';
  category: SwimlaneItemCategory;
  column_index: Scalars['Float']['output'];
  date?: Maybe<Scalars['SafeDate']['output']>;
  documentation?: Maybe<FormattedText>;
  id: Scalars['ID']['output'];
  info?: Maybe<Scalars['String']['output']>;
  lane_id: Scalars['ID']['output'];
  row_index: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  track_id?: Maybe<Scalars['ID']['output']>;
  type: SwimlaneItemType;
};

export enum SwimlaneItemCategory {
  Action = 'ACTION',
  PathwayEnd = 'PATHWAY_END',
  PathwayStart = 'PATHWAY_START',
  Step = 'STEP',
  Track = 'TRACK',
  TrackEnd = 'TRACK_END',
  TrackStart = 'TRACK_START'
}

export enum SwimlaneItemType {
  Active = 'active',
  Completed = 'completed',
  Pending = 'pending',
  Possible = 'possible'
}

export type SwimlaneLink = {
  __typename?: 'SwimlaneLink';
  destination_id: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  origin_id: Scalars['ID']['output'];
};

export type Swimlanes = {
  __typename?: 'Swimlanes';
  items: Array<SwimlaneItem>;
  lanes: Array<Swimlane>;
  links: Array<SwimlaneLink>;
};

export type Tenant = {
  __typename?: 'Tenant';
  accent_color: Scalars['String']['output'];
  hosted_page_title: Scalars['String']['output'];
  is_default: Scalars['Boolean']['output'];
  logo_path: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type TextFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type TextFilterContains = {
  contains?: InputMaybe<Scalars['String']['input']>;
};

export type TextFilterEquals = {
  eq?: InputMaybe<Scalars['String']['input']>;
};

export type Track = {
  __typename?: 'Track';
  /** Whether the track can be triggered manually (i.e. via addTrack or scheduleTrack mutations) */
  can_trigger_manually?: Maybe<Scalars['Boolean']['output']>;
  /** The definition ID of the Track, can be used for adding or scheduling */
  id: Scalars['ID']['output'];
  release_id?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type TracksPayload = Payload & {
  __typename?: 'TracksPayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  tracks: Array<Track>;
};

export type TranslatedText = {
  __typename?: 'TranslatedText';
  en?: Maybe<Scalars['String']['output']>;
};

export type UpdateBaselineInfoInput = {
  baseline_info: Array<BaselineInfoInput>;
  pathway_id: Scalars['String']['input'];
};

export type UpdatePatientDemographicsQueryInput = {
  /** Index from the array returned from the PDQ response, which was used to create the patient */
  created_patient_entry_index: Scalars['Float']['input'];
  /** Patient ID of the created patient in Awell */
  created_patient_id: Scalars['String']['input'];
  query_id: Scalars['String']['input'];
};

export type UpdatePatientDemographicsQueryPayload = Payload & {
  __typename?: 'UpdatePatientDemographicsQueryPayload';
  code: Scalars['String']['output'];
  created_patient_entry_index: Scalars['Float']['output'];
  created_patient_id: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
};

export type UpdatePatientInput = {
  patient_id: Scalars['String']['input'];
  profile: PatientProfileInput;
};

export type UpdatePatientLanguageInput = {
  /** ISO 639-1 shortcode */
  preferred_language: Scalars['String']['input'];
};

export type UpdatePatientLanguagePayload = Payload & {
  __typename?: 'UpdatePatientLanguagePayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user?: Maybe<User>;
};

export type UpdatePatientPayload = Payload & {
  __typename?: 'UpdatePatientPayload';
  code: Scalars['String']['output'];
  patient?: Maybe<User>;
  success: Scalars['Boolean']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID']['output'];
  profile?: Maybe<UserProfile>;
  tenant: Tenant;
  tenant_id: Scalars['String']['output'];
};

export type UserPayload = Payload & {
  __typename?: 'UserPayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  user: User;
};

export type UserProfile = {
  __typename?: 'UserProfile';
  address?: Maybe<Address>;
  birth_date?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  last_name?: Maybe<Scalars['String']['output']>;
  mobile_phone?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  national_registry_number?: Maybe<Scalars['String']['output']>;
  patient_code?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  preferred_language?: Maybe<Scalars['String']['output']>;
  /** Sex code as defined by ISO standard IEC_5218, 0 - NOT_KNOWN, 1 - MALE, 2 - FEMALE */
  sex?: Maybe<Sex>;
};

export enum UserQuestionType {
  Date = 'DATE',
  Description = 'DESCRIPTION',
  LongText = 'LONG_TEXT',
  MultipleChoice = 'MULTIPLE_CHOICE',
  MultipleChoiceGrid = 'MULTIPLE_CHOICE_GRID',
  MultipleSelect = 'MULTIPLE_SELECT',
  Number = 'NUMBER',
  ShortText = 'SHORT_TEXT',
  Signature = 'SIGNATURE',
  Slider = 'SLIDER',
  Telephone = 'TELEPHONE',
  YesNo = 'YES_NO'
}

export type WebhookCall = {
  __typename?: 'WebhookCall';
  created_at: Scalars['String']['output'];
  event_type: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  pathway?: Maybe<ApiPathwayContext>;
  request: WebhookCallRequest;
  responses: Array<WebhookCallResponse>;
  status: Scalars['String']['output'];
  webhook_id: Scalars['String']['output'];
  webhook_name: Scalars['String']['output'];
};

export type WebhookCallHeader = {
  __typename?: 'WebhookCallHeader';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type WebhookCallPayload = Payload & {
  __typename?: 'WebhookCallPayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  webhook_call: WebhookCall;
};

export type WebhookCallRequest = {
  __typename?: 'WebhookCallRequest';
  body: Scalars['String']['output'];
  endpoint: Scalars['String']['output'];
  headers: Array<WebhookCallHeader>;
  method: Scalars['String']['output'];
};

export type WebhookCallResponse = {
  __typename?: 'WebhookCallResponse';
  body: Scalars['String']['output'];
  date: Scalars['String']['output'];
  status: Scalars['Float']['output'];
};

export type WebhookCallsPayload = Payload & {
  __typename?: 'WebhookCallsPayload';
  code: Scalars['String']['output'];
  success: Scalars['Boolean']['output'];
  webhook_calls: Array<WebhookCall>;
};
