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

export const AlertLexicalBlock: Block = {
  slug: 'alertLexical',
  interfaceName: 'AlertLexicalBlock',
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: 'default',
      options: [
        { label: 'Info (Default)', value: 'default' },
        { label: 'Warning (Yellow)', value: 'warning' },
      ],
    },
    {
      name: 'text',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: () => {
          return [
            ParagraphFeature(),
            BoldFeature(),
            ItalicFeature(),
            LinkFeature({
              enabledCollections: ['pages', 'blog', 'trails'],
            }),
            FixedToolbarFeature(),
            InlineToolbarFeature(),
          ];
        },
      }),
    },
  ],
  labels: {
    singular: 'Alert',
    plural: 'Alerts',
  },
};
