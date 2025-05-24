import type { GlobalConfig } from 'payload';

import { revalidateHomepage } from './hooks/revalidateHomepage';
import { generatePreviewPath } from '@/utilities/generatePreviewPath';
import { linkGroup } from '@/fields/linkGroup';
import { link } from '@/fields/link';

import {
  FixedToolbarFeature,
  InlineToolbarFeature,
  lexicalEditor,
} from '@payloadcms/richtext-lexical';

export const Homepage: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Posts',
    livePreview: {
      url: ({ req }) => {
        const path = generatePreviewPath({
          collection: 'homepage',
          slug: 'home',
          req,
        });

        return path;
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        collection: 'homepage',
        slug: 'home',
        req,
      }),
  },
  fields: [
    {
      name: 'notices',
      type: 'array',
      fields: [
        {
          name: 'heading',
          label: 'Heading',
          type: 'text',
        },
        {
          name: 'body',
          label: 'Body',
          type: 'textarea',
        },
        linkGroup({
          appearances: false,
          overrides: {
            maxRows: 1,
          },
        }),
      ],
    },
    {
      name: 'landAcknowledgement',
      type: 'group',
      label: 'Land Acknowledgement',
      fields: [
        {
          name: 'backgroundImage',
          type: 'upload',
          relationTo: 'media',
          label: 'Background Image',
        },
        {
          name: 'content',
          type: 'richText',
          label: 'Text Content',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ];
            },
          }),
        },
      ],
    },
    {
      name: 'socialMediaGallery',
      type: 'group',
      label: 'Social Media Gallery',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Gallery Title',
          defaultValue: 'Follow the Township on Instagram',
        },
        {
          name: 'images',
          type: 'array',
          label: 'Gallery Images',
          minRows: 0,
          maxRows: 5,
          labels: {
            singular: 'Image',
            plural: 'Images',
          },
          fields: [
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              required: true,
              label: 'Image',
            },
            link({
              appearances: false,
              noFieldsRequired: true,
              disableLabel: true,
              overrides: {
                admin: {
                  description: 'Optional link for the logo',
                },
              },
            }),
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateHomepage],
  },
};
