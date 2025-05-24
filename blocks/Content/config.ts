import type { Block, Field } from 'payload';

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
  UploadFeature,
  BlocksFeature,
} from '@payloadcms/richtext-lexical';

import { linkGroup } from '@/fields/linkGroup';

const columnFields: Field[] = [
  {
    name: 'richText',
    type: 'richText',
    editor: lexicalEditor({
      features: ({ rootFeatures }) => {
        return [
          ...rootFeatures,
          HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
          FixedToolbarFeature(),
          InlineToolbarFeature(),
          UploadFeature({
            collections: {
              media: {
                fields: [],
              },
            },
          }),
        ];
      },
    }),
    label: false,
  },
  linkGroup(),
];

export const Content: Block = {
  slug: 'content',
  interfaceName: 'ContentBlock',
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
              name: 'columns',
              type: 'array',
              admin: {
                initCollapsed: true,
              },
              fields: columnFields,
              maxRows: 3,
            },
            linkGroup(),
          ],
        },
      ],
    },
  ],
};

export const ContentSidebar: Block = {
  slug: 'contentSidebar',
  interfaceName: 'ContentBlockSidebar',
  labels: {
    singular: 'Content Block',
    plural: 'Content Blocks',
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
            },
            {
              name: 'richText',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                    UploadFeature({
                      collections: {
                        media: {
                          fields: [],
                        },
                      },
                    }),
                    BlocksFeature({
                      blocks: [],
                      inlineBlocks: [],
                    }),
                  ];
                },
              }),
              label: false,
            },
            linkGroup(),
          ],
        },
        {
          label: 'Appearance',
          fields: [
            {
              name: 'background',
              type: 'select',
              defaultValue: 'transparent',
              options: [
                {
                  label: 'Transparent',
                  value: 'transparent',
                },
                {
                  label: 'White',
                  value: 'white',
                },
              ],
            },
          ],
        },
      ],
    },
  
  ],
};  

