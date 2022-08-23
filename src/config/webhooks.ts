import { type WebhooksType } from '@/types/webhooks.types'

export const webhooks: WebhooksType = [
  {
    event: 'pathway.started',
    description: 'Triggered every time a pathway is started.',
    eventVariables: [
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'Then define and call a method to handle the start of the pathway in your system.',
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/pathway-started',
  },
  {
    event: 'pathway.completed',
    description: 'Triggered every time a pathway is completed.',
    eventVariables: [
      {
        variableName: 'pathway',
        jsonPath: 'event.pathway',
      },
    ],
    comment:
      'Then define and call a method to handle the completion of the pathway in your system.',
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/pathway-completed',
  },
  {
    event: 'activity.created',
    description:
      'Triggered every time an activity in the pathway is created, including system activities.',
    eventVariables: [
      {
        variableName: 'activity',
        jsonPath: 'event.activity',
      },
    ],
    comment:
      'Then define and call a method to handle the creation of an activity in your system.',
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/activity-created',
  },
  {
    event: 'activity.completed',
    description:
      'Triggered every time an activity in the pathway is completed, including system activities.',
    eventVariables: [
      {
        variableName: 'activity',
        jsonPath: 'event.activity',
      },
    ],
    comment:
      'Then define and call a method to handle the completion of an activity in your system.',
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/activity-completed',
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
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/form-submitted',
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
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/data-point-collected',
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
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/reminder-created',
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
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/session-started',
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
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/session-completed',
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
    apiReferenceLink:
      '/awell-orchestration/api-reference/webhooks/session-expired',
  },
]
