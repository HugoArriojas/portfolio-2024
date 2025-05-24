import { Block } from 'payload';

export const VideoEmbed: Block = {
  slug: 'videoEmbed',
  interfaceName: 'videoEmbed',
  labels: {
    singular: 'Embed',
    plural: 'Embeds',
  },
  fields: [
    {
      name: 'embedCode',
      type: 'textarea',
      label: 'Embed Code',
      required: true,
    },
  ],
};
