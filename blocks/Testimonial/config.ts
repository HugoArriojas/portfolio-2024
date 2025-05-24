import type { Block } from 'payload';
import { InlineToolbarFeature, lexicalEditor, HeadingFeature } from '@payloadcms/richtext-lexical';

export const TestimonialSection: Block = {
  slug: 'testimonial',
  interfaceName: 'TestimonialSection',
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Testimonial',
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      fields: [
        {
          name: 'testimonial',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4'] }),
                InlineToolbarFeature(),
              ];
            },
          }),
        },
        {
          name: 'author',
          type: 'text',
        },
        {
          name: 'title',
          type: 'textarea',
          label: 'Title(s)',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};

export const TestimonialLexicalBlock: Block = {
  slug: 'testimonialLexical',
  interfaceName: 'TestimonialLexicalBlock',
  labels: {
    singular: 'Testimonials',
    plural: 'Testimonials',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      label: 'Heading',
      defaultValue: 'Testimonial',
    },
    {
      name: 'testimonials',
      type: 'array',
      label: 'Testimonials',
      minRows: 1,
      fields: [
        {
          name: 'testimonial',
          type: 'richText',
          editor: lexicalEditor({
            features: ({ rootFeatures }) => {
              return [
                ...rootFeatures,
                HeadingFeature({ enabledHeadingSizes: ['h2', 'h3', 'h4', 'h5', 'h6'] }),
                InlineToolbarFeature(),
              ];
            },
          }),
        },
        {
          name: 'author',
          type: 'text',
        },
        {
          name: 'title',
          type: 'textarea',
          label: 'Title(s)',
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};