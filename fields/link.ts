import type { Field } from 'payload';

import deepMerge from '@/utilities/deepMerge';

export type LinkAppearances =
  | 'default'
  | 'inverted'
  | 'outline'
  | 'lg_green'
  | 'lg_white'
  | 'lg_map'
  | 'no_background';

export const appearanceOptions: Record<LinkAppearances, { label: string; value: string }> = {
  default: {
    label: 'Default',
    value: 'default',
  },
  inverted: {
    label: 'Inverted',
    value: 'inverted',
  },
  outline: {
    label: 'Outline',
    value: 'outline',
  },
  lg_green: {
    label: 'Large - Green',
    value: 'lg_green',
  },
  lg_white: {
    label: 'Large - White',
    value: 'lg_white',
  },
  lg_map: {
    label: 'Large - Map',
    value: 'lg_map',
  },
  no_background: {
    label: 'No Background',
    value: 'no_background',
  },
};

type LinkType = (options?: {
  appearances?: LinkAppearances[] | false;
  disableLabel?: boolean;
  overrides?: Record<string, unknown>;
  noFieldsRequired?: boolean;
}) => Field;

export const link: LinkType = ({
  appearances,
  disableLabel = false,
  overrides = {},
  noFieldsRequired = false,
} = {}) => {
  const linkResult: Field = {
    name: 'link',
    type: 'group',
    admin: {
      hideGutter: true,
    },
    fields: [
      {
        type: 'row',
        fields: [
          {
            name: 'type',
            type: 'radio',
            admin: {
              layout: 'horizontal',
              width: '50%',
            },
            defaultValue: 'reference',
            options: [
              {
                label: 'Internal link',
                value: 'reference',
              },
              {
                label: 'Custom URL',
                value: 'custom',
              },
            ],
          },
          {
            name: 'newTab',
            type: 'checkbox',
            admin: {
              style: {
                alignSelf: 'flex-end',
              },
              width: '50%',
            },
            label: 'Open in new tab',
          },
        ],
      },
    ],
  };

  const linkTypes: Field[] = [
    {
      name: 'reference',
      type: 'relationship',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'reference',
        description: 'Note: Links to unpublished pages will not be displayed.',
      },
      label: 'Document to link to',
      relationTo: ['pages', 'blog', 'trails', 'media'],
      required: !noFieldsRequired,
    },
    {
      name: 'url',
      type: 'text',
      admin: {
        condition: (_, siblingData) => siblingData?.type === 'custom',
      },
      label: 'Custom URL',
      required: !noFieldsRequired,
    },
  ];

  if (!disableLabel) {
    linkTypes.map((linkType) => ({
      ...linkType,
      admin: {
        ...linkType.admin,
        width: '50%',
      },
    }));

    linkResult.fields.push({
      type: 'row',
      fields: [
        ...linkTypes,
        {
          name: 'label',
          type: 'text',
          admin: {
            width: '50%',
          },
          label: 'Label',
          required: !noFieldsRequired,
        },
      ],
    });
  } else {
    linkResult.fields = [...linkResult.fields, ...linkTypes];
  }

  if (appearances !== false) {
    let appearanceOptionsToUse = [
      appearanceOptions.default,
      appearanceOptions.inverted,
      appearanceOptions.lg_green,
      appearanceOptions.lg_white,
      appearanceOptions.lg_map,
      appearanceOptions.no_background,
    ];

    if (appearances) {
      appearanceOptionsToUse = appearances.map((appearance) => appearanceOptions[appearance]);
    }

    linkResult.fields.push({
      name: 'appearance',
      type: 'select',
      admin: {
        description: 'Choose how the link should be rendered.',
      },
      defaultValue: 'default',
      options: appearanceOptionsToUse,
    });
  }

  return deepMerge(linkResult, overrides);
};
