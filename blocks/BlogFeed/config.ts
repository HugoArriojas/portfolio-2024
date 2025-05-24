import type { Block } from 'payload';

export const BlogFeed: Block = {
  slug: 'blogFeed',
  interfaceName: 'BlogFeed',
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Section Title',
      defaultValue: 'All Posts',
      required: true,
    },
    {
      name: 'limitToShow',
      type: 'number',
      label: 'Number of posts to show at a time',
      defaultValue: 3,
      required: true,
    },
  ],
};
