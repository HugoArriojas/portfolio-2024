import type { Block } from 'payload';
import { linkGroup } from '@/fields/linkGroup';
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const CallToAction: Block = {
  slug: 'cta',
  interfaceName: 'CallToActionBlock',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'heading',
              type: 'text',
              required: true,
            },
            {
              name: 'body',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()];
                },
              }),
              required: false,
            },
            linkGroup({
              appearances: false,
              overrides: {
                maxRows: 3,
              },
            }),
          ],
        },
        {
          label: 'Appearance',
          fields: [
            {
              name: 'displayMode',
              type: 'select',
              label: 'Display Mode',
              options: [
                { label: 'Block', value: 'block' },
                { label: 'Section', value: 'section' },
              ],
              defaultValue: 'block',
            },
            {
              name: 'bgImage',
              type: 'upload',
              relationTo: 'media',
              admin: {
                condition: (_, siblingData) => siblingData.displayMode === 'block',
              },
            },
            {
              label: 'Text Alignment',
              name: 'textAlign',
              type: 'select',
              options: [
                { label: 'Left', value: 'left' },
                { label: 'Center', value: 'center' },
              ],
              defaultValue: 'left',
              admin: {
                condition: (_, siblingData) => siblingData.displayMode === 'block',
              },
            },
            {
              label: 'Text Colour',
              name: 'textColor',
              type: 'select',
              options: [
                { label: 'Light', value: 'light' },
                { label: 'Dark', value: 'dark' },
              ],
              defaultValue: 'light',
            },
          ],
        },
      ],
    },
  ],
  labels: {
    plural: 'Calls to Action',
    singular: 'Call to Action',
  },
};
