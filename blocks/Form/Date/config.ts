export const dateField = {
  slug: 'date',
  blockType: 'date',
  labels: {
    singular: 'Date',
    plural: 'Dates',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      admin: {
        label: 'Name (lowercase, no special characters)',
      },
    },
    {
      name: 'label',
      type: 'text',
      required: false,
      localized: true,
    },
    {
      name: 'width',
      type: 'number',
      defaultValue: 100,
      admin: {
        label: 'Field Width (percentage)',
      },
    },
    {
      name: 'required',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Make this field required',
      },
    },
    {
      name: 'placeholderText',
      type: 'string',
      defaultValue: 'Choose',
      admin: {
        description: 'Add a placeholder text to the date picker field',
      },
    },
    {
      name: 'description',
      type: 'text',
      admin: {
        description: 'Optional helper text to display below the field',
      },
    },
  ],
};
