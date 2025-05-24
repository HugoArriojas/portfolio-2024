import { BoldFeature, LinkFeature } from '@payloadcms/richtext-lexical';
import { InlineToolbarFeature, lexicalEditor } from '@payloadcms/richtext-lexical';
import { FixedToolbarFeature } from '@payloadcms/richtext-lexical';
import type { Block } from 'payload';

export const PageDivider: Block = {
  slug: 'pageDivider',
  interfaceName: 'PageDividerSection',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Background Image',
      filterOptions: {
        mimeType: {
          contains: 'image',
        },
      },
    },
    {
      name: 'blurb',
      type: 'checkbox',
      label: 'Show "Must See" Blurb',
      defaultValue: false,
    },
    {
      name: 'blurbText',
      type: 'richText',
      label: 'Blurb Text',
      editor: lexicalEditor({
        features: () => {
          return [ FixedToolbarFeature(), InlineToolbarFeature(), BoldFeature(), LinkFeature()];
        },
      }),
      admin: {
        condition: (_, siblingData) => siblingData?.blurb,
      },
    },
  ],
  labels: {
    singular: 'Page Divider',
    plural: 'Page Dividers',
  },
};
