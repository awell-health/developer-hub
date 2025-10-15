import { Space } from '@/types/space.types'
import { type WebhooksType } from '@/types/webhooks.types'

export const webhooks: WebhooksType = [
  {
    event: 'pathway.started',
    description: 'Triggered every time a care flow is started.',
    eventVariables: [
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'Then define and call a method to handle the start of the care flow in your system.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/care-flow-started`,
  },
  {
    event: 'pathway.stopped',
    description: 'Triggered every time a care flow is stopped.',
    eventVariables: [
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'When a care flow is `stopped`, all future reminders and activities are cancelled.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/care-flow-stopped`,
  },
  {
    event: 'pathway.completed',
    description: 'Triggered every time a care flow is completed.',
    eventVariables: [
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment: 'A `stopped` care flow is not considered completed.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/care-flow-completed`,
  },
  {
    event: 'pathway.deleted',
    description: 'Triggered every time a care flow is deleted.',
    eventVariables: [
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'A `deleted` care flow that is still active is `stopped` before it is deleted.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/care-flow-deleted`,
  },
  {
    event: 'activity.created',
    description:
      'Triggered every time an activity in the care flow/pathway is created, including system activities.',
    eventVariables: [
      {
        variableName: 'activity',
        jsonPath: 'event.activity',
      },
    ],
    comment:
      'Then define and call a method to handle the creation of an activity in your system.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/activity-created`,
  },
  {
    event: 'activity.updated',
    description:
      'Triggered every time an activity in the care flow/pathway is updated, including system activities.',
    eventVariables: [
      {
        variableName: 'activity',
        jsonPath: 'event.activity',
      },
    ],
    comment:
      'Not every activity is updated before it is completed; updated events may be due to changes in the activity status, or changes in the activity due date.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/activity-updated`,
  },
  {
    event: 'activity.completed',
    description:
      'Triggered every time an activity in the care flow/pathway is completed, including system activities.',
    eventVariables: [
      {
        variableName: 'activity',
        jsonPath: 'event.activity',
      },
    ],
    comment:
      'Then define and call a method to handle the completion of an activity in your system.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/activity-completed`,
  },
  {
    event: 'form.submitted',
    description: 'Triggered every time a form is submitted.',
    eventVariables: [
      {
        variableName: 'activityId',
        jsonPath: 'event.activity_id',
      },
      {
        variableName: 'submissionDate',
        jsonPath: 'event.date',
      },
      {
        variableName: 'response',
        jsonPath: 'event.response',
      },
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'Then define and call a method to handle submission of a form in your system.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/form-submitted`,
  },
  {
    event: 'data_point.collected',
    description:
      'Triggered every time a new value for a data point is collected.',
    eventVariables: [
      {
        variableName: 'data_point',
        jsonPath: 'event.data_point',
      },
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'Then define and call a method to handle the collection of a data point in your system.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/data-point-collected`,
  },
  {
    event: 'reminder.created',
    description:
      'Triggered every time a reminder for a pending activity is created.',
    eventVariables: [
      {
        variableName: 'reminder',
        jsonPath: 'event.reminder',
      },
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'Then define and call a method to handle the creation of a reminder in your system.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/reminder-created`,
  },
  {
    event: 'session.started',
    description: 'Triggered every time a hosted session is started.',
    eventVariables: [
      {
        variableName: 'session',
        jsonPath: 'event.session',
      },
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'Then define and call a method to handle the creation of a session in your system.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/session-started`,
  },
  {
    event: 'session.completed',
    description: 'Triggered every time a hosted session is completed.',
    eventVariables: [
      {
        variableName: 'session',
        jsonPath: 'event.session',
      },
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'Then define and call a method to handle the completion of a session in your system.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/session-completed`,
  },
  {
    event: 'session.expired',
    description: 'Triggered every time a hosted session is expired.',
    eventVariables: [
      {
        variableName: 'session',
        jsonPath: 'event.session',
      },
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'Then define and call a method to handle the expiration of a session in your system.',
    apiReferenceLink: `/${Space.AWELL_ORCHESTRATION}/api-reference/webhooks/session-expired`,
  },
]
