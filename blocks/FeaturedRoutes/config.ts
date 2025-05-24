import type { Block } from 'payload';

export const FeaturedRoutes: Block = {
  slug: 'featuredRoutes',
  interfaceName: 'FeaturedRoutes',
  labels: {
    singular: 'Featured Route',
    plural: 'Featured Routes',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Description',
      required: true,
    },
    {
      name: 'trailInfo',
      type: 'group',
      label: 'Route Info',
      fields: [
        {
          type: 'row',
          fields: [
            {
              name: 'level',
              type: 'select',
              label: 'Difficulty Level',
              admin: {
                width: '30%',
              },
              options: [
                {
                  label: 'Easy',
                  value: 'Easy',
                },
                {
                  label: 'Moderate',
                  value: 'Moderate',
                },
                {
                  label: 'Challenging',
                  value: 'Challenging',
                },
              ],
              required: true,
            },
            {
              name: 'description',
              type: 'text',
              label: 'Difficulty Description',
              admin: {
                description:
                  'Optional: Give a more detailed description of the difficulty. ex. "Expert with winds, moderate with good conditions".',
                width: '70%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'distance',
              type: 'text',
              label: 'Distance',
              admin: {
                description: 'ex. "25 km"',
                width: '30%',
              },
            },
            {
              name: 'duration',
              type: 'text',
              label: 'Duration (in days)',
              admin: {
                description: 'ex. "2-3"',
              },
            },
            {
              name: 'portageCount',
              type: 'number',
              label: 'Portage Count',
            },
          ],
        },
        {
          name: 'mapDownload',
          type: 'upload',
          relationTo: 'media',
          label: 'Map Download',
        },
      ],
    },
    {
      name: 'buttonLabel',
      label: 'Download Button Label',
      type: 'text',
      required: true,
      admin: {
        description: 'ex. "Download Dogtooth Lake Route"',
      },
    },
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      required: true,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          label: 'Image',
          required: true,
          filterOptions: {
            mimeType: {
              contains: 'image',
            },
          },
        },
        {
          name: 'caption',
          type: 'text',
          admin: {
            description: 'Displayed as a caption under the image in gallery view.',
          },
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
  ],
};
