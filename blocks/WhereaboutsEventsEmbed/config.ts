import { Block } from 'payload';

export const WhereaboutsEventsEmbed: Block = {
  slug: 'whereaboutsEventsEmbed',
  interfaceName: 'whereaboutsEventsEmbed',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'widgetId',
      type: 'text',
      label: 'Widget ID',
    },
    {
      name: 'displayMode',
      type: 'select',
      options: ['grid', 'carousel'],
      defaultValue: 'grid',
    },
    {
      type: 'collapsible',
      label: 'Advanced',
      fields: [
        {
          name: 'customEmbed',
          type: 'checkbox',
          label: 'Override Embed Code',
          defaultValue: false,
          admin: {
            description: 'If checked, the embed code will be used create the widget.',
          },
        },
        {
          name: 'embedCode',
          type: 'textarea',
          label: 'Embed Code',
          admin: {
            condition: (data, siblingData) => siblingData.customEmbed,
          },
        },
      ],
    },
  ],
};
