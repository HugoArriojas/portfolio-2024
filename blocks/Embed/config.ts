import { Block } from 'payload';
import { linkGroup } from '@/fields/linkGroup';

export const Embed: Block = {
  slug: 'embed',
  interfaceName: 'embed',
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
              name: 'embedCode',
              type: 'textarea',
              label: 'Paste the embed code here',
            },
            linkGroup(),
          ],
        },
        {
          label: 'Appearance',
          fields: [
            {
              name: 'background',
              type: 'select',
              label: 'Background',
              defaultValue: 'none',
              options: [
                {
                  label: 'None',
                  value: 'none',
                },
                {
                  label: 'White',
                  value: 'white',
                },
              ],
            },
            {
              name: 'size',
              type: 'select',
              label: 'Size',
              defaultValue: 'default',
              options: [
                {
                  label: 'Default',
                  value: 'default',
                },
                {
                  label: 'Wide',
                  value: 'wide',
                },
                {
                  label: 'Full Width',
                  value: 'full',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
