import type { GlobalConfig } from 'payload';

import { link } from '@/fields/link';
import { linkGroup } from '@/fields/linkGroup';

import { revalidateNavigation } from './hooks/revalidateNavigation';

export const Navigation: GlobalConfig = {
  slug: 'navigation',
  access: {
    read: () => true,
  },
  admin: {
    group: 'Configuration',
  },
  fields: [
    {
      name: 'directLinks',
      label: 'Primary Navigation Links',
      admin: {
        description: 'Items are displayed at the top-level of the main menu.',
      },
      type: 'group',
      fields: [
        linkGroup({
          appearances: false,
          overrides: {
            label: false,
            labels: {
              singular: 'Menu Item',
              plural: 'Menu Items',
            },
          },
        }),
      ],
    },
    {
      name: 'live',
      label: '"Live" Menu',
      admin: {
        description: 'Items are displayed under the "Live" menu option.',
      },
      type: 'group',
      fields: [
        {
          name: 'menu',
          type: 'blocks',
          label: '',
          labels: {
            singular: 'Menu Item',
            plural: 'Menu Items',
          },
          blocks: [
            {
              slug: 'link',
              fields: [link({ appearances: false })],
            },
            {
              slug: 'dropdown',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text',
                },
                {
                  name: 'links',
                  label: 'Links',
                  type: 'array',
                  fields: [link({ appearances: false })],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'visit',
      label: '"Visit" Menu',
      admin: {
        description: 'Items are displayed under the "Visit" menu option.',
      },
      type: 'group',
      fields: [
        {
          name: 'menu',
          type: 'blocks',
          label: '',
          labels: {
            singular: 'Menu Item',
            plural: 'Menu Items',
          },
          blocks: [
            {
              slug: 'link',
              fields: [link({ appearances: false })],
            },
            {
              slug: 'dropdown',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text',
                },
                {
                  name: 'links',
                  label: 'Links',
                  type: 'array',
                  fields: [link({ appearances: false })],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'footer',
      label: 'Footer: "Quick Links"',
      admin: {
        description: 'Items are displayed in the footer under the "Quick Links" section.',
      },
      type: 'group',
      fields: [
        {
          name: 'menu',
          type: 'blocks',
          label: '',
          labels: {
            singular: 'Menu Item',
            plural: 'Menu Items',
          },
          blocks: [
            {
              slug: 'link',
              fields: [link({ appearances: false })],
            },
            {
              slug: 'dropdown',
              fields: [
                {
                  name: 'label',
                  label: 'Label',
                  type: 'text',
                },
                {
                  name: 'links',
                  label: 'Links',
                  type: 'array',
                  fields: [link({ appearances: false })],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  hooks: {
    afterChange: [revalidateNavigation],
  },
};
