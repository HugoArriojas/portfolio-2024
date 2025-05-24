import { Block } from 'payload';

export const PricingChart: Block = {
  slug: 'pricingChart',
  interfaceName: 'PricingChart',
  labels: {
    singular: 'Pricing Chart',
    plural: 'Pricing Charts',
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
              required: true,
              label: 'Heading',
            },
            {
              name: 'subheading',
              type: 'text',
              label: 'Subheading',
            },
            {
              name: 'prices',
              type: 'array',
              required: true,
              label: 'Price Items',
              minRows: 1,
              fields: [
                {
                  name: 'itemLabel',
                  type: 'text',
                  required: true,
                  label: 'Item Label',
                },
                {
                  name: 'itemPrice',
                  type: 'text',
                  required: true,
                  label: 'Item Price',
                },
              ],
            },
          ],
        },
        {
          label: 'Appearance',
          fields: [
            {
              name: 'bgTransparent',
              type: 'checkbox',
              label: 'Transparent Background',
              defaultValue: false,
            },
          ],
        },
      ],
    },
  ],
};
