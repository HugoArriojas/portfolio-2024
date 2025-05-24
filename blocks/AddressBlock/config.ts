import { FixedToolbarFeature, InlineToolbarFeature, lexicalEditor, BlocksFeature } from '@payloadcms/richtext-lexical';
import { HeadingFeature } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const AddressBlock: Block = {
  slug: 'addressBlock',
  interfaceName: 'AddressSidebarBlock',
  fields: [
    {
      name: 'address',
      type: 'textarea',
      label: 'Address (Deprecated)',
    },
    {
      name: 'body',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature(), HeadingFeature({ enabledHeadingSizes: ['h4'] }), BlocksFeature({ blocks: [], inlineBlocks: [] })];
        },
      }),
      label: false,
    },
    {
      label: 'Google Maps Link',
      type: 'collapsible',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'url',
              type: 'text',
              validate: (val) => {
                if (val && !val.startsWith('https://') && !val.startsWith('http://')) {
                  return 'Please enter a valid URL (Should start with https:// or http://)';
                }
                return true;
              },
            },
            {
              name: 'label',
              type: 'text',
              defaultValue: 'See it on Google maps',
            },
          ],
        },
      ],
    },
    {
        label: 'Contact Information',
        type: 'collapsible',
        admin: {
            initCollapsed: true,
        },
        fields: [
            {
                name: 'phone',
                label: 'Phone Number',
                type: 'text',
                admin: {
                    description: 'E.g. "(555) 555-5555"',
                },
            },
            {
                name: 'email',
                label: 'Email Address',
                type: 'email',
            },
            
        ]
    }
  ],
  labels: {
    singular: 'Address Block',
    plural: 'Address Blocks',
  },
};
