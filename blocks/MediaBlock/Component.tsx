import type { StaticImageData } from 'next/image';

import { cn } from 'src/utilities/cn';
import React from 'react';
import RichText from '@/components/RichText';
import { hasRichTextContent } from '@/utilities/hasRichTextContent';

import type { MediaBlock as MediaBlockProps } from '@/payload-types';

import { Media } from '../../components/Media';

type Props = MediaBlockProps & {
  breakout?: boolean;
  captionClassName?: string;
  className?: string;
  enableGutter?: boolean;
  imgClassName?: string;
  staticImage?: StaticImageData;
  disableInnerContainer?: boolean;
};

export const MediaBlock: React.FC<Props> = (props) => {
  const {
    captionClassName,
    className,
    enableGutter = true,
    imgClassName,
    media,
    staticImage,
    disableInnerContainer,
    fullWidth = false,
  } = props;

  let caption;
  if (media && typeof media === 'object') caption = media.caption;

  return (
    <div
      className={cn(
        {
          container: enableGutter && !fullWidth,
          'wrapper-lg':
            fullWidth,
        },
        className,
      )}
    >
      {(media || staticImage) && (
        <Media
          imgClassName={cn('w-full', fullWidth && 'h-auto object-cover', imgClassName)}
          resource={media}
          src={staticImage}
        />
      )}
      {caption && hasRichTextContent(caption) && (
        <div
          className={cn(
            'mt-6',
            {
              'container mx-auto px-4': fullWidth,
              container: !disableInnerContainer && !fullWidth,
            },
            captionClassName,
          )}
        >
          <RichText data={caption} enableGutter={false} />
        </div>
      )}
    </div>
  );
};
