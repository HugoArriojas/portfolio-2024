import type { Block } from 'payload';
import { link } from '@/fields/link';

export const QuickLinks: Block = {
  slug: 'quickLinks',
  interfaceName: 'QuickLinks',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Section Heading',
    },
    {
      name: 'links',
      type: 'array',
      label: 'Quick Links',
      minRows: 1,
      maxRows: 10,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Link Title',
          required: true,
        },
        {
          name: 'useCustomIcon',
          type: 'checkbox',
          label: 'Use Custom SVG Icon',
          defaultValue: false,
        },
        {
          name: 'iconName',
          type: 'select',
          label: 'Icon',
          defaultValue: 'info',
          options: [
            { label: 'Alert', value: 'alert-triangle' },
            { label: 'Arrow Right', value: 'arrow-right' },
            { label: 'Baby', value: 'baby' },
            { label: 'Bookmark', value: 'bookmark' },
            { label: 'Calendar', value: 'calendar' },
            { label: 'Camera', value: 'camera' },
            { label: 'Check', value: 'check' },
            { label: 'Clipboard Check', value: 'clipboard-check' },
            { label: 'Clock', value: 'clock' },
            { label: 'File Text', value: 'file-text' },
            { label: 'Fish', value: 'fish' },
            { label: 'Flag', value: 'flag' },
            { label: 'Flame', value: 'flame' },
            { label: 'Globe', value: 'globe' },
            { label: 'Heart', value: 'heart' },
            { label: 'Info', value: 'info' },
            { label: 'Mail', value: 'mail' },
            { label: 'Map', value: 'map' },
            { label: 'Map Pin', value: 'map-pin' },
            { label: 'Newspaper', value: 'newspaper' },
            { label: 'Phone', value: 'phone' },
            { label: 'Scroll', value: 'scroll' },
            { label: 'Smile', value: 'smile' },
            { label: 'Star', value: 'star' },
            { label: 'Trash', value: 'trash2' },
            { label: 'Trending Up', value: 'trending-up' },
            { label: 'User', value: 'user' },
            { label: 'Users', value: 'users' },
            { label: 'X', value: 'x' },
          ],
          admin: {
            condition: (data, siblingData) => !siblingData.useCustomIcon,
          },
        },
        {
          name: 'customSvg',
          type: 'textarea',
          label: 'Custom SVG Icon',
          admin: {
            condition: (data, siblingData) => siblingData.useCustomIcon,
            description:
              'Paste the SVG code here (e.g., <svg xmlns="http://www.w3.org/2000/svg" ... </svg>)',
          },
        },
        link({
          appearances: false,
        }),
      ],
    },
  ],
  labels: {
    singular: 'Quick Links',
    plural: 'Quick Links',
  },
};
