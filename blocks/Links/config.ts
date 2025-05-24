import { link } from '@/fields/link';
import type { Block, Field } from 'payload';

const linkFields: Field[] = [
  {
    name: 'heading',
    type: 'text',
  },
  {
    name: 'subtitle',
    type: 'text',
  },
  {
    label: 'Links',
    name: 'linkArray',
    type: 'array',
    fields: [
      link({
        appearances: false,
      }),
      {
        label: 'Link Image',
        name: 'media',
        type: 'upload',
        relationTo: 'media',
        required: false,
        admin: {
          condition: (_, __, { blockData }) => {
            return blockData?.displayMode === 'images';
          },
        },
      },
      {
        name: 'cardColor',
        type: 'select',
        label: 'Card Color',
        options: [
          {
            label: 'Bright Green',
            value: 'bg-bright-green-200', //#55C19A
          },
          {
            label: 'Light Teal',
            value: 'bg-interaction-200', //#B5CDCD
          },
          {
            label: 'Teal',
            value: 'bg-interaction-700', //#497978
          },
          {
            label: 'Navy Blue',
            value: 'bg-primary-700', //#345683
          },
          {
            label: 'Golden Yellow',
            value: 'bg-yellow-200', //#FFBF43
          },
        ],
        defaultValue: 'bg-bright-green-200',
        admin: {
          condition: (_, __, { blockData }) => {
            return blockData?.displayMode === 'buttons';
          },
        },
      },
    ],
    minRows: 1,
    labels: {
      singular: 'Link',
      plural: 'Links',
    },
  },
];

const appearanceFields: Field[] = [
  {
    name: 'displayMode',
    type: 'radio',
    label: 'Display Mode',
    defaultValue: 'images',
    options: [
      {
        label: 'Image Cards',
        value: 'images',
      },
      {
        label: 'Buttons',
        value: 'buttons',
      },
    ],
  },
  {
    name: 'backgroundColor',
    type: 'select',
    label: 'Background Color',
    options: [
      {
        label: 'None',
        value: 'bg-transparent',
      },
      {
        label: 'White',
        value: 'bg-primary-50',
      },
      {
        label: 'Dark Green',
        value: 'bg-interaction-900',
      },
    ],
    defaultValue: 'bg-interaction-900',
  },
];

export const Links: Block = {
  slug: 'links',
  interfaceName: 'Links',
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: linkFields,
        },
        {
          label: 'Appearance',
          fields: appearanceFields,
        },
      ],
    },
  ],
  labels: {
    singular: 'Links',
    plural: 'Links',
  },
};

export const SidebarLink: Block = {
  slug: 'sidebarLink',
  interfaceName: 'SidebarLink',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
    },
    link({
      appearances: false,
    }),
    {
      name: 'cardColor',
      type: 'select',
      label: 'Card Color',
      options: [
        {
          label: 'Bright Green',
          value: 'bg-bright-green-200', //#55C19A
        },
        {
          label: 'Light Teal',
          value: 'bg-interaction-200', //#B5CDCD
        },
        {
          label: 'Teal',
          value: 'bg-interaction-700', //#497978
        },
        {
          label: 'Navy Blue',
          value: 'bg-primary-700', //#345683
        },
        {
          label: 'Golden Yellow',
          value: 'bg-yellow-200', //#FFBF43
        },
      ],
      defaultValue: 'bg-bright-green-200',
    },
  ],
  labels: {
    singular: 'Link Button',
    plural: 'Link Buttons',
  },
};
