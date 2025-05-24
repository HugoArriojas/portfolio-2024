import type { Block } from 'payload';
import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  ParagraphFeature,
} from '@payloadcms/richtext-lexical';

export const TrailsUpdate: Block = {
  slug: 'trailsUpdate',
  interfaceName: 'TrailsUpdateBlock',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
      admin: {
        description: 'Optional',
      },
    },
    {
      type: 'group',
      label: 'QR Code',
      name: 'qrCode',
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          filterOptions: {
            mimeType: {
              contains: 'image',
            },
          },
        },
        {
          name: 'link',
          type: 'text',
          label: 'Link',
        },
      ],
      admin: {
        description: 'Optional QR code to display in the right column',
      },
    },
    {
      name: 'body',
      type: 'richText',
      label: 'Body Text',
      admin: {
        description: 'Content to display below the QR code in the right column',
      },
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
};
