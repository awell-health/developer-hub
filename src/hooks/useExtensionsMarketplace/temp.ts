export const extensions = [
  {
    key: 'awell',
    title: 'Awell API',
    icon_url:
      'https://res.cloudinary.com/da7x4rzl4/image/upload/v1678870116/Awell%20Extensions/Awell_Logo.png',
    description: 'Orchestrate care flows using the Awell Orchestration API',
    category: 'Workflow',
    author: { authorType: 'Awell' },
    settings: {
      apiUrl: {
        key: 'apiUrl',
        label: 'API url',
        obfuscated: false,
        description: 'The environment specific API url.',
      },
      apiKey: {
        key: 'apiKey',
        label: 'API key',
        obfuscated: true,
        description: 'Your orchestration API key.',
      },
    },
    actions: {
      startCareFlow: {
        key: 'startCareFlow',
        category: 'Workflow',
        title: 'Start new care flow',
        description: 'Start a new care flow from within the current care flow.',
        fields: {
          id: {
            id: 'id',
            label: 'Care flow definition ID',
            description: 'The identifier of the care flow definition to start',
            type: 'string',
          },
          patientId: {
            id: 'patientId',
            label: 'Patient ID',
            description:
              'The patient identifier. If not provided an anonymous patient is created',
            type: 'string',
            required: false,
          },
        },
        previewable: true,
      },
    },
    webhooks: [
      {
        key: 'pathwayCompleted',
        dataPoints: {
          pathway_definition_id: {
            key: 'pathway_definition_id',
            valueType: 'string',
          },
          complete_date: { key: 'complete_date', valueType: 'date' },
        },
      },
    ],
  },
  {
    key: 'hello-world',
    title: 'Hello World !',
    description:
      'An example extension developers can look at to get started with building their first extension.',
    icon_url:
      'https://res.cloudinary.com/da7x4rzl4/image/upload/v1678870116/Awell%20Extensions/Awell_Logo.png',
    category: 'Demo',
    author: { authorType: 'Awell' },
    settings: {
      secret: {
        key: 'secret',
        label: 'Secret',
        obfuscated: true,
        description: 'A secret value needed by the extension like an API key.',
      },
    },
    actions: {
      log: {
        key: 'log',
        category: 'Demo',
        title: 'Log hello world',
        description: 'This is a dummy Custom Action for extension developers.',
        fields: {
          text: {
            id: 'text',
            label: 'Message',
            description: 'A text field configured at design time',
            type: 'text',
          },
        },
        previewable: true,
        dataPoints: { hello: { key: 'hello', valueType: 'string' } },
      },
    },
    webhooks: [
      {
        key: 'demo',
        dataPoints: {
          eventType: { key: 'eventType', valueType: 'string' },
          hello: { key: 'webhookDataPoint', valueType: 'string' },
        },
      },
    ],
  },
  {
    key: 'healthie',
    category: 'Integrations',
    title: 'Healthie',
    description: 'Connect to the Healthie API and receive webhooks',
    icon_url:
      'https://res.cloudinary.com/da7x4rzl4/image/upload/v1678908303/Awell%20Extensions/HealthieLogo.png',
    author: { authorType: 'Awell' },
    settings: {
      apiUrl: {
        key: 'apiUrl',
        label: 'API url',
        obfuscated: false,
        description: 'The environment specific API url.',
      },
      apiKey: {
        key: 'apiKey',
        label: 'API key',
        obfuscated: true,
        description: 'Your healthie API key.',
      },
    },
    actions: {
      createAppointment: {
        key: 'createAppointment',
        category: 'Integrations',
        title: 'Create appointment',
        description: 'Create an appointment in Healthie.',
        fields: {
          patientId: {
            id: 'patientId',
            label: 'Patient ID',
            description: 'The patient identifier',
            type: 'string',
          },
          datetime: {
            id: 'datetime',
            label: 'Appointment date / time',
            description: 'The datetime of the appointment in ISO8601 format',
            type: 'string',
          },
          appointmentTypeId: {
            id: 'appointmentTypeId',
            label: 'Appointment type ID',
            description: 'The ID of the appointment type',
            type: 'string',
          },
        },
        dataPoints: {
          appointmentId: { key: 'appointmentId', valueType: 'string' },
        },
        previewable: true,
      },
      createTask: {
        key: 'createTask',
        category: 'Integrations',
        title: 'Create task',
        description: 'Create a new task in healthie',
        fields: {
          patientId: {
            id: 'patientId',
            label: 'Patient ID',
            description: 'The patient identifier',
            type: 'string',
          },
          content: {
            id: 'content',
            label: 'Content',
            description: 'Content of the Task',
            type: 'text',
            required: true,
          },
          due_date: {
            id: 'due_date',
            label: 'Due date',
            description: 'The due date of the task',
            type: 'string',
          },
        },
        dataPoints: { taskId: { key: 'taskId', valueType: 'string' } },
        previewable: true,
      },
      getAppointment: {
        key: 'getAppointment',
        category: 'Integrations',
        title: 'Get appointment',
        description: 'Retrieve the details of an appointment from Healthie.',
        fields: {
          appointmentId: {
            id: 'appointmentId',
            label: 'Appointment ID',
            description: 'The identifier of the appointment',
            type: 'string',
          },
        },
        dataPoints: {
          date: { key: 'date', valueType: 'date' },
          appointmentTypeId: { key: 'appointmentTypeId', valueType: 'string' },
          appointmentTypeName: {
            key: 'appointmentTypeName',
            valueType: 'string',
          },
          contactType: { key: 'contactType', valueType: 'string' },
        },
        previewable: true,
      },
      getPatient: {
        key: 'getPatient',
        category: 'Integrations',
        title: 'Get patient',
        description: 'Retrieve the details of a patient in Healthie.',
        fields: {
          patientId: {
            id: 'patientId',
            label: 'Patient ID',
            description: 'The patient identifier',
            type: 'string',
          },
        },
        dataPoints: {
          firstName: { key: 'firstName', valueType: 'string' },
          lastName: { key: 'lastName', valueType: 'string' },
          dob: { key: 'dob', valueType: 'string' },
          gender: { key: 'gender', valueType: 'string' },
          email: { key: 'email', valueType: 'string' },
          phoneNumber: { key: 'phoneNumber', valueType: 'string' },
        },
        previewable: true,
      },
    },
    webhooks: [
      {
        key: 'appointmentCreated',
        dataPoints: {
          appointmentId: { key: 'appointmentId', valueType: 'string' },
        },
      },
    ],
  },
  {
    key: 'twilio',
    title: 'Twilio',
    icon_url: 'https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg',
    description: 'Add robust messaging capabilities to your care flow.',
    category: 'Communication',
    author: { authorType: 'Awell' },
    actions: {
      smsNotification: {
        key: 'smsNotification',
        title: 'Send SMS to phone number',
        description: 'Send an SMS message to a phone number.',
        category: 'Communication',
        fields: {
          recipient: {
            id: 'recipient',
            label: '"To" phone number',
            type: 'string',
            stringType: 'phone',
            description:
              'To what phone number would you like to send an SMS message?',
            required: true,
          },
          message: {
            id: 'message',
            label: 'Message',
            type: 'text',
            required: true,
          },
        },
      },
      patientSmsNotification: {
        key: 'patientSmsNotification',
        title: 'Send SMS to patient',
        category: 'Communication',
        description:
          'Send an SMS message to the patient enrolled in this care flow.',
        fields: {
          message: {
            id: 'message',
            label: 'Message',
            type: 'text',
            required: true,
          },
        },
      },
    },
    settings: {
      accountSid: {
        label: 'Account SID',
        key: 'accountSid',
        obfuscated: true,
        required: true,
        description: 'Find your Account SID at twilio.com/console',
      },
      authToken: {
        label: 'Auth token',
        key: 'authToken',
        obfuscated: true,
        required: true,
        description: 'Find your Auth Token at twilio.com/console',
      },
      fromNumber: {
        label: '"From" number',
        key: 'fromNumber',
        obfuscated: false,
        required: true,
        description:
          '"From" specifies the Twilio phone number, short code, or messaging service that will send the text messages. This must be a Twilio phone number that you own.',
      },
    },
    webhooks: [],
  },
  {
    key: 'calDotCom',
    title: 'Cal.com',
    icon_url: 'https://cal.com/logo.svg',
    description: 'Enable scheduling in your care flows with Cal.com.',
    category: 'Scheduling',
    author: { authorType: 'HTD' },
    actions: {
      bookAppointment: {
        key: 'bookAppointment',
        title: 'Book appointment',
        description: 'Enable a stakeholder to book an appointment via Cal.com.',
        category: 'Scheduling',
        fields: {
          calLink: {
            id: 'calLink',
            label: 'Cal Link',
            type: 'string',
            required: true,
          },
        },
      },
    },
    settings: {
      apiKey: {
        label: 'API Key',
        key: 'apiKey',
        obfuscated: true,
        required: true,
        description: 'Enter an API key so Awell can communicate with Cal.com.',
      },
    },
    webhooks: [],
  },
]
