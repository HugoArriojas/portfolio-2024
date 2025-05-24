import { link } from '@/fields/link';
import { Block } from 'payload';

export const LogoGrid: Block = {
  slug: 'logoGrid',
  interfaceName: 'LogoGrid',
  labels: {
    singular: 'Logo Grid',
    plural: 'Logo Grids',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    {
      name: 'backgroundColor',
      type: 'select',
      required: true,
      defaultValue: 'bg-none',
      options: [
        {
          label: 'None',
          value: 'bg-none',
        },
        {
          label: 'White',
          value: 'bg-white',
        },
      ],
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
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
};
