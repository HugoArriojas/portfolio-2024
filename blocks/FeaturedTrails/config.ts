import type { Block } from 'payload';
import { text } from 'payload/shared'
import {
  lexicalEditor,
  HeadingFeature,
  InlineToolbarFeature,
  FixedToolbarFeature,
  ParagraphFeature,
  BoldFeature,
  ItalicFeature,
  LinkFeature,
  OrderedListFeature,
  UnorderedListFeature,
  
} from '@payloadcms/richtext-lexical';

export const FeaturedTrails: Block = {
  slug: 'featuredTrails',
  interfaceName: 'FeaturedTrails',
  labels: {
    singular: 'Featured Trail',
    plural: 'Featured Trails',
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
      label: 'Trail Info',
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
                  'Optional: Give a more detailed description of the difficulty. ex. "Expert by bike, moderate by foot".',
                width: '70%',
              },
            },
          ],
        },
        {
          type: 'row',
          fields: [
            {
              name: 'type',
              type: 'text',
              label: 'Trail Type',
              admin: {
                description: 'ex. "Hiking and Snowshoeing"',
                width: '50%',
              },
            },
            {
              name: 'distance',
              type: 'text',
              label: 'Distance',
              admin: {
                description: 'ex. "25 km"',
                width: '50%',
              },
            },
          ],
        },
        {
          name: 'location',
          type: 'text',
        },
        {
          type: 'row',
          fields: [
            {
              name: 'mapLink',
              type: 'text',
              label: 'Maps Link',
              admin: {
                description: 'ex. "https://www.google.com/maps/place/Trail+Name"',
                width: '50%',
              },
              validate: (val, args) => {
                if (!val.startsWith('http')) {
                  return 'Must be a valid URL (should start with http:// or https://)';
                }
                return text(val, args) 
              },
            },
            {
              name: 'mapLinkLabel',
              type: 'text',
              label: 'Link Text',
              defaultValue: 'See on Google maps',
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
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
    {
      name: 'dropdown',
      type: 'group',
      label: 'More Details (Dropdown)',
      fields: [
        {
          name: 'showDropdown',
          type: 'checkbox',
          label: 'Show More Details Dropdown',
          defaultValue: false,
        },
        {
          name: 'label',
          type: 'text',
          label: 'Dropdown Label',
          required: true,
          admin: {
            description: 'e.g. "Check Trail Live Conditions"',
            condition: (_, siblingData) => siblingData?.showDropdown,
          },
        },
        {
          name: 'details',
          type: 'richText',
          label: 'Details',
          required: true,
          editor: lexicalEditor({
            features: () => {
              return [
                HeadingFeature({ enabledHeadingSizes: ['h3', 'h4'] }),
                ParagraphFeature(),
                BoldFeature(),
                ItalicFeature(),
                LinkFeature(),
                OrderedListFeature(),
                UnorderedListFeature(),
                FixedToolbarFeature(),
                InlineToolbarFeature(),
              ];
            },
          }),
          admin: {
            condition: (_, siblingData) => siblingData?.showDropdown,
          },
        },
        {
          name: 'mapEmbed',
          type: 'code',
          label: 'Map Embed',
          admin: {
            description:
              'ex.: <iframe loading="lazy" src="https://www.trailforks.com/widgets/region_map/?rid=56707&amp;w=800px&amp..."',
            language: 'html',
            condition: (_, siblingData) => siblingData?.showDropdown,
          },
        },
      ],
    },
  ],
};
