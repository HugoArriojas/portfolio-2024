import { link } from '@/fields/link';
import { Block } from 'payload';

import {
  FixedToolbarFeature,
  HeadingFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const ImageGalleryWithTextBlock: Block = {
  slug: 'imageGalleryWithText',
  interfaceName: 'ImageGalleryWithText',
  labels: {
    singular: 'Image Gallery Section',
    plural: 'Image Gallery Sections',
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
              name: 'body',
              type: 'richText',
              editor: lexicalEditor({
                features: ({ rootFeatures }) => {
                  return [
                    ...rootFeatures,
                    HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                    FixedToolbarFeature(),
                    InlineToolbarFeature(),
                  ];
                },
              }),
            },
            {
              name: 'linksTitle',
              type: 'text',
            },
            {
              name: 'links',
              type: 'array',
              fields: [
                link({
                  appearances: false,
                }),
              ],
            },
            {
              name: 'galleryTitle',
              type: 'text',
              required: true,
              defaultValue: 'Open Gallery',
            },
            {
              name: 'images',
              type: 'array',
              label: 'Gallery Images',
              required: true,
              minRows: 1,
              admin: {
                initCollapsed: false,
              },
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                },
              ],
            },
          ],
        },
        {
          label: 'Appearance',
          fields: [
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
                  label: 'White',
                  value: 'bg-primary-50',
                },
                {
                  label: 'Green',
                  value: 'bg-green-700',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
