import type { Block, Field } from 'payload';

const fields: Field[] = [
  {
    name: 'postsCollection',
    type: 'radio',
    options: [
      {
        label: 'Talk of the Town',
        value: 'blog',
      },
      {
        label: 'Trails',
        value: 'trails',
      },
    ],
    defaultValue: 'blog',
    admin: {
      layout: 'horizontal',
    },
  },
  {
    name: 'postsPerPage',
    type: 'number',
    defaultValue: 6,
    admin: {
      description: 'Number of posts to load per page when clicking "View More"',
    },
  },
];

export const PostsFeed: Block = {
  slug: 'postsFeed',
  interfaceName: 'PostsFeed',
  fields,
};
