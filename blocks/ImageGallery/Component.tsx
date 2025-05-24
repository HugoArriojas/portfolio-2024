'use client';

import { Media } from '@/components/Media';
import type { Media as MediaType } from '@/payload-types';
import { useRef } from 'react';

type ImageGalleryProps = {
  images?: Array<{
    image: string | MediaType;
    id?: string | null;
  }>;
  variant?: string | null;
};

export const ImageGallery = ({ images = [] }: ImageGalleryProps) => {
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="image-gallery relative w-full flex flex-wrap gap-6 justify-center items-center"
      ref={galleryRef}
    >
      {images.map((imageData, index) => (
        <Media
          key={index}
          resource={imageData.image}
          className="image-gallery-media not-prose rounded-md overflow-hidden w-[357px] h-[300px]"
          imgClassName="w-full h-full object-cover"
        />
      ))}
    </div>
  );
};
