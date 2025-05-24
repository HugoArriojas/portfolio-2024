import type { GlobalConfig } from 'payload';
// import { revalidateSettings } from '../hooks/revalidateSettings';
import { revalidateSettings } from '@/hooks/revalidateSettings';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { FixedToolbarFeature } from '@payloadcms/richtext-lexical';

export const SiteSettings: GlobalConfig = {
  slug: 'settings',
  admin: {
    group: 'Configuration',
    hideAPIURL: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alertBanner',
      type: 'richText',
      label: 'Alert Banner',
      admin: {
        description:
          'Text to display in the alert banner at the top of the home, live, and visit pages. Leave empty to hide the banner.',
      },
      editor: lexicalEditor({
        features: ({ rootFeatures }) => {
          return [...rootFeatures, FixedToolbarFeature()];
        },
      }),
    },
    {
      name: 'siteDescription',
      type: 'textarea',
      defaultValue: '',
    },
    {
      name: 'contactInfo',
      label: 'Contact Information',
      type: 'textarea',
      defaultValue: '',
      admin: {
        description: 'This will appear in the website footer.',
      },
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          required: true,
          options: [
            { label: 'Facebook', value: 'facebook' },
            { label: 'Instagram', value: 'instagram' },
            { label: 'Pinterest', value: 'pinterest' },
            { label: 'X', value: 'x' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'YouTube', value: 'youtube' },
            { label: 'Other', value: 'other' },
          ],
        },
        {
          name: 'customIcon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          admin: {
            condition: (_, siblingData) => siblingData?.platform === 'other',
            description:
              'Upload an SVG icon for social media platform not found in the list',
          },
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        initCollapsed: true,
      },
    },
  ],
  hooks: {
    afterChange: [revalidateSettings],
  },
};
