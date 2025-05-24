import { linkGroup } from '@/fields/linkGroup';

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';
import type { Block, Field } from 'payload';

const fields: Field[] = [
  {
    type: 'tabs',
    tabs: [
      {
        label: 'Content',
        fields: [
          {
            name: 'heading',
            type: 'text',
          },
          {
            name: 'body',
            type: 'richText',
            label: false,
            editor: lexicalEditor({
              features: ({ rootFeatures }) => {
                return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()];
              },
            }),
          },
          linkGroup({
            appearances: false,
            overrides: {
              maxRows: 1,
              required: false,
              label: 'Link',
            },
          }),
          {
            name: 'media',
            type: 'upload',
            relationTo: 'media',
            required: true,
          },
        ],
      },
      {
        label: 'Appearance',
        fields: [
          {
            name: 'isOnLeft',
            type: 'checkbox',
            label: 'Swap Text/Image Placement',
            defaultValue: true,
          },
        ],
      },
    ],
  },
];

export const ImageAndText: Block = {
  slug: 'imageAndText',
  interfaceName: 'ImageAndText',
  fields: [
    {
      name: 'contentRows',
      label: false,
      labels: {
        singular: 'Row',
        plural: 'Rows',
      },
      type: 'array',
      fields,
      minRows: 1,
    },
    {
      name: 'backgroundColor',
      type: 'select',
      label: 'Background Color',
      defaultValue: 'bg-transparent',
      required: true,
      options: [
        {
          label: 'None',
          value: 'bg-transparent',
        },
        {
          label: 'Blue',
          value: 'bg-blue-200',
        },
      ],
    },
  ],
};
