import { Block } from 'payload';
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical';
export const InfoCards: Block = {
  slug: 'infoCards',
  interfaceName: 'InfoCards',
  labels: {
    singular: 'Info Cards',
    plural: 'Info Cards',
  },
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
              label: 'Heading',
            },
            {
              name: 'infoCards',
              type: 'array',
              label: 'Info Cards',
              maxRows: 2,
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: false,
                },
                {
                  name: 'heading',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'paragraph',
                  type: 'richText',
                  editor: lexicalEditor({
                    features: () => {
                      return [
                        ParagraphFeature(),
                        BoldFeature(),
                        ItalicFeature(),
                        FixedToolbarFeature(),
                        InlineToolbarFeature(),
                      ];
                    },
                  }),
                },
              ],
            },
            {
              name: 'additionalInfo',
              type: 'richText',
              label: 'Additional Information',
              editor: lexicalEditor({
                features: () => {
                  return [
                    ParagraphFeature(),
                    BoldFeature(),
                    ItalicFeature(),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                  ];
                },
              }),
            },
          ],
        },
        {
          label: 'Appearance',
          fields: [
            {
              name: 'background',
              type: 'select',
              defaultValue: 'none',
              options: [
                {
                  label: 'None',
                  value: 'none',
                },
                {
                  label: 'Green',
                  value: 'green',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
