import type { GlobalConfig } from 'payload';

export const Analytics: GlobalConfig = {
  slug: 'analytics',
  label: 'Analytics',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Configuration',
  },
  fields: [
    {
      name: 'scripts',
      type: 'array',
      label: 'Tracking Scripts',
      labels: {
        singular: 'Script',
        plural: 'Scripts',
      },
      fields: [
        {
          name: 'name',
          type: 'text',
          label: 'Script Name',
          required: true,
          admin: {
            description: 'For internal reference (e.g. "Google Analytics", "Facebook Pixel")',
          },
        },
        {
          name: 'code',
          type: 'textarea',
          label: 'Script Code',
          required: true,
          admin: {
            description: 'This code will be inserted right before the end of the <body> tag',
            rows: 12,
          },
        },
        {
          name: 'enabled',
          type: 'checkbox',
          label: 'Enable Script',
          defaultValue: false,
        },
      ],
    },
  ],
};
