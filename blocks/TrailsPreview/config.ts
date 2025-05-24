import type { Block } from 'payload';
import { InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';

export const TrailsPreview: Block = {
  slug: 'trailsPreview',
  interfaceName: 'TrailsPreviewSection',
  fields: [
    {
      name: 'trails',
      type: 'array',
      label: 'Trails',
      minRows: 1,
      fields: [
        {
          name: 'heading',
          type: 'text',
          label: 'Heading',
          defaultValue: 'Latest News on the Trails',
        },
        {
          name: 'instructions',
          label: 'QR Instructions',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [...rootFeatures, InlineToolbarFeature()];
            },
          }),
        },
        {
          name: 'qrCode',
          label: 'QR Code',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};
