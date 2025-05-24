export const sectionHeadingField = {
  blockType: 'sectionHeading',
  slug: 'sectionHeading',
  labels: {
    singular: 'Section Heading',
    plural: 'Section Headings',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Name (lowercase, no special characters)',
    },
    {
      name: 'label',
      type: 'text',
      label: 'Section Title',
      required: true,
    },
    {
      name: 'description',
      type: 'text',
      label: 'Section Description',
      required: false,
    },
  ],
};
