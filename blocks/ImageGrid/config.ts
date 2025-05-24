import { Block } from 'payload';

export const ImageGrid: Block = {
  slug: 'imageGrid',
  interfaceName: 'ImageGrid',
  labels: {
    singular: 'Image Grid',
    plural: 'Image Grids',
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
              name: 'images',
              type: 'array',
              required: true,
              label: 'Images',
              minRows: 1,
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
              name: 'background',
              type: 'select',
              defaultValue: 'default',
              options: [
                {
                  label: 'Default',
                  value: 'default',
                },
                {
                  label: 'Dark',
                  value: 'dark',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
