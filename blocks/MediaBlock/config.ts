import type { Block } from 'payload';

export const MediaBlock: Block = {
  slug: 'mediaBlock',
  interfaceName: 'MediaBlock',
  fields: [
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'fullWidth',
      type: 'checkbox',
      label: 'Full Width',
      defaultValue: false,
    },
  ],
};
