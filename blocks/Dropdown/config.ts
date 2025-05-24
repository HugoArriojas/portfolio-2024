import type { Block } from 'payload';
import {
  lexicalEditor,
  HeadingFeature,
  InlineToolbarFeature,
  BlocksFeature,
} from '@payloadcms/richtext-lexical';

const editor = lexicalEditor({
  features: ({ defaultFeatures }) => {
    return [
      ...defaultFeatures,
      HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
      InlineToolbarFeature(),
      BlocksFeature({
        blocks: [],
      }),
    ];
  },
});

// Main Dropdown block for page layouts - includes subheading
export const DropdownBlock: Block = {
  slug: 'dropdown',
  interfaceName: 'DropdownBlock',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Dropdown Label',
    },
    {
      name: 'subheading',
      type: 'text',
      label: 'Subheading',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Dropdown Content',
      editor: editor,
    },
  ],
  labels: {
    singular: 'Dropdown',
    plural: 'Dropdowns',
  },
};

// Simplified Dropdown block for use within Lexical editors - no subheading
export const DropdownLexicalBlock: Block = {
  slug: 'dropdownLexical',
  interfaceName: 'DropdownLexicalBlock',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Dropdown Label',
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
      label: 'Dropdown Content',
      editor: editor,
    },
  ],
  labels: {
    singular: 'Dropdown',
    plural: 'Dropdowns',
  },
};
