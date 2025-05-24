import { Block } from 'payload';

export const ImageGalleryBlock: Block = {
  slug: 'imageGallery',
  interfaceName: 'ImageGallery',
  labels: {
    singular: 'Image Gallery',
    plural: 'Image Galleries',
  },
  fields: [
    {
      name: 'images',
      type: 'array',
      label: 'Gallery Images',
      required: true,
      minRows: 1,
      admin: {
        initCollapsed: false,
      },
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
};
