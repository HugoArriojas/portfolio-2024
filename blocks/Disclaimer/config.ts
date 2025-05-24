import type { Block } from 'payload';
import {
  InlineToolbarFeature,
  FixedToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const Disclaimer: Block = {
  slug: 'disclaimer',
  interfaceName: 'Disclaimer',
  fields: [
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature(), InlineToolbarFeature()];
        },
      }),
      required: true,
      label: 'Disclaimer Content',
    },
  ],
};
